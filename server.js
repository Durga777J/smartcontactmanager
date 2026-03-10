import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 5000;

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/contact-manager")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});