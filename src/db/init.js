const DataBase = require("./config")

const initDb = {
    async init() {
        const db = await DataBase()

        await db.exec(`CREATE TABLE rooms (id INTEGER PRIMARY KEY,pass TEXT)`);

        await db.exec(`CREATE TABLE questions (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,read INT,roomId INT)`);

        await db.close()
    }
}

initDb.init();