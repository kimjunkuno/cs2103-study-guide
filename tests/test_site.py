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
 def test_safe_assets_and_markup(self):
  s=Scan((SITE/'index.html').read_text())
  for tag,a in s.tags:
   self.assertNotIn(tag,{'iframe','object','embed','form'})
   self.assertFalse(any(k.startswith('on') for k in a))
   if tag in {'img','script','link'}:
    attr='href' if tag=='link' else 'src';url=a.get(attr,'')
    self.assertTrue(url.startswith('./'),url);self.assertTrue((SITE/url[2:]).is_file(),url)
   if tag=='a' and 'href' in a:self.assertRegex(a['href'],r'^(https?://|mailto:|#|\./(?:index|flashcards|diagrams)\.html(?:#|$))')
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
