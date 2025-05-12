const express = require("express");
const databaseConnection=require("./configs/database")
const dotenv=require("dotenv");
dotenv.config()


const app = express();

const PORT = process.env.PORT || 4000;
const DB_URL=process.env.MONGODB_URI

databaseConnection(DB_URL);


//route
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
