require("dotenv").config();
const express = require("express");
const app = express();

const path =require("path");
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'scr/views'));
const mainRouter=require("./scr/routes/main.routes");
app.use(mainRouter)
app.use('/productos',require('./scr/routes/productos.rauter'));
const PORT = process.env.PORT ||3001;
app.listen(PORT,() => console.log(`http://localhost:${PORT}`));
