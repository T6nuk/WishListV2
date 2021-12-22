const express = require('express');
const wishController = require('../controllers/adminController');
const router = express.Router({ mergeParams: true });

router.get('/', wishController.getMainPage);

module.exports = router;

//lisa projektile uus route nimega shoppingList
//lisa projektile ka kontrollerit shoppingList routeri jaoks
//shoppingList leheküljel peab olema kirjutatud Shopping List
