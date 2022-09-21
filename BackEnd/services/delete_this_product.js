const productsTable = 'freshfood_products';
const itemId = 'itemId';
const q = require('../database/db_connection')

const deleteThisProduct = (req,res)=> {
    const {deletedItemId} = req.body
    q.execute(`
    DELETE FROM ${productsTable} WHERE ${itemId} = '${deletedItemId}'`, (err,result) => {
        if (err != null) {
            res.send('There some thing wrong')
            console.log(err);
        }
        else {
            res.send('the product has been deleted')
        }    
    })
}

module.exports = deleteThisProduct