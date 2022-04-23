const express = require("express");

const router = new express.Router();

router.get("/addproduct",(req,res)=>{
    res.render("index");
})

module.exports = router;