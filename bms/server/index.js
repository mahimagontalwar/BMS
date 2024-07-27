const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const dburl=  'mongodb+srv://<mahima>:<NgRj82axOeTKDxEv>@cluster0.mongodb.net/<scaler>?retryWrites=true&w=majority';

// //onst dburl= 'mongodb+srv://<mahima>:<NgRj82axOeTKDxEv>@cluster0.mongodb.net';
// //const dburl= 'mongodb+srv://<mahima>:<NgRj82axOeTKDxEv>@cluster0.mongodb.net/<scaler>';
const dburl='mongodb+srv://mahima:<IVpDoykWWeBgXpU6>@cluster0.a8wuiyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//const dburl= 'mongodb+srv://<mahima>:<NgRj82axOeTKDxEv>@cluster0.mongodb.net/<scaler>?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dburl).then((function(){
    console.log("connected to db");
})).catch(err=>console.log(err));

app.listen(8082,()=>{
    console.log("Server is connected");
})