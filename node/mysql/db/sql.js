module.exports = {
    customerList : `SELECT * FROM customers`,
    customerInsert : `INSERT INTO customers SET ?`,
    customerUpdate : `UPDATE customers SET ? WHERE id = ?`,
    customerDelete : `DELETE FROM customers WHERE id = ?`,
    customerInfo : `SELECT * FROM customers WHERE id = ?`
}