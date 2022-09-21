const productsTable = 'freshfood_products';
const itemId = 'itemId';
const foodType = 'foodType';
const foodPhotoSrc = 'foodPhotoSrc';
const foodPrice = 'foodPrice';
const q = require('../database/db_connection')


const updateThisProduct = (req,res) => {
    const {updatedItemId,updatedFoodType,updatedFoodPhotoSrc,updatedFoodPrice} = req.body
    q.execute(`
    UPDATE ${productsTable} SET 
    ${itemId} = '${updatedItemId}',
    ${foodType} = '${updatedFoodType}',
    ${foodPhotoSrc} = '${updatedFoodPhotoSrc}',
    ${foodPrice} = '${updatedFoodPrice}'
    WHERE ${itemId} = '${updatedItemId}'`, (err,result) => {
        if (err != null) {
            res.send('There some thing wrong')
            console.log(err);
        }
        else {
            res.send('the product has been updated')
        }
    })
}

module.exports = updateThisProduct