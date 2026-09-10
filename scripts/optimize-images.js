const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, '..', 'assets', 'img');

const targets = fs.readdirSync(IMG_DIR).filter(f => {
  const lower = f.toLowerCase();
  const isImage = lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg');
  const isSequence = f === 'sequence';
  const isLogo = lower.includes('logo');
  const isAvatar = lower.includes('avatar');
  return isImage && !isSequence && !isLogo && !isAvatar;
});

console.log(`\n========================================`);
console.log(`  DAFCER — Optimizacion de Imagenes`);
console.log(`  Encontradas ${targets.length} imagenes objetivo`);
console.log(`========================================\n`);

let totalBefore = 0;
let totalAfter = 0;

(async () => {
  for (const file of targets) {
    const filePath = path.join(IMG_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const statBefore = fs.statSync(filePath);
    const sizeBefore = statBefore.size;
    const tmpPath = filePath + '.tmp';

    try {
      const inputBuffer = fs.readFileSync(filePath);
      let pipeline = sharp(inputBuffer);

      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 85, compressionLevel: 9, effort: 7 });
      } else {
        pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
      }

      await pipeline.toFile(tmpPath);
      const sizeAfter = fs.statSync(tmpPath).size;

      if (sizeAfter < sizeBefore) {
        fs.unlinkSync(filePath);
        fs.renameSync(tmpPath, filePath);
        const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
        console.log(`[OPTIMIZADA] ${file.padEnd(38)} ${(sizeBefore / 1024 / 1024).toFixed(2)} MB -> ${(sizeAfter / 1024 / 1024).toFixed(2)} MB  (-${saved}%)`);
        totalBefore += sizeBefore;
        totalAfter += sizeAfter;
      } else {
        fs.unlinkSync(tmpPath);
        console.log(`[INTACTA]    ${file.padEnd(38)} Ya estaba optima (${(sizeBefore / 1024 / 1024).toFixed(2)} MB)`);
        totalBefore += sizeBefore;
        totalAfter += sizeBefore;
      }
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try { fs.unlinkSync(tmpPath); } catch (_) {}
      }
      console.error(`[ERROR]      ${file}: ${err.message}`);
      totalBefore += sizeBefore;
      totalAfter += sizeBefore;
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const pctSaved = totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : 0;
  console.log(`\n========================================`);
  console.log(`  RESULTADO TOTAL:`);
  console.log(`  Antes:   ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Despues: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Ahorro:  ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${pctSaved}% menos)`);
  console.log(`========================================\n`);
})();
