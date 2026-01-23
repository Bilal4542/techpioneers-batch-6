
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
    const book = await bookModel.findByIdAndUpdate(id)
    if(!book){
        res.status(200).json({
            message:"No Book Found",
            data:book
        })
    }
    res.status(200).json({
        message:"Book updated Successfully",
        data:book
    })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }

}