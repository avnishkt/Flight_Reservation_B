const express =require('express');
 const CityControler = require('../../controllers/city-controler');

 const router = express.Router();
 router.post('/city',CityControler.create);
 router.delete('/city/:id',CityControler.destroy);
 router.get('/city/:id',CityControler.get);
 router.get('/city',CityControler.getAll)
 router.patch('/city/:id',CityControler.update);

 module.exports=router;

