const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    // user: "",

    host: "localhost",
    // host: "",

    database: "inventory",
    // database: "",

    password: "PPU7$$7",
    // password: "",

    port: 5432,
});

module.exports = pool;