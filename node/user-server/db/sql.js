module.exports = {
    userList : `SELECT * FROM t_users`,
    userInfo : `SELECT * FROM t_users WHERE user_id = ?`,
    userInsert : `INSERT INTO t_users SET ?`,
    userUpdate : `UPDATE t_users SET ? WHERE user_id = ?`,
    userDelete : `DELETE FROM t_users WHERE user_id = ?`
}