import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
async function walk(dir){let out=[];for(const f of await readdir(dir)){const p=path.join(dir,f);if((await stat(p)).isDirectory())out.push(...await walk(p));else out.push(p);}return out;}
const files=await walk(root);let links=0;
for(const f of files.filter(x=>x.endsWith('.html'))){const text=await readFile(f,'utf8');assert(text.includes('lang="ko"'));assert.equal((text.match(/<h1[ >]/g)||[]).length,1);for(const match of text.matchAll(/(?:href|src)="([^"]+)"/g)){const target=match[1];if(/^(https?:|mailto:)/.test(target))continue;const [p,hash]=target.split('#');const dest=p?path.resolve(path.dirname(f),p):f;assert(files.includes(dest),`${f}: missing ${target}`);if(hash){const body=await readFile(dest,'utf8');assert(body.includes(`id="${hash}"`),`Missing anchor ${target}`);}links++;}}
const cases=JSON.parse(await readFile(new URL('../content/projects.json',import.meta.url),'utf8'));
for(const p of cases)assert.deepEqual(Object.keys(p.sections),['Overview','Problem','Goal','My Role','Analysis','Action','Result','Insight']);
assert.equal(files.filter(x=>x.endsWith('.html')).length,cases.length+4);
console.log(`PASS: ${cases.length+4} pages, ${links} local references, ${cases.length} complete case studies.`);
