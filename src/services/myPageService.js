const db = require('../../middleware/db')
const myPageQuery = require('../queries/myPageQuery')

exports.cardList = async (users_user_uid) => {
    
    try{
        let list = await db.query(myPageQuery.cardList, [users_user_uid])
        return list[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.destList = async (users_user_uid) => {
    
    try{
        let list = await db.query(myPageQuery.destList, [users_user_uid])
        return list[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addCard = async (card_uid, card_exp, card_com, users_user_uid) => {
    
    try{
        let add = await db.query(myPageQuery.addCard, [card_uid, card_exp, card_com, users_user_uid])
        return add[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.updateCard = async (card_exp, card_com, card_uid) => {
    
    try{
        let update = await db.query(myPageQuery.updateCard, [card_exp, card_com, card_uid])
        return update[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.cardDetail = async (card_uid) => {
    
    try{
        let detail = await db.query(myPageQuery.cardDetail, [card_uid])
        return detail[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteCard = async (card_uid) => {
    
    try{
        let del = await db.query(myPageQuery.deleteCard, [card_uid])
        return del[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addDest = async (destination_uid, destination_post, destination_addr, destination_detail, users_user_uid) => {
    
    try{
        let add = await db.query(myPageQuery.addDest, [destination_uid, destination_post, destination_addr, destination_detail, users_user_uid])
        return add[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.updateDest = async (destination_post, destination_addr, destination_detail, destination_uid) => {
    
    try{
        let update = await db.query(myPageQuery.updateDest, [destination_post, destination_addr, destination_detail, destination_uid])
        return update[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.destDetail = async (destination_uid) => {
    
    try{
        let detail = await db.query(myPageQuery.destDetail, [destination_uid])
        return detail[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteDest = async (destination_uid) => {
    
    try{
        let del = await db.query(myPageQuery.deleteDest, [destination_uid])
        return del[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}