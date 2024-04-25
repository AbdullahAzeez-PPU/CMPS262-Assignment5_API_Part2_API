const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    // user: "aazeez",

    host: "localho/st",
    // host: "dpg-cobhnlmn7f5s73fpi10g-a",

    database: "inventory",
    // database: "inventory_np51",

    password: "PPU7$$7",
    // password: "vx17C3g4OLRyPmPomoVUjCdoR6mM44Ov",

    port: 5432,
});

module.exports = pool;