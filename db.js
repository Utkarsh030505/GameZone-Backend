import mysql from "mysql2";

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  ssl: {
    rejectUnauthorized: false
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = db.promise();

(async () => {
  try {
    const connection = await promisePool.getConnection();
    console.log("MySQL connected successfully ✅");
    connection.release();
  } catch (err) {
    console.error("DB connection failed:", err);
  }
})();

export default db;
