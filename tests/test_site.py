from html.parser import HTMLParser
from pathlib import Path
import json,re,unittest,xml.etree.ElementTree as ET
SITE=Path(__file__).resolve().parents[1]/'site'
class Scan(HTMLParser):
 def __init__(self,text):
  super().__init__();self.tags=[];self.topics=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs);self.tags.append((tag,a))
  if tag=='article' and 'topic' in a.get('class','').split():self.topics.append(a)
class SiteTests(unittest.TestCase):
 def test_coverage(self):
  s=Scan((SITE/'index.html').read_text());self.assertEqual(len(s.topics),321)
  self.assertEqual(len({x['id'] for x in s.topics}),321)
  expected={1:35,2:13,3:23,4:24,5:52,6:17,7:26,8:29,9:32,10:23,11:47}
  for w,n in expected.items():self.assertEqual(sum(x['data-week']==str(w) for x in s.topics),n)
 def test_consolidated_topics_have_matching_content_and_preserved_sources(self):
  html=(SITE/'index.html').read_text()
  articles={}
  for article in re.findall(r'<article class="topic"[\s\S]*?</article>',html):
   topic_id=Scan(article).topics[0]['id']
   articles[topic_id]=article
  catalog=json.loads((SITE/'course-topics.js').read_text().split(' = ',1)[1].strip().removesuffix(';'))
  metadata={t['id']:t for t in catalog['topics']}
  audit=json.loads((SITE.parent/'TOPIC_DUPLICATES.json').read_text())
  duplicates={t['id']:t['duplicateOf'] for t in catalog['topics'] if 'duplicateOf' in t}
  self.assertEqual(duplicates,{g['duplicateId']:g['canonicalId'] for g in audit['groups']})
  self.assertEqual(len(articles)-len(duplicates),audit['uniqueTopics'])
  self.assertEqual(len(duplicates),12)
  def content(topic_id):
   # Only this source-link label differs in the two sequence-diagram copies.
   return articles[topic_id].split('<div class="answer">',1)[1].rsplit('</details>',1)[0].replace(
    '<p class="source-note">Video Q+ —','<p class="source-note">Video —')
  for duplicate,canonical in duplicates.items():
   self.assertNotIn(canonical,duplicates) # No broken/chained aliases.
   self.assertEqual(metadata[duplicate]['topicKey'],metadata[canonical]['topicKey'])
   self.assertEqual(content(duplicate),content(canonical),duplicate)
   for topic_id in (duplicate,canonical):
    self.assertIn('schedule/week'+str(metadata[topic_id]['week'])+'/topics.html#',articles[topic_id])
  # Catch any further whole-topic duplicates; retain partial overlaps.
  retained=[t['id'] for t in catalog['topics'] if t['id'] not in duplicates]
  self.assertEqual(len(retained),len({content(topic_id) for topic_id in retained}))
 def test_safe_assets_and_markup(self):
  s=Scan((SITE/'index.html').read_text())
  for tag,a in s.tags:
   self.assertNotIn(tag,{'iframe','object','embed','form'})
   self.assertFalse(any(k.startswith('on') for k in a))
   if tag in {'img','script','link'}:
    attr='href' if tag=='link' else 'src';url=a.get(attr,'')
    self.assertTrue(url.startswith('./'),url);self.assertTrue((SITE/url[2:]).is_file(),url)
   if tag=='a' and 'href' in a:self.assertRegex(a['href'],r'^(https?://|mailto:|#|\./(?:index|flashcards|diagrams|questions)\.html(?:#|$))')
  html=(SITE/'index.html').read_text();self.assertIn('Content-Security-Policy',html)
  self.assertNotIn('unsafe-eval',html);self.assertNotIn('unsafe-inline',html)
 def test_no_runtime_endpoints_or_secrets(self):
  for p in SITE.glob('*.js'):
   text=p.read_text();self.assertNotRegex(text,r'\b(?:eval|fetch)\s*\(|new\s+Function|XMLHttpRequest|WebSocket')
   self.assertNotRegex(text,r'localhost|127\.0\.0\.1|/Users/|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}')
 def test_svg_is_inert(self):
  for p in (SITE/'assets').glob('*.svg'):
   for e in ET.fromstring(p.read_bytes()).iter():
    self.assertNotIn(e.tag.split('}')[-1],{'script','iframe','object','embed','animate','set','metadata','namedview'})
    for k,v in e.attrib.items():
     self.assertFalse(k.lower().startswith('on'))
     if 'href' in k.lower():self.assertRegex(v,r'^(#|data:image/(png|jpeg|gif|webp);base64,)')
 def test_course_diagram_pngs_have_no_embedded_metadata(self):
  import struct,zlib
  files=list((SITE/'diagram-assets').glob('*.png'))
  self.assertTrue(files)
  for path in files:
   raw=path.read_bytes();self.assertEqual(raw[:8],b'\x89PNG\r\n\x1a\n');offset=8
   while offset<len(raw):
    size=struct.unpack('>I',raw[offset:offset+4])[0];kind=raw[offset+4:offset+8];payload=raw[offset+8:offset+8+size]
    self.assertIn(kind,{b'IHDR',b'IDAT',b'IEND',b'PLTE',b'tRNS'})
    self.assertEqual(zlib.crc32(kind+payload)&0xffffffff,struct.unpack('>I',raw[offset+8+size:offset+12+size])[0])
    offset+=size+12
   self.assertEqual(offset,len(raw))
 def test_recovered_terms(self):
  text=(SITE/'index.html').read_text();self.assertIn('PascalCase',text);self.assertIn('current object',text)
