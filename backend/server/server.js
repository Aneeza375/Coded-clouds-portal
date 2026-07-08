import express from "express";

const app = express();

console.log("hello");

app.get("/", (req, res) => {
    res.send("coded clouds ");
});



export default app;
