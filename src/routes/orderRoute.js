var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController')

/* 주문 */
router.post('/order/:order_uid', orderController.order);

/* 주문 페이지 */
router.get('/orderPage/:user_uid', orderController.orderPage);

/* 주문목록 페이지 */
router.get('/orderListPage/:user_uid', orderController.orderListPage);

module.exports = router;