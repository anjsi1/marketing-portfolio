import {cp,rm,writeFile} from 'node:fs/promises';
const dest=new URL('../docs/',import.meta.url);
await rm(dest,{recursive:true,force:true});
await cp(new URL('../dist/',import.meta.url),dest,{recursive:true});
await writeFile(new URL('.nojekyll',dest),'');
console.log('Prepared docs/ for GitHub Pages');
