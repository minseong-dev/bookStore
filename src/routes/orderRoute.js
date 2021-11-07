var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController')

/* 주문 */
router.post('/order', orderController.order);

/* 주문 페이지 */
router.get('/orderPage/:book_uid', orderController.orderPage);

/* 주문목록 페이지 */
router.get('/orderListPage', orderController.orderListPage);

/* 주문목록 삭제 */
router.delete('/deleteOrder/:order_uid', myPageController.deleteDest);

module.exports = router;