const productsTable = 'freshfood_products';
const itemId = 'itemId';
const q = require('../database/db_connection')


const searchForProduct = (req,res) => {
    const {searchedItemId} = req.body
    q.execute(`SELECT * FROM ${productsTable} WHERE ${itemId} = '${searchedItemId}'` , (err,result) => {
        if (err != null) {
            res.send('There some thing wrong')
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}

module.exports = searchForProduct