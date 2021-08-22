const userService = require('../services/userService')

exports.signup = async (req, res) => {

    const { user_uid, user_password, user_name } = req.body

    try {
        await userService.signup(user_uid, user_password, user_name)
        return res.redirect('/')
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.signupPage = async (req, res) => {
    
    try{
        return res.render('signup')
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.signin = async (req, res) => {

    const { user_uid, user_password } = req.body

    try {
        await userService.signin(user_uid, user_password)
        return res.redirect('/')
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.signinPage = async (req, res) => {
    
    try{
        return res.render('signin')
    }

    catch (error) {
        return res.status(500).json(error)
    }

}