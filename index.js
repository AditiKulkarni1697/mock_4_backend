 const express = require("express")

 const app = express()

 var cors = require('cors')

 const {connection}= require("./db")

 const {bookRouter} = require("./routes/book.route")

 app.use(express.json())

 app.options('*', cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


 app.get("/",(req,res)=>{
    res.send("Welcome")
 })

 app.use("/book",bookRouter)

 app.listen(8080,async()=>{
    try{
        await connection
        console.log("db is connected to server")
    }
    catch(err){
      console.log(err)
    }
    console.log("Server is running at port 8080")
 })