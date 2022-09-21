const express = require('express');
const app = express();
const port = 3000
app.use(express.json())
const cors = require('cors')
app.use(cors())


// -- GET END POINTS -----------------------------------------------
app.use( '/products' , require('./ap/product_api') )





app.listen(port ,() => {
    console.log(`${port} is running ....`);
})