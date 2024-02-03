const express = require("express");
const bodyParser = require ('body-parser');

const { PORT } = require("./config/serverConfig");

const ApiRoutes =require('./routes/index');
const db =require('./models/index')
// const { Airport,City} = require("./models/index");
const setupAndStartServer = async () => {

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use('/api', ApiRoutes);
  app.get('/',(req,res)=>{
    res.json({mesg:working})
  })

  app.listen(3000, async(req,res) => {
    console.log(`server at port`);

    if(process.env.SYNC_DB)
    db.sequelize.sync({alter:true})

  

  });
};

setupAndStartServer();
