const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

if (!fs.existsSync(outDir)) {
  console.log('Out directory not found at:', outDir);
  process.exit(0);
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item.startsWith('__next.')) {
        // This is a directory starting with __next.
        // We need to flatten everything inside it
        flattenNextDir(dir, item, fullPath);
      } else {
        processDirectory(fullPath);
      }
    }
  }
}

function flattenNextDir(parentDir, prefix, nextDir) {
  // Recursively find all files inside nextDir
  function getFiles(currentDir, relativeParts = []) {
    const list = fs.readdirSync(currentDir);
    let files = [];
    for (const file of list) {
      const fPath = path.join(currentDir, file);
      const fStat = fs.statSync(fPath);
      if (fStat.isDirectory()) {
        files = files.concat(getFiles(fPath, [...relativeParts, file]));
      } else {
        files.push({
          fullPath: fPath,
          relativeParts: [...relativeParts, file]
        });
      }
    }
    return files;
  }

  const files = getFiles(nextDir);
  
  for (const file of files) {
    // Prefix is '__next.services', relativeParts is ['$d$slug', '__PAGE__.txt']
    // Flatten path to '__next.services.$d$slug.__PAGE__.txt'
    const newFileName = [prefix, ...file.relativeParts].join('.');
    const newFilePath = path.join(parentDir, newFileName);
    
    console.log(`[Next-Win-Fix] Flattening: ${path.relative(outDir, file.fullPath)} -> ${path.relative(outDir, newFilePath)}`);
    fs.renameSync(file.fullPath, newFilePath);
  }
  
  // Clean up the now empty directories
  fs.rmSync(nextDir, { recursive: true, force: true });
}

console.log('[Next-Win-Fix] Starting Next.js Windows build post-processing...');
processDirectory(outDir);

// Automatically copy php_server contents to the out directory
const phpServerDir = path.join(__dirname, 'php_server');
if (fs.existsSync(phpServerDir)) {
  console.log('[Next-Win-Fix] Copying PHP SEO Server files to out directory...');
  
  function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest);
      fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  copyRecursiveSync(phpServerDir, outDir);
  console.log('[Next-Win-Fix] PHP files successfully integrated into the build!');
}

// Copy llms.txt files
const filesToCopy = ['llms.txt', 'llms-full.txt'];
filesToCopy.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(outDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Next-Win-Fix] Copied ${file} to out directory.`);
  }
});

console.log('[Next-Win-Fix] Windows build post-processing complete!');
