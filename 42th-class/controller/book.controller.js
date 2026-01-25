
const bookModel = require('../model/book.model')
exports.createBook = async (req,res) =>{
    try {
        const {bookCategory,bookTitle,bookDescription,bookPrice} = req.body
        const book = new bookModel({
            bookCategory:bookCategory,
            bookTitle:bookTitle,
            bookDescription:bookDescription,
            bookPrice:bookPrice
        })

        const result = await book.save()

        res.status(200).json({
            message:"Book Posted Successfully",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

exports.getBooks = async (req,res) => {
    try {
        const getBooks = await bookModel.find()

        if(getBooks.length === 0){
            res.status(200).json({
                message:"no book found",
                data:getBooks
            })
        }

        res.status(200).json({
            message:"Books Getted Successfully",
            data:getBooks
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}
exports.updateBook = async (req,res) => {
    try {
    const id = req.params.id
    const {bookCategory,bookTitle,bookDescription,bookPrice} = req.body;

    const updatedbook = await bookModel.findByIdAndUpdate(
        id,
        {
        bookCategory,
        bookTitle,
        bookDescription,
        bookPrice            
        },
        {new:true}
            )
    if(!updatedbook){
        res.status(200).json({
            message:"No Book Found",
            data:updatedbook
        })
    }
    res.status(200).json({
        message:"Book updated Successfully",
        data:updatedbook
    })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }

}

exports.deleteBook = async (req,res) => {
    try {
        
        const id = req.params.id
        const deletedbook = await bookModel.findByIdAndDelete(id)
        if(!deletedbook){
            res.status(200).json({
                message:"book not founded",
                error:error.message
            })
        }

        res.status(200).json({
            message:"book deleted successfully",
            data:deletedbook
        })


    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

exports.getbookById = async (req,res) => {
    try {

        const id = req.params.id

        const book = await bookModel.findById(id)

        if(!book){
            res.status(200).json({
                message:"book not founded",
                data:book
            })
        }
        res.status(200).json({
            message:"book finded successfully",
            data:book
        })
        
    } catch (error) {
        res.status(200).json({
            message:"internal  server error",
            error:error.message
        })
    }
}