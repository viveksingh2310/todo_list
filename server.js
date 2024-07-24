import app from "./index.js"
import express from 'express'
import path from "path";
import {connect} from './config/mongodb.js'
app.use(express.static(path.join(path.resolve(),'public')));
app.listen(4000,async()=>{
  await connect();
    console.log('the server is running at port number 4000')
})