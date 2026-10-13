const fs = require('fs');
const path = require('path');

// Directories to scan
const ROOT = path.resolve(__dirname, '..');
const exts = ['.html', '.css', '.js'];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules and .git directories
      if (['node_modules', '.git'].includes(entry.name)) continue;
      walk(fullPath);
    } else if (exts.includes(path.extname(entry.name).toLowerCase())) {
      replaceInFile(fullPath);
    }
  }
}

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Regex to match .jpg, .jpeg, .png (case‑insensitive)
  const regex = /\.(jpe?g|png)(?=["'\)])/gi;
  let changed = false;
  content = content.replace(regex, (match) => {
    const newExt = '.webp';
    const newPath = match.replace(/\.(jpe?g|png)$/i, newExt);
    // Verify that the .webp file exists relative to the project root
    const absoluteImgPath = path.join(path.dirname(filePath), newPath);
    if (fs.existsSync(absoluteImgPath)) {
      changed = true;
      return newExt;
    }
    return match; // keep original if no .webp counterpart
  });
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walk(ROOT);
console.log('Replacement finished');
