const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/bfhl', bfhlRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
