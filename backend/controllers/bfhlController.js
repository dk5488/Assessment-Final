const mime = require('mime-types');
const { validateFile } = require('../middlewares/validateFile');
const { base64ToFile } = require('../utils/base64ToFile');

const postBFHL = (req, res) => {
  const { data, file_b64 } = req.body;
  const user_id = "divy_pandey_25062003"; 
  const email = "dk5488@srmist.edu.in";
  const roll_number = "RA2111003011071";
  
  const numbers = [];
  const alphabets = [];
  let highestLowercase = [];

  // Process data to separate numbers and alphabets
  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string') {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        highestLowercase.push(item);
      }
    }
  });

  // Get the highest lowercase alphabet
  highestLowercase = highestLowercase.sort().slice(-1);

  // Handle file validation
  let file_valid = false;
  let file_mime_type = null;
  let file_size_kb = null;

  if (file_b64) {
    const file = base64ToFile(file_b64);
    const { valid, mimeType, sizeInKB } = validateFile(file);
    file_valid = valid;
    file_mime_type = mimeType;
    file_size_kb = sizeInKB;
  }

  return res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase,
    file_valid,
    file_mime_type,
    file_size_kb,
  });
};

const getBFHL = (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
};

module.exports = { postBFHL, getBFHL };
