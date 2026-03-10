import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./db/index.js";
import { app } from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

console.log("Loaded URI:", process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed", error);
  });