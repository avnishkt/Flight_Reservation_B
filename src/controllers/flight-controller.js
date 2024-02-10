const { FlightService } = require('../services/index');
const flightService =new FlightService();

const create = async(req,res)=>{
    
        try {
            const flightRequestData ={
               flightNumber:req.body.flightNumber,
                airplaneId:req.body.airplaneId ,
                departureAirportId:req.body.departureAirportId ,
                arrivalAirportId:req.body.arrivalAirportId ,
                arrivalTime:req.body.arrivalTime ,
                price:req.body.price ,
                boardingGate:req.body.boardingGate, 
            }
            const flight = await flightService.createFlight(flightRequestData);
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