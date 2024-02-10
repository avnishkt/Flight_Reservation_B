
const {AirportService} =require('../services/index')
const airportservice =new  AirportService();
const create = async (req,res)=>{
    try {
        const response =await airportservice.create(req.body);
        return res.status(201).json({
            data:response,
            success: true,
            message:"succesfully updatea city ",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data:{},
            success:false,
            message:"not able to create the airport service ",
            err:error } )
    }
}
module.exports={
    create
}