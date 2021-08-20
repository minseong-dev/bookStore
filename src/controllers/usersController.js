const usersService = require('../services/usersService')

exports.signup = async (req, res) => {

    const { user_uid, user_password, user_name } = req.body

    try {
        await usersService.signup(user_uid, user_password, user_name)
        return res.redirect('/')
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.login = async (req, res) => {

    const { user_uid, user_password } = req.body

    try {
        await usersService.login(user_uid, user_password)
        return res.redirect('/')
    }

    catch(error) {
        return res.status(500).json(error)
    }

}