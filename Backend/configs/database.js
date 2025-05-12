const mongoose = require("mongoose");


const databaseConnection = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected 🟢");
  } catch (error) {
    console.log({
      massage: "Database does't Connected 🔴",
      error: error.massage,
    });
  }
};
module.exports = databaseConnection;
