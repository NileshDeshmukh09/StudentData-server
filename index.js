const express =require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv =  require("dotenv")
const Sequelize = require('sequelize');
const app = express();
dotenv.config();

app.use(logger('dev'));

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const authRoutes = require("./routes/auth.routes");

app.use( authRoutes );



app.listen(process.env.PORT , () => {
    console.log(`StudentData Server has started on the port http://localhost:${ process.env.PORT }` );
})