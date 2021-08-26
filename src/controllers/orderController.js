const orderService = require('../services/orderService')

exports.order = async (req, res) => {

    const { order_date, order_amount, card_com, card_uid, card_exp, destination_post, destination_addr, destination_detail, users_user_uid } = req.body
    const { order_uid } = req.params

    try {
        await orderService.order(order_uid, order_date, order_amount, card_com, card_uid, card_exp, destination_post, destination_addr, destination_detail, users_user_uid)

        return res.send(`<script type="text/javascript">
                alert("주문이 완료되었습니다."); 
                location.href='./orderList`+users_user_uid`';
                </script>`);
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.orderPage = async (req, res) => {
    
    try{
        let sess = req.session.user_uid
        return res.render('index', { page:'./order/order', sess:sess })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}