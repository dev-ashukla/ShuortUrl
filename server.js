const connectDB = require("./dbConnection");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const PORT = process.env.PORT;

// connecting to database...
connectDB();

// starting server
app.listen(PORT, () => console.log(`app started at http://localhost:${PORT}`));