if __name__=='__main__':unittest.main()

class QuestionTests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  prefix='globalThis.COURSE_FLASHCARDS = '
  text=(SITE/'flashcards-data.js').read_text()
  assert text.startswith(prefix) and text.endswith(';\n')
  cls.bank=json.loads(text[len(prefix):-2])['cards']
 def test_every_question_is_source_backed(self):
  class Text(HTMLParser):
   def __init__(self):
    super().__init__();self.stack=[];self.article=None;self.quick=False;self.bold=False;self.words={};self.bold_words={}
   def handle_starttag(self,tag,attrs):
    a=dict(attrs)
    if tag not in {'img','br','hr','input','meta','link'}:self.stack.append((tag,self.article,self.quick,self.bold))
    if tag=='article':self.article=a.get('id');self.words[self.article]=[];self.bold_words[self.article]=[]
    if 'quick' in a.get('class','').split():self.quick=True
    if tag in {'strong','b'}:self.bold=True
   def handle_endtag(self,tag):
    for i in range(len(self.stack)-1,-1,-1):
     if self.stack[i][0]==tag:
      _,self.article,self.quick,self.bold=self.stack[i];self.stack=self.stack[:i];break
   def handle_data(self,text):
    if self.quick and self.article and text.strip():
     self.words[self.article].append(text.strip())
     if self.bold:self.bold_words[self.article].append(text.strip())
  parser=Text();parser.feed((SITE/'index.html').read_text())
  norm=lambda text:re.sub(r'\s+',' ',text).strip()
  for card in self.bank:
   self.assertEqual(card['prompt'].replace('_____',card['answer']),card['passage'],card['id'])
   self.assertIn(card['passage'],norm(' '.join(parser.words[card['topicId']])),card['id'])
   self.assertIn(card['answer'],norm(' '.join(parser.bold_words[card['topicId']])),card['id'])
 def test_guide_key_theory_is_exactly_the_core_emphasis(self):
  class Core(HTMLParser):
   def __init__(self):
    super().__init__();self.topic=None;self.quick=False;self.depth=0;self.bold=False;self.current=[];self.items={};self.context=False;self.context_depth=0
   def handle_starttag(self,tag,attrs):
    a=dict(attrs)
    if tag=='article':self.topic=a['id'];self.items[self.topic]=[]
    if tag=='div' and a.get('class')=='quick':self.quick=True;self.depth=1
    elif self.quick and tag=='div':self.depth+=1
    if self.quick and a.get('class')=='context-content':self.context=True;self.context_depth=self.depth
    if self.quick and tag=='strong':self.bold=True;self.current=[]
   def handle_data(self,text):
    if self.quick and self.bold:self.current.append(text)
    elif self.quick and text.strip():
     assert self.context or text=='See Full text for this topic.',text
   def handle_endtag(self,tag):
    if self.quick and tag=='strong':self.items[self.topic].append(''.join(self.current));self.bold=False
    if self.quick and tag=='div':
     if self.depth==self.context_depth:self.context=False
     self.depth-=1
     if not self.depth:self.quick=False
  parser=Core();parser.feed((SITE/'index.html').read_text())
  self.assertEqual(parser.items,json.loads((SITE.parent/'CORE_STATEMENTS.json').read_text())['topics'])
  css=(SITE/'ui.css').read_text()
  self.assertIn('.topic .full{display:none}',css)
  self.assertIn('.full-mode .topic .full{display:block}',css)
 def test_key_theory_context_is_collapsed_and_source_backed(self):
  class Plain(HTMLParser):
   def __init__(self,text):super().__init__();self.words=[];self.feed(text)
   def handle_data(self,text):
    if text.strip():self.words.append(text.strip())
   def text(self):return re.sub(r'\s+',' ',' '.join(self.words)).strip()
  html=(SITE/'index.html').read_text()
  disclosures=[a for tag,a in Scan(html).tags if tag=='details' and a.get('class')=='point-context']
  self.assertTrue(disclosures)
  self.assertTrue(all('open' not in item for item in disclosures))
  for article in re.findall(r'<article class="topic"[\s\S]*?</article>',html):
   source=Plain(article.split('<div class="source-content">',1)[1].rsplit('</details>',1)[0]).text()
   for context in re.findall(r'<div class="context-content">([\s\S]*?)</div>',article):
    text=Plain(context).text()
    self.assertTrue(text)
    self.assertIn(text,source)
  encapsulation=re.search(r'<article class="topic"[^>]+id="W1.1d"[\s\S]*?</article>',html)[0]
  contexts=re.findall(r'<details class="point-context">[\s\S]*?</details>',encapsulation)
  self.assertEqual(len(contexts),2)
  self.assertIn('<summary><strong>1. The packaging aspect:</strong></summary>',contexts[0])
  self.assertIn('An object packages data and related behavior together into one self-contained unit.',contexts[0])
  oop=re.search(r'<article class="topic"[^>]+id="W1.1a"[\s\S]*?</article>',html)[0].split('<details class="full">')[0]
  self.assertNotIn('Java is primarily',oop)
  self.assertIn('<li><strong>Some programming languages support multiple paradigms.</strong></li>',oop)
 def test_unique_ids_and_week_coverage(self):
  coverage=json.loads((SITE.parent/'FLASHCARD_COVERAGE.json').read_text())
  self.assertEqual(len(self.bank),coverage['questionCount'])
  self.assertGreater(len(self.bank),0)
  self.assertLess(len(self.bank),coverage['previousCount'])
  self.assertEqual(len(self.bank),len({c['id'] for c in self.bank}))
  self.assertEqual({c['week'] for c in self.bank},set(range(1,12)))
  for c in self.bank:self.assertRegex(c['source'],r'^https://nus-cs2103-ay2627-s1.github.io/website/schedule/week\d+/topics.html#')
 def test_flashcard_page_uses_local_scripts_and_no_handlers(self):
  for tag,a in Scan((SITE/'flashcards.html').read_text()).tags:
   self.assertFalse(any(k.startswith('on') for k in a))
   if tag in {'script','link'}:
    url=a.get('src') if tag=='script' else a.get('href');self.assertTrue(url.startswith('./'));self.assertTrue((SITE/url[2:]).is_file())

 def test_questions_use_only_short_core_emphasis(self):
  core=json.loads((SITE.parent/'CORE_STATEMENTS.json').read_text())['topics']
  for card in self.bank:
   self.assertIn(card['passage'],core[card['topicId']],card['id'])
   self.assertLessEqual(len(card['passage'].split()),35,card['id'])
   self.assertLessEqual(len(card['passage']),260,card['id'])
  # This extra definition was in a supplementary panel, not the main point.
  abstraction=[c['passage'] for c in self.bank if c['topicId']=='W1.1c']
  self.assertFalse(any('Abstraction is a technique' in x for x in abstraction))
  # Dimmed examples and plain explanatory follow-up must not enter prompts.
  oop=[c['passage'] for c in self.bank if c['topicId']=='W1.1a']
  self.assertFalse(any('Java is primarily' in x for x in oop))
  debugging=[c['passage'] for c in self.bank if c['topicId']=='W6.4a']
  self.assertTrue(any('infection' in x for x in debugging))
  self.assertFalse(any('Infections can spread' in x for x in debugging))
 def test_source_evidence_is_collapsed_by_default(self):
  attrs=next(a for tag,a in Scan((SITE/'flashcards.html').read_text()).tags if a.get('id')=='fc-passage-wrap')
  self.assertNotIn('open',attrs)
  self.assertTrue(any(tag=='details' and a.get('id')=='fc-passage-wrap' for tag,a in Scan((SITE/'flashcards.html').read_text()).tags))

