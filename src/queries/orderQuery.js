exports.addOrder = 'insert into orders(order_uid, order_date, order_amount, card_com, card_uid, card_exp, destination_post, destination_addr, destination_detail, users_user_uid, point) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
exports.addOrderList = 'insert into order_lists(orders_order_uid, books_book_uid, book_count) values(?, ?, ?)'
exports.minusBookCount = 'update books set book_stock = (book_stock - ?) where book_uid = ?'
exports.selectOrder = 'select * from orders where users_user_uid=? order by order_date'  
exports.orderDetail = 'select * from orders where order_uid=?'
exports.orderBookList = 'select a.orders_order_uid, a.books_book_uid, a.book_count, b.book_uid, b.book_name, b.book_stock, b.book_price, b.book_writer from order_list a, book b where a.books_book_uid = b.book_uid and a.orders_order_uid=?'
exports.selectOrderList = 'select * from order_lists where orders_order_uid=?'
exports.plusOrder = 'update books set book_stock = (book_stock + ?) where book_uid = ?'
exports.deleteOrderList = 'delete from order_lists where orders_order_uid=? and books_book_uid=?'
exports.deleteOrder = 'delete from orders where order_uid=?'