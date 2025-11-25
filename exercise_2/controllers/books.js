const Book = require('../models/Book')

// get all Books
exports.getBooks = async (req, res) => {
    const books = await Book.find()
    res.json(books)
}


// get book by id
exports.getBookById =  async (req, res) => {
    const id = req.params.id

    try{
        const book = await Book.findById(id)

        if(!book){
            return res.status(404).json({message: "book not found"})
        }
        res.status(200).json(book)

    }catch(err){
        res.status(500).json({message: "internal server error"})
    }
}


// create new book 
exports.createBook = async (req, res) => {


    if(!req.body.title && !req.body.author){
       return res.status(404).json({message: "book title and author are required"})
    }

    const book = new Book(req.body)


     const savedBook = await book.save()

    res.status(201).json(savedBook)
   
}


// update book 
exports.updateBook = async (req,res) => {
  
    const {id} = req.params

    try{

        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true})

        if(!updatedBook){
            return res.status(404).json({message: "book not found"})
        }

        res.status(200).json({message: "book updated successfully", book: updatedBook})

    }catch(err){
        res.status(500).json({message: "internal server error"})
    }


}


// delete Book 
exports.deleteBook = async (req, res) => {
    const {id} = req.params
    
try{
    const deletedBook = await Book.findByIdAndDelete(id)

    if(!deletedBook){
        return res.status(404).json({message: "Book not found"})
    }


    res.status(200).json({message: "Book deleted successfully"})
    
}catch(err){
 res.status(500).json({message: "internal server error"})}
}