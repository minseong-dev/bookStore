exports.signup = 'insert into users(user_uid, user_password, user_name) values(?, ?, ?)'
exports.signin = 'select type from users where user_uid=? and user_password=?'