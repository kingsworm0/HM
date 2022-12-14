const express = require ("express")
const mongoose = require("mongoose")


const record = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String
    }
});
mongoose.model('records');