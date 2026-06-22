const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(srcDir);
const classNames = new Set();
const hexCodes = new Set();
const rgbaCodes = new Set();
const gradients = new Set();
const blurs = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract Tailwind classes
  const classNameMatch = content.match(/className="([^"]+)"/g);
  if (classNameMatch) {
    classNameMatch.forEach(match => {
      const classes = match.substring(11, match.length - 1).split(/\s+/);
      classes.forEach(c => classNames.add(c));
    });
  }
  const classNameMatchTick = content.match(/className={`([^`]+)`}/g);
  if (classNameMatchTick) {
    classNameMatchTick.forEach(match => {
      const classes = match.substring(12, match.length - 2).split(/\s+/);
      classes.forEach(c => classNames.add(c));
    });
  }

  // Extract explicit gradients from bg-[...]
  const bgMatch = content.match(/bg-\[(radial-gradient|linear-gradient)[^\]]+\]/g);
  if (bgMatch) bgMatch.forEach(m => gradients.add(m));

  // Extract inline gradients
  const inlineGradient = content.match(/radial-gradient\([^)]+\)/g);
  if (inlineGradient) inlineGradient.forEach(m => gradients.add(m));
  
  // Extract Hex
  const hex = content.match(/#[0-9a-fA-F]{3,6}/g);
  if (hex) hex.forEach(m => hexCodes.add(m));

  // Extract RGBA
  const rgba = content.match(/rgba\([^)]+\)/g);
  if (rgba) rgba.forEach(m => rgbaCodes.add(m));
});

console.log('--- Colors ---');
const colorClasses = [...classNames].filter(c => 
  c.startsWith('text-') || 
  c.startsWith('bg-') || 
  c.startsWith('border-') || 
  c.startsWith('shadow-') || 
  c.startsWith('ring-')
);
console.log(colorClasses.sort().join('\n'));

console.log('\n--- Hex ---');
console.log([...hexCodes].sort().join('\n'));

console.log('\n--- RGBA ---');
console.log([...rgbaCodes].sort().join('\n'));

console.log('\n--- Gradients ---');
console.log([...gradients].sort().join('\n'));

console.log('\n--- Blurs ---');
console.log([...classNames].filter(c => c.startsWith('blur-') || c.startsWith('backdrop-blur-')).sort().join('\n'));
