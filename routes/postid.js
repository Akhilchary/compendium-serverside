const router=require("express").Router();
// const express=require("express");
const Postid=require("../models/Postid");

router.post("/",async(req,res)=>{
    try{
        const newid=new Postid(req.body);
        const savednewid=await newid.save();
        res.status(200).json(savednewid);
    }catch(err){
        res.status(500).json(err + " " + "could not post postid");
    }
})

router.get("/",async(req,res)=>{
    try{
        const postids=await Postid.find();
        res.status(200).json(postids);
    }catch(err){
        res.status(500).json(err + " "+ "could not get ids");
    }
})


module.exports=router;