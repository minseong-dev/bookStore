const db = require('../../middleware/db')
const userQuery = require('../queries/userQuery')

exports.signup = async (user_uid, user_password, user_name) => {

    try{
        let signup = await db.query(userQuery.signup, [user_uid, user_password, user_name])
        return signup[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.signin = async () => {

    try{
        let signin = await db.query(userQuery.signin, [user_uid, user_password])
        return signin[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }
    
}