const express =require('express');
 const CityControler = require('../../controllers/city-controler');

 const router = express.Router();
 router.post('/city',CityControler.create);

 module.exports=router;
 
