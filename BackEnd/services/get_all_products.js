const productsTable = 'freshfood_products';
const q = require('../database/db_connection')


const getAllProducts = (req,res)=>{
    q.execute(`SELECT * FROM ${productsTable}` , (err , result) => {
        if (err != null) {
            res.send('There some thing wrong')
            console.log(err)
        }
        else {
            res.json(result)
        }
    })
} 

module.exports = getAllProducts