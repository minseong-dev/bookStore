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

exports.login = async (req, res) => {

    const { user_uid, user_password } = req.body

    try {
        await userService.login(user_uid, user_password)
        return res.redirect('/')
    }

    catch(error) {
        return res.status(500).json(error)
    }

}