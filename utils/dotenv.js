const { config } = require('dotenv');

const { NODE_ENV } = process.env;
const { JWT_SECRET = 'dev-secret' } = process.env;

if (NODE_ENV === 'production') {
  config();
}

module.exports = { JWT_SECRET, NODE_ENV };
