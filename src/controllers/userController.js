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
        let sess = req.session.user_uid
        return res.render('index', { page:'./user/signup', sess:sess })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.signin = async (req, res) => {

    const { user_uid, user_password } = req.body

    try {
        let signin = await userService.signin(user_uid, user_password)
        req.session.user_uid = signin[0].user_uid
        return res.redirect('/')
    }

    catch(error) {
        res.send(
            `<script type="text/javascript">
            alert("아이디 또는 비밀번호가 올바르지 않습니다."); 
            location.href='./signin';
            </script>`
        );
    }

}

exports.signinPage = async (req, res) => {
    
    try{
        let sess = req.session.user_uid
        return res.render('index', { page:'./user/signin', sess:sess })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.logout = async (req, res) => {

    try{
        req.session.destroy(function(){
            req.session;
        });
        return res.send(`<script type="text/javascript">
            alert("로그아웃 되었습니다."); 
            location.href='/';
            </script>`);
    }

    catch (error) {
        return res.status(500).json(error)
    }

}