const {BookModel} = require("../models/book.model")

const express = require("express")

const bookRouter = express.Router()

bookRouter.get("/",async(req,res)=>{
    try{
    const books = await BookModel.find()
    res.status(201).send(books)
    }
    catch(err){
    res.status(400).send(err.message)
    }
})

bookRouter.post("/post",async(req,res)=>{
    const {Title,Author,Genre,Description,Price}=req.body
    try{
    const book = new BookModel({Title,Author,Genre,Description,Price})
    await book.save()
    res.status(201).send("Book posted")
    }
    catch(err){
    res.status(400).send(err.message)
    }
})

bookRouter.delete("/:id",async(req,res)=>{
    const id = req.params.id
    //const payload = req.body

    try{
      await BookModel.findByIdAndDelete({_id:id})
      res.status(202).send("book deleted")
    }
    catch(err){
     res.status(400).send(err.message)
    }
})


module.exports = {bookRouter}