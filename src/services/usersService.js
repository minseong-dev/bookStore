const db = require('../../middleware/db')
const userQuery = require('../queries/userQuery')

exports.signup = async () => {

    try{
        let signup = await db.query(userQuery.signup, [user_uid, user_password, user_name])
        return signup[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.login = async () => {

    try{
        let login = await db.query(userQuery.login, [user_uid, user_password])
        return login[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }
    
}