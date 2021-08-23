const db = require('../../middleware/db')
const userQuery = require('../queries/userQuery')

exports.signup = async (user_uid, user_password, user_name) => {

    try{
        let signup = await db.query(userQuery.signup, [user_uid, user_password, user_name])
        return signup[0]
    }

    catch (error) {
        if(error.errno == 1062) return 1062
        console.log(error)
        throw Error(error)
    }

}

exports.signin = async (user_uid, user_password) => {

    try{
        let signin = await db.query(userQuery.signin, [user_uid, user_password])
        return signin[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }
    
}