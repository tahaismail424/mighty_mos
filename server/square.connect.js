const dotenv = require('dotenv');
const { Client, Environment } = require("square");
dotenv.config();

const client = new Client({
  accessToken: '',
  environment: Environment.Sandbox,
});

module.exports = client;