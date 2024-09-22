const mime = require('mime-types');

// Validate the file coming from base64 string
const validateFile = (file) => {
  const mimeType = mime.lookup(file.name);
  const sizeInKB = file.size / 1024;

  const valid = mimeType && sizeInKB > 0;
  return { valid, mimeType, sizeInKB };
};

module.exports = { validateFile };
