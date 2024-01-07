const { where, Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
    } catch (error) {
      console.log("something went wrong in repositry of city");
      throw { error };
    }
  }
  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in repositry of city");
      throw { error };
    }
  }
  async updateCity(cityId,data) {
   try {
    // const  city =await City.update(data,
    //     { where:{
 
    //      id:cityId
    //      }})
    //      return city;

    const city =await City.findByPk(cityId);
    city.name =data.name;
    await city.save();
    return city;
   } catch (error) {
    console.log("something went wrong in repositry of city");
      throw { error };
   }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId); //have in built where clouse
      return city;
    } catch (error) {
      console.log("something went wrong in repositry of city");
      throw { error };
    }
  }
  async getAllCities(filter) {
    try {
      if(filter.name){
        const cities =await City.findAll({
          where:{
            name:{
              [Op.startsWith]:filter.name
            }
          }
        });
        return cities
      }
      const citie = await City.findAll();
      return citie;
    } catch (error) {
      console.log("something went wrong in repositry of city");
      throw { error };
    }
  }
}

module.exports = CityRepository;
