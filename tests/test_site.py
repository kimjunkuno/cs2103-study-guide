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
   if tag=='a' and 'href' in a:self.assertRegex(a['href'],r'^(https?://|mailto:|#)')
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
