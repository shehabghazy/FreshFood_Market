const productsTable = 'freshfood_products';
const itemId = 'itemId';
const foodType = 'foodType';
const foodPhotoSrc = 'foodPhotoSrc';
const foodPrice = 'foodPrice';
const q = require('../database/db_connection')


const addNewProduct = (req,res) => {

    const {newItemId,newFoodType,newFoodPhotoSrc,newFoodPrice} = req.body
    q.execute(`
        INSERT INTO ${productsTable} (${itemId},${foodType},${foodPhotoSrc},${foodPrice}) 
        VALUES ('${newItemId}','${newFoodType}','${newFoodPhotoSrc}','${newFoodPrice}')`,
        (err,result) => {

            if (err != null) {
                res.send('There some thing wrong')
                console.log(err);
            }
            else {
                res.send('the new product has been added')
            }
    })

}

module.exports = addNewProduct