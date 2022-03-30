const express = require('express');
const router = express.Router();
const restaurent_controller = require('../controller/restaurents');

router.get('/restaurentNames', restaurent_controller.restaurentNames);
router.post('/addRestaurentNames', restaurent_controller.addRestaurentNames);
router.put('/updateRestaurentNames/:id', restaurent_controller.updateRestaurentName);
router.delete('/deleteRestaurentNames/:id', restaurent_controller.deleteRestaurentName);
module.exports = router;