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

router.delete("/:id",async(req,res)=>{
    let x;
    try{
        const postid1=await Postid.findOne({"postid":req.params.id});
        let p=postid1.posttitle;
        // console.log(" postid1 "+postid1);
        try{

            await postid1.delete();
            res.status(200).json(p+" postid deleted");

        }catch(err){
            res.status(500).json(err);
        }
        
        
    }catch(err){
        res.status(500).json("err in findone postid "+err);
    }
})

module.exports=router;