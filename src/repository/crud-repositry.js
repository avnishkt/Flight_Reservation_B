const airport=require('../models/airport')
class CrudRepository{
    constructor(model){
        this.model=model;
        // console.log(model)
    }
    async create(data) {
        try {
            console.log(data)
          const city = await this.model.create(
      data
          );
          return city;
        } catch (error) {
          console.log("something went wrong in repositry of city");
          throw { error };
        }
      }
      async deleteCity(modelId) {
        try {
          await this.model.destroy({
            where: {
              id: modelId,
            },
          });
          return true;
        } catch (error) {
          console.log("something went wrong in repositry of city");
          throw { error };
        }
      }
      async updateCity(modelId,data) {
       try {
        const  city =await this.model.update(data,
            { where:{
     
             id:modelId
             }})
             return city;
    
        
       } catch (error) {
        console.log("something went wrong in repositry of city");
          throw { error };
       }
      }
      async get(modelId) {
        try {
          const result = await this.model.findByPk(modelId); //have in built where clouse
          return result;
        } catch (error) {
          console.log("something went wrong in repositry of city");
          throw { error };
        }
      }
      async getAll() {
        try {
          
          const citie = await this.model.findAll();
          return citie;
        } catch (error) {
          console.log("something went wrong in repositry of city");
          throw { error };
        }
      }
    }     

module.exports=CrudRepository;