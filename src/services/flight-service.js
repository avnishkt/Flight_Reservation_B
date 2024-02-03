const {FlightRepository,AirplaneRepository} =require('../repository/index');

class FlightService{

    constructor(){
        this.airplanerepository =new AirplaneRepository();
        this.flightRepository =new FlightRepository();     
    }  

    async createFlight(data){
         
        try {
               if(!compareTime(data.arrivalTime,data.departureTime))
               {
                throw ({err: "arrival time cannot be more than departure time"})
               }

            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            const flight =await this.flightRepository.createFlight({...data,total:airplane.capacity});
            return flight;
        } catch (error) {
            
        }

    }

    async getFlight(data){
        try {
            const flights =await this.flightRepository.getAllFlight(data);
            return flights;



        } catch (error) {
            console.log("error at flight repo");
            throw {error};
        }

    }
}
module.exports=FlightService;
