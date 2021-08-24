var express = require('express');
var router = express.Router();

const myPageController = require('../controllers/myPageController')

/* 마이페이지 */
router.get('/:users_user_uid', myPageController.myPage);



/* 카드 추가 */
router.post('/addCard/:users_user_uid', myPageController.addCard);

/* 카드 추가페이지 */
router.get('/addCard/', myPageController.addCardPage);

/* 카드 수정 */
router.patch('/updateCard/:card_uid', myPageController.updateCard);

/* 카드 수정페이지 */
router.get('/updateCard/:card_uid', myPageController.updateCardPage);

/* 카드 삭제 */
router.delete('/deleteCard/:card_uid', myPageController.deleteCard);



/* 배송지 추가 */
router.post('/addDest/:users_user_uid', myPageController.addDest);

/* 배송지 추가페이지 */
router.get('/addDest/', myPageController.addDestPage);

/* 배송지 수정 */
router.patch('/updateDest/:destination_uid', myPageController.updateDest);

/* 배송지 수정페이지 */
router.get('/updateDest/:destination_uid', myPageController.updateDestPage);

/* 배송지 삭제 */
router.delete('/deleteDest/:destination_uid', myPageController.deleteDest);



module.exports = router;