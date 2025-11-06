import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./Routers/user.router.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,  
})); // Allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  next();
});
app.use(cookieParser()); // Parse cookies from incoming requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use("/users", userRouter);

export default app;