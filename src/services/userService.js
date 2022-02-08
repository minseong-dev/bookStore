const db = require('../../middleware/db')
const userQuery = require('../queries/userQuery')

exports.pointUp = async (recom) => {

    try{
        let pointUp = await db.query(userQuery.pointUp, [recom])
        return pointUp[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.point = async (sess) => {

    try{
        let point = await db.query(userQuery.point, [sess])
        return point[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.pointDown = async (point, users_user_uid) => {

    try{
        let pointDown = await db.query(userQuery.pointDown, [point, users_user_uid])
        return pointDown[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.signup = async (user_uid, user_password, user_name, recom) => {

    try{
        let signup = await db.query(userQuery.signup, [user_uid, user_password, user_name, recom])
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