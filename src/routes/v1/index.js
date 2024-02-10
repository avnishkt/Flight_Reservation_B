const express =require('express');
 const CityControler = require('../../controllers/city-controler');
const FlightControler =require('../../controllers/flight-controller')
const  AirportController= require('../../controllers/airport-controler')
 const router = express.Router();
 router.post('/city',CityControler.create);
 router.delete('/city/:id',CityControler.destroy);
 router.get('/city/:id',CityControler.get);
 router.get('/city',CityControler.getAll)
 router.patch('/city/:id',CityControler.update);


 router.post('/flights',FlightControler.create);
 router.get('/flights',FlightControler.getAll);


 router.post('/airport',AirportController.create)
 module.exports=router;

