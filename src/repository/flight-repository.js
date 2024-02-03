const {Flight}=require('../models/index');
const {Op} =require('sequelize')

class FlightRepository{

#createFilter(data){
    let filter ={};
    if(data.arrivalAirportId){
        filter.arrivalAirportId=data.arrivalAirportId;
    }
    if(data.departureAirportId){
        filter.departureAirportId=data.departureAirportId;
    }
    let priceFilter =[];
    if(data.minprice){
        priceFilter.push({price:{[Op.gte]:data.minprice}})
    }
    if(data.maxprice){
        priceFilter.push({price:{[Op.lte]:data.maxprice}})
    }
    Object.assign(filter,{[Op.and]:priceFilter})
    console.log(filter);
    return filter;

}


    async createFlight(data){
        try {
            const flight =await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("error in flight repositry");
            throw { error};
            
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId); //have in built where clouse
            return flight;
          } catch (error) {
            console.log("something went wrong in repositry of flight");
            throw { error };
          }
    }
    async getAllFlight(filter){
      try {
        const filterObject =this.#createFilter(filter);
        const flight =await Flight.findAll({
            where:filterObject
        })
        return flight
      } catch (error) {
        console.log("something went wrong in repositry of flight");
        throw { error };
      }
    }
}

module.exports =FlightRepository;