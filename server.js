const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("students.db");

db.run(`
CREATE TABLE IF NOT EXISTS students(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT
)
`);

app.post("/add", (req, res) => {

const { name, email } = req.body;

db.run(
"INSERT INTO students(name,email) VALUES (?,?)",
[name,email],
function(err){
if(err){
res.send(err);
}else{
res.send("Student Added Successfully");
}
}
);

});

app.get("/students",(req,res)=>{

db.all("SELECT * FROM students",[],(err,rows)=>{
res.json(rows);
});

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});