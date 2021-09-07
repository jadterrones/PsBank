const express = require ("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/emp_db");

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/employees", require("./routes/employee"));

app.get("/",(req, res) => {
    res.send({Project:"Emp Management"});
});

const PORT  = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server connected at port " + PORT)
}); 