const express =require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv =  require("dotenv")
dotenv.config();

const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(process.env.PORT , () => {
    console.log(`StudentData Server has started on the port http://localhost:${ process.env.PORT }` );
})