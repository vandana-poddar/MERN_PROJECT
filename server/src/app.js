const express =  require("express");
const app = express();
const port = process.env.port || 5000;
const router  = require("./routers/routers");
require("./db/connection");

app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log('server connected')
});