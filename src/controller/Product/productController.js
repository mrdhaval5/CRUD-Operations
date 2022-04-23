const async = require("hbs/lib/async");
const Product = require("../../routers/APIRouter");
const ProductModel = require("./productContrllerModel");

const addProduct = async(req,res)=>{
    const data = await ProductModel.addproduct();
    res.send(data);
}

const deleteProduct = async(req,res)=>{
    const data = await ProductModel.deleteproduct("6263a0ed6f1eff0681af9157");
    res.send(data);
}

const readProduct = async(req,res)=>{
    const data = await ProductModel.readproduct();
    res.send(data);
}
const readsProduct = async(req,res)=>{
    const data = await ProductModel.readsproduct("626394bb1f7ff31dc89c6ab1");
    res.send(data);
}
const updateProduct = async(req,res)=>{
    const data = await ProductModel.updateproduct("62639cb41061dcfbbc83c8e6");
    res.send(data);
}
module.exports = {addProduct,deleteProduct,readProduct,readsProduct,updateProduct}