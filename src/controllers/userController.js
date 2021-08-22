const userService = require('../services/userService')

exports.signup = async (req, res) => {

    const { user_uid, user_password, user_name } = req.body

    try {
        let signup = await userService.signup(user_uid, user_password, user_name)
        
        if(signup == 1062){
            return res.send(`<script type="text/javascript">
                alert("이미 사용중인 아이디 입니다."); 
                location.href='./signup';
                </script>`);
        }

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