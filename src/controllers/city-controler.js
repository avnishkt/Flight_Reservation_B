const {  CityService } = require('../services/index');

const cityService =new CityService();//creted the objects
const create = async(req, res) => {
try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success: true,
        message:"succesfully created a city ",
        err:{}
    })
    
} catch (error) {
    console.log(error);
    return res.status(501).json({
        data:{},
        success:false,
        message:"not able to  create ac city",
        err:error
    })
}
}
const destroy = async(req, res) => {
try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
        data:response,
        success: true,
        message:"succesfully deleted a city ",
        err:{}
    })
    
} catch (error) {
    console.log(error)
    return res.status(501).json({
        data:{},
        success:false,
        message:"not able to  create ac city",
        err:error
    })
}
}
const get = async(req, res) => {
try {
    const city = await cityService.getCity(req.params.id);
    return res.status(201).json({
        data:city,
        success: true,
        message:"succesfully get a city ",
        err:{}
    })
} catch (error) {
    console.log(error)
    return res.status(501).json({
        data:{},
        success:false,
        message:"not able to  get ac city",
        err:error
    })
}
}

const getAll = async(req,res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data:cities,
            success: true,
            message:"succesfully get a city ",
            err:{}
        })
    
        
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data:{},
            success:false,
            message:"not able to   get all city",
            err:error
        }) 
    }
}
const update = async(req, res) => {
try {
    const city = await cityService.updateCity(req.params.id,req.body);
    return res.status(201).json({
        data:city,
        success: true,
        message:"succesfully updatea city ",
        err:{}
    })
    
} catch (error) {
    console.log(error)
    return res.status(501).json({
        data:{},
        success:false,
        message:"not able to   updaac city",
        err:error
    })
}
}

module.exports={
    create,
    get,
    destroy,
    update,
    getAll
}