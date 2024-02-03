const {Airplane }=require('../models/index');

class AirplaneRepositry{
    async getAirplane(id){
       try {
        const airplane = await Airplane.findByPk(id);
          return airplane;

       } catch (error) {
        console.log("error at airplane repo")
        throw {error};
       }
    }
}
module.exports=AirplaneRepositry