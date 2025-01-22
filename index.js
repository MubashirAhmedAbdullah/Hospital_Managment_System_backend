import express from "express"

const app = express()
const PORT = 4000;

app.get("/", (req, res) =>{
    res.send("Hello To Hospital Mangment System Backend")
})

app.listen(PORT, () => console.log("Backend is running on " + PORT))

console.log("hello world");
