const bookService = require('../services/bookService')

exports.addBook = async (req, res) => {

    const { book_name, book_stock, book_price, book_writer } = req.body

    try {
        await bookService.addBook(book_name, book_stock, book_price, book_writer)
        return res.redirect('/')
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.updateBook = async (req, res) => {
    
    const { book_name, book_stock, book_price, book_writer } = req.body
    const { book_uid } = req.params

    try{
        await bookService.updateBook(book_name, book_stock, book_price, book_writer, book_uid)
        return res.redirect('/')
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.deleteBook = async (req, res) => {

    const { book_uid } = req.params
    
    try{
        await bookService.deleteBook(book_uid)
        return res.redirect('/')
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.bookList = async (req, res) => {
    
    try{
        let book_info = await bookService.bookList()
        let sess = req.session.user_uid
        return res.render('index', {
            page:'./book/bookList',
            sess:sess, 
            book_info:book_info
        })
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.bookDetail = async (req, res) => {
    
    const { book_uid } = req.params

    try{
        let detail_info = await bookService.bookDetail(book_uid)
        let sess = req.session.user_uid
        return res.render('index', {
            page:'./book/bookDetail',
            sess:sess,
            detail_info:detail_info
        })
    }
    
    catch (error) {
        return res.status(500).json(error)
    }

}