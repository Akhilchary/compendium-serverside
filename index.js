const express = require("express");
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const postRoute=require("./routes/posts");
const userRoute=require("./routes/user");
const postidRoute=require("./routes/postid");
var bodyParser = require('body-parser');

const app=express();
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 5000 }))


const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( console.log("connected to mongodb")).catch((err)=>console.log(err));


app.use('/api/posts',postRoute);
app.use('/api/user',userRoute);
app.use('/api/postid',postidRoute);

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
// })

app.listen(PORT ,()=>{
    console.log("server is running on port "+PORT);
});
