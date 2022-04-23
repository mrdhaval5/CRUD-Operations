const { promiseImpl } = require("ejs");
const async = require("hbs/lib/async");
const myProduct = require("./productControllerSchema");

const addproduct = async(data) =>{
    // console.log(data);
    return new Promise(async(resolve,reject)=>{
        await new myProduct(data).save()
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    });
}

const deleteproduct = async(_id)=>{
    return new Promise(async(resolve,reject)=>{
        await myProduct.findByIdAndDelete(_id)
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    });
}

const readproduct = async(req,res)=>{
    return new Promise(async(resolve,reject)=>{
        await myProduct.find()
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    });
}
const readsproduct = async(_id)=>{
    return new Promise(async(resolve,reject)=>{
        await myProduct.findById(_id)
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    });
}

const updateproduct = async(_id)=>{
    return new Promise(async(resolve,reject)=>{
        await myProduct.findByIdAndUpdate({_id:_id},{pname:"Nokia"},{new:true})
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    });
}
module.exports = {addproduct,deleteproduct,readproduct,readsproduct,updateproduct}
