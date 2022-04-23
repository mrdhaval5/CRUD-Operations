const express = require("express");
const async = require("hbs/lib/async");
const Product = require("../controller/Product/productController");

const APIRouter = new express.Router();

APIRouter.post("/addproduct",(req,res)=> Product.addProduct(req,res));
APIRouter.delete("/deleteproduct",(req,res)=>Product.deleteProduct(req,res));
APIRouter.get("/readproduct",(req,res)=> Product.readProduct(req,res));
APIRouter.get("/readsproduct",(req,res)=> Product.readsProduct(req,res));
APIRouter.patch("/updateproduct",(req,res)=> Product.updateProduct(req,res));
    

module.exports = APIRouter;