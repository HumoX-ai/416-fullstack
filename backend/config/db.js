const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fullStackers",
  password: "1234",
  port: 5000,
});

module.exports = pool;
