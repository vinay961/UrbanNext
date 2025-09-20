import express from "express";
import cros from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Allow cross-origin requests
app.use(cookieParser()); // Parse cookies from incoming requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

export default app;