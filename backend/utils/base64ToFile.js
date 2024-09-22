const fs = require('fs');
const path = require('path');

// Convert Base64 to File Object
const base64ToFile = (base64Str) => {
  const matches = base64Str.match(/^data:(.+);base64,(.+)$/);
  const mimeType = matches[1];
  const buffer = Buffer.from(matches[2], 'base64');
  const fileName = `file_${Date.now()}.${mime.extension(mimeType)}`;
  
  const filePath = path.join(__dirname, '..', 'uploads', fileName);
  fs.writeFileSync(filePath, buffer);

  return { name: fileName, mimeType, size: buffer.length, filePath };
};

module.exports = { base64ToFile };
