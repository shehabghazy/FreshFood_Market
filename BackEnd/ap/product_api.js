const router = require('express').Router()
const addNewProduct = require('../services/add_new_product')
const deleteThisProduct = require('../services/delete_this_product')
const getAllProducts = require('../services/get_all_products')
const searchForProduct = require('../services/search_for_producr')
const updateThisProduct = require('../services/update_this_product')



router.post('/' , addNewProduct)
router.get('/' , getAllProducts )
router.get('/search', searchForProduct )
router.put('/' , updateThisProduct)
router.delete('/' , deleteThisProduct )

module.exports = router