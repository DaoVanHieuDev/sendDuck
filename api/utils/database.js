const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'localhost',
    user:"root",
    database:'new_schema',
    password:"chocho123"
})
module.exports=pool.promise()