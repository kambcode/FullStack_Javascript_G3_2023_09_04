
import mysql from 'mysql2';

const pool = mysql.createPool({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'root12345',
    multipleStatements: true
}).promise()

export async function getProducts () {
    const [myProducts] = await pool.query("SELECT * FROM sys.new_tabproductos_tablele;");
    return myProducts
}

export async function getProduct (id) {
    const [myProducts] = await pool.query(`
    SELECT * 
    FROM sys.new_tabproductos_tablele 
    where product_id = ?`, [id]); 
    return myProducts
}

export async function insertProduct (name, description, precio, precioPromo, cant) {
    const [result] = await pool.query(`
    INSERT INTO sys.new_tabproductos_tablele (name, description, precio, precio_promo, cant)  
    VALUES (?, ?, ?, ?, ?);
`, [name, description, precio, precioPromo, cant]);
    const id = result.insertId
    return await getProduct(id)
}

///Use of mysql, instead of mysql2, no modular way
//const mysql = require('mysql');
//const util = require('util');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     port: '3306',
//     user     : 'root',
//     password : 'root12345',
//     multipleStatements: true
// });


// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

// const query = util.promisify(conn.query).bind(conn);

// async function getTableData () {
//     var userCourse = [];
//     try {
//         const rows = await query('SELECT * FROM sys.sys_config;');
//         return rows
//     } finally {
//         conn.end();
//         return userCourse;
//     }
// };

// connection.query('SELECT * FROM sys.sys_config;', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// connection.end();


// result()
// .then(value => {
//     console.log(value)
// });