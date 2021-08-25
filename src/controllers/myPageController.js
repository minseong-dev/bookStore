const myPageService = require('../services/myPageService')

exports.myPage = async (req, res) => {

    const { users_user_uid } = req.params

    try {
        let card_info = await myPageService.cardList(users_user_uid)
        let dest_info = await myPageService.destList(users_user_uid)
        let sess = req.session.user_uid
        return res.render('index', {
            page:'./myPage/myPage',
            sess:sess, 
            card_info:card_info,
            dest_info:dest_info
        })
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.addCard = async (req, res) => {
    
    const { card_uid, card_exp, card_com } = req.body
    const { users_user_uid } = req.params

    try{
        await myPageService.addCard(card_uid, card_exp, card_com, users_user_uid)
        return res.redirect('/myPage/main/'+users_user_uid)

    }
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.addCardPage = async (req, res) => {
    
    try{
        let sess = req.session.user_uid
        return res.render('index', { page:'./myPage/addCard', sess:sess })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.updateCard = async (req, res) => {

    const { card_exp, card_com } = req.body
    const { card_uid } = req.params

    try{
        await myPageService.updateCard(card_exp, card_com, card_uid)
        return res.redirect('/myPage/main/'+req.session.user_uid)
    }

    catch (erroe) {
        return res.status(500).json(error)
    }

}

exports.updateCardPage = async (req, res) => {
    
    const { card_uid } = req.params

    try{
        let card_info = await myPageService.cardDetail(card_uid)
        let sess = req.session.user_uid
        return res.render('index', {
            page:'./mypage/updateCard',
            sess:sess,
            card_info:card_info
        })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.deleteCard = async (req, res) => {
    
    const { card_uid } = req.params
    
    try{
        await myPageService.deleteCard(card_uid)
        return res.redirect('/myPage/main/'+req.session.user_uid)
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.addDest = async (req, res) => {
    
    const { destination_post, destination_addr, destination_detail } = req.body
    const { users_user_uid } = req.params

    try{

        let destination_uid = String(Math.random()*100000000)

        await myPageService.addDest(destination_uid, destination_post, destination_addr, destination_detail, users_user_uid)
        return res.redirect('/myPage/main/'+users_user_uid)
    }
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.addDestPage = async (req, res) => {
    
    try{
        let sess = req.session.user_uid
        return res.render('index', { page:'./mypage/addDest', sess:sess })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.updateDest = async (req, res) => {

    const { destination_post, destination_addr, destination_detail } = req.body
    const { destination_uid } = req.params

    try{
        await myPageService.updateDest(destination_post, destination_addr, destination_detail, destination_uid)
        return res.redirect('/myPage/main/'+req.session.user_uid)
    }

    catch (erroe) {
        return res.status(500).json(error)
    }

}

exports.updateDestPage = async (req, res) => {
    
    const { destination_uid } = req.params

    try{
        let dest_info = await myPageService.destDetail(destination_uid)
        let sess = req.session.user_uid
        return res.render('index', {
            page:'./mypage/updateDest',
            sess:sess,
            dest_info:dest_info
        })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.deleteDest = async (req, res) => {
    
    const { destination_uid } = req.params
    
    try{
        await myPageService.deleteDest(destination_uid)
        return res.redirect('/myPage/main/'+req.session.user_uid)
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}