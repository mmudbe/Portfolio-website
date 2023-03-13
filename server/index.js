const express = require("express");

const app = express();

const port = 5000;

app.get("/" ,(req,res)=>{
    res.send("it's backend");
} )

app.listen(port  , () => {
    console.log("listening on port 5000");
})