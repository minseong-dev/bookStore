const db = require('../../middleware/db')
const usersQuery = require('../queries/usersQuery')

exports.signup = async () => {

    try{
        let signup = await db.query(usersQuery.signup, [user_uid, user_password, user_name])
        return signup[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.login = async () => {

    try{
        let login = await db.query(usersQuery.login, [user_uid, user_password])
        return login[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }
    
}