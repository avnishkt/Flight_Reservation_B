const { FlightService } = require('../services/index');
const flightService =new FlightService();

const create = async(req,res)=>{
    
        try {
            const flight = await flightService.createFlight(req.body);
            return res.status(201).json({
                data:flight,
                success: true,
                message:"succesfully created a flight ",
                err:{}
            })
            
        } catch (error) {
            console.log(error);
            return res.status(501).json({
                data:{},
                success:false,
                message:"not able to  create ac flight",
                err:error
            })
        }
    
}
const  getAll = async (req,res)=>{
    try {
        const response =  await flightService.getFlight(req.query);
        return res.status(200).json({
            data:response,
                success: true,
                message:"succesfully created a flight ",
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

module.exports={
    create,
    getAll
}