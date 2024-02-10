const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.price ||
    !req.body.boardingGate 
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "invalid request body for creating flight",
      err: "missing mandatory info in flight creation",
    });
  }

  next();
};

module.exports={validateCreateFlight}
    
