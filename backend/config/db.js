const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "navruz",
  password: "1908",
  database: "fullStackers",
  password: "2004",
  port: 5432,
});

module.exports = pool;