class QuestionBankTests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  import importlib.util
  spec=importlib.util.spec_from_file_location('build_questions',SITE.parent/'tools'/'build_questions.py')
  cls.builder=importlib.util.module_from_spec(spec);spec.loader.exec_module(cls.builder)
  cls.text=(SITE/'questions-data.js').read_text(encoding='utf-8')
  prefix='globalThis.COURSE_QUESTIONS = '
  assert cls.text.startswith(prefix) and cls.text.endswith(';\n')
  cls.data=json.loads(cls.text[len(prefix):-2]);cls.bank=cls.data['questions']
  cls.catalog={t['id']:t for t in json.loads((SITE.parent/'CONTENT_SOURCES.json').read_text())['topics']}
 def test_data_file_equals_a_fresh_build(self):
  self.assertEqual(self.builder.build(),self.text)
 def test_top_level_shape(self):
  self.assertEqual(self.data['version'],1);self.assertEqual(self.data['snapshot'],'2026-11-11');self.assertEqual(self.data['ab3Commit'],'56d1ffb')
  self.assertEqual(len(self.bank),540)
  keys=['id','type','week','topic','topicId','sources','subtopic','basis','ab3','stem','options','explanation','optional']
  for q in self.bank:self.assertEqual(list(q),keys,q['id'])
 def test_ids_are_unique_and_well_formed(self):
  self.assertEqual(len({q['id'] for q in self.bank}),len(self.bank))
  for q in self.bank:
   m=re.fullmatch(r'W(\d+)\.(\d+)-(\d{2})',q['id']);self.assertTrue(m,q['id'])
   self.assertEqual(int(m[1]),q['week']);self.assertTrue(q['topic'].startswith('[W%s.%s] '%(m[1],m[2])),q['id'])
 def test_option_counts_and_keys(self):
  for q in self.bank:
   keys=[o['key'] for o in q['options']];correct=[o for o in q['options'] if o['correct']]
   self.assertEqual(keys,list('ABCDE'[:len(keys)]),q['id'])
   if q['type']=='MCQ':self.assertEqual((len(keys),len(correct)),(4,1),q['id'])
   else:self.assertEqual(q['type'],'MRQ');self.assertTrue(3<=len(keys)<=5 and len(correct)>=2,q['id'])
   texts=[o['text'].casefold() for o in q['options']];self.assertEqual(len(set(texts)),len(texts),q['id'])
   self.assertTrue(all(o['text'] and '\u2705' not in o['text'] for o in q['options']),q['id'])
   self.assertTrue(q['stem'] and q['explanation'],q['id']);self.assertIn(q['basis'],{'bold','body','panel'})
 def test_sources_exist_and_agree_with_week_and_topic(self):
  for q in self.bank:
   self.assertEqual(q['topicId'],q['sources'][0],q['id'])
   self.assertEqual(q['optional'],q['topic'].endswith(': OPTIONAL'),q['id'])
   for source in q['sources']:
    self.assertIn(source,self.catalog,q['id'])
    self.assertEqual(self.catalog[source]['group'],q['topic'],q['id']);self.assertEqual(self.catalog[source]['week'],q['week'],q['id'])
    self.assertEqual(self.data['sourceLinks'][source]['url'],self.catalog[source]['source'])
 def test_every_topic_group_with_content_has_questions(self):
  groups={t['group'] for t in self.catalog.values()};covered={q['topic'] for q in self.bank};stubs=set(self.data['emptyGroups'])
  self.assertEqual(len(stubs),11);self.assertTrue(stubs<=groups)
  self.assertEqual(covered,groups-stubs);self.assertFalse(covered&stubs)
  self.assertEqual({q['week'] for q in self.bank},set(range(1,12)))
 def test_explanations_never_mention_option_letters(self):
  detect=self.builder.mentions_option_letter
  for sample in ['Option B is right.','See (C).','A and C are both true.','Answers A, D apply.','B is correct because']:self.assertTrue(detect(sample),sample)
  for sample in ['A class can be abstract.','Suite A is more efficient.','Use Plan C instead.']:self.assertFalse(detect(sample),sample)
  for q in self.bank:self.assertFalse(detect(q['explanation']),q['id'])
 def test_ab3_paths_are_in_the_pinned_file_list(self):
  files=set((SITE.parent/'AB3_FILES.txt').read_text().split('\n'))-{''}
  self.assertEqual(sum(bool(q['ab3']) for q in self.bank),84)
  for q in self.bank:
   for path in q['ab3']:self.assertIn(path,files,q['id'])
 def test_malformed_bank_is_refused(self):
  good=(SITE.parent/'QUESTION_BANK.md').read_text(encoding='utf-8')
  bad_answer=good.replace('**Answer:** A, B, D','**Answer:** A, B',1)
  bad_mcq=good.replace('- A. Haskell — functional programming ✅','- A. Haskell — functional programming',1)
  bad_letter=good.replace('**Explanation:** OOP is a programming paradigm','**Explanation:** Option C is wrong. OOP is a programming paradigm',1)
  bad_id=good.replace('### W1.1-02 · MCQ','### W1.1-01 · MCQ',1)
  for text in [bad_answer,bad_mcq,bad_letter,bad_id]:
   self.assertNotEqual(text,good)
   with self.assertRaises(self.builder.BankError):self.builder.build(text)
 def test_questions_page_is_local_and_has_no_inline_code(self):
  html=(SITE/'questions.html').read_text();scan=Scan(html)
  self.assertIn('Content-Security-Policy',html);self.assertNotIn('unsafe-inline',html);self.assertNotIn('unsafe-eval',html)
  self.assertNotRegex(html,r'<style|style=')
  for tag,a in scan.tags:
   self.assertNotIn(tag,{'iframe','object','embed','form'});self.assertFalse(any(k.startswith('on') for k in a))
   if tag in {'script','link'}:
    url=a.get('src') if tag=='script' else a.get('href');self.assertTrue(url.startswith('./'),url);self.assertTrue((SITE/url[2:]).is_file(),url)
   if tag=='script':self.assertIn('src',a)
   if tag=='a' and 'href' in a:self.assertRegex(a['href'],r'^(https?://|#|\./(?:index|flashcards|diagrams|questions)\.html(?:#|$))')
  self.assertFalse(any(tag=='details' and a.get('id')=='qs-links-wrap' and 'open' in a for tag,a in scan.tags))
  for name in ['questions.js','questions-core.js']:self.assertNotRegex((SITE/name).read_text(),r'innerHTML|outerHTML|insertAdjacentHTML|document\.write')
 def test_every_page_links_to_questions(self):
  for name in ['index.html','flashcards.html','diagrams.html','questions.html']:
   nav=re.search(r'<nav aria-label="Study pages" class="page-links">(.*?)</nav>',(SITE/name).read_text())[1]
   self.assertIn('<a href="./questions.html">Questions</a>' if name!='questions.html' else '<a aria-current="page" href="./questions.html">Questions</a>',nav)
