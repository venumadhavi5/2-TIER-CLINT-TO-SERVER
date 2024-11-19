const express = require("express");
const cors = require("cors");

 let app = express();
 app.use(cors());

 app.get("/cartoonShows",(req,res)=>{
   let showsArr= ["ShinChan","Masha and Bear","Doraemon","Motu Patlu","Pokemon","Dora"];
   res.json(showsArr);

 })

 app.get("/movieNames",(req,res)=>{

  let movieArr = ["Kalki","Devara","Amaran","Sitaramam"];
  res.json(movieArr);

 })

 app.listen(23593,()=>{
    console.log("Listening to port 23593");
 })