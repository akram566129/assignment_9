const express = require('express');

const router = express.Router(); 


const { getAllBooks, getBookById, createBookList, updateBook, deleteBook } = require("../controllar/book");

router.get("/getAllBooks", getAllBooks);

router.post("/createBookList", createBookList);

router.get("/getBookById/:id", getBookById);

router.put("/updateBook/:id",updateBook );

router.delete("/deleteBook/:id", deleteBook);



module.exports = router; 