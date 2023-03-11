const express =require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv =  require("dotenv")
const app = express();
dotenv.config();
const Sequelize = require('sequelize');

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const sequelize = new Sequelize('studentdb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database :', err));





app.listen(process.env.PORT , () => {
    console.log(`StudentData Server has started on the port http://localhost:${ process.env.PORT }` );
})