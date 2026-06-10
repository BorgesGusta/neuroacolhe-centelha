const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  { search: /NeuroAcolhe/g, replace: 'Nura' },
  { search: /neuroacolhe/g, replace: 'nura' },
  { search: /neuroacolhe\.org/g, replace: 'nura.com.br' },
  { search: /@NeuroAcolhe/g, replace: '@Nura' }
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir(directory);
files.push('./index.html', './README.md', './.env.example', './package.json');

files.forEach(file => {
  if (fs.existsSync(file) && !file.includes('node_modules')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Custom replacements for specific files
    replacements.forEach(r => {
      content = content.replace(r.search, r.replace);
    });
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
