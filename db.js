const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    // user: "aazeez",

    host: "localhost",
    // host: "dpg-craqg0lds78s73d8hc9g-a",

    database: "inventory",
    // database: "inventory_zd19",

    password: "PPU7$$7",
    // password: "Hyl6MwIev4Jl1pR344OX3lqBUR0Zgbwf",

    port: 5432,
});

module.exports = pool;