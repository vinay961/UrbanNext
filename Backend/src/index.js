import {app} from "./app.js";
import connectDB from "./DB/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB()
 .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
 })
 .catch((error) => {
    console.error("Failed to connect to the database", error);
 });

 