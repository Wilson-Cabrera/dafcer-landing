const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, '..', 'assets', 'img');
const SEQ_DIR = path.join(IMG_DIR, 'sequence');

async function convertDir(dir, filterFn, quality, effort) {
  const files = fs.readdirSync(dir).filter(filterFn);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const parsed = path.parse(file);
    const destPath = path.join(dir, `${parsed.name}.webp`);

    const stat = fs.statSync(filePath);
    totalBefore += stat.size;

    const buffer = fs.readFileSync(filePath);
    await sharp(buffer)
      .webp({ quality, effort })
      .toFile(destPath);

    const destStat = fs.statSync(destPath);
    totalAfter += destStat.size;

    const saved = ((1 - destStat.size / stat.size) * 100).toFixed(1);
    console.log(`[WEBP] ${file.padEnd(35)} ${(stat.size / 1024 / 1024).toFixed(2)} MB -> ${(destStat.size / 1024 / 1024).toFixed(2)} MB  (-${saved}%)`);
  }

  return { totalBefore, totalAfter, count: files.length };
}

(async () => {
  console.log('\n========================================');
  console.log('  1. Convirtiendo imágenes principales...');
  console.log('========================================\n');

  const mainRes = await convertDir(
    IMG_DIR,
    f => {
      const lower = f.toLowerCase();
      const isImg = (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg')) && !lower.endsWith('.webp');
      return isImg && f !== 'sequence' && !lower.includes('logo');
    },
    82,
    5
  );

  console.log('\n========================================');
  console.log('  2. Convirtiendo secuencia de fotogramas (96 frames)...');
  console.log('========================================\n');

  let seqRes = { totalBefore: 0, totalAfter: 0, count: 0 };
  if (fs.existsSync(SEQ_DIR)) {
    seqRes = await convertDir(
      SEQ_DIR,
      f => f.toLowerCase().endsWith('.jpg') && !f.toLowerCase().endsWith('.webp'),
      80,
      4
    );
  }

  const grandBefore = mainRes.totalBefore + seqRes.totalBefore;
  const grandAfter = mainRes.totalAfter + seqRes.totalAfter;
  const grandSaved = grandBefore - grandAfter;
  const grandPct = grandBefore > 0 ? ((grandSaved / grandBefore) * 100).toFixed(1) : 0;

  console.log('\n========================================');
  console.log('  RESUMEN FINAL CONVERSIÓN WEBP:');
  console.log(`  Imágenes principales: ${mainRes.count} archivos`);
  console.log(`  Frames de animación:  ${seqRes.count} archivos`);
  console.log(`  Peso anterior:        ${(grandBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Peso en WebP:         ${(grandAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Ahorro neto:          ${(grandSaved / 1024 / 1024).toFixed(2)} MB (${grandPct}% menos)`);
  console.log('========================================\n');
})();
