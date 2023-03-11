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



const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

sequelize.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(err => console.error('Unable to connect to the database :', err));


const authRoutes = require("./routes/auth.routes");

app.use( authRoutes );



app.listen(process.env.PORT , () => {
    console.log(`StudentData Server has started on the port http://localhost:${ process.env.PORT }` );
})