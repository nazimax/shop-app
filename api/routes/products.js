const express =require('express')
const router =express.Router();


const Product =require('../models/product')
const mongoose= require('mongoose')


router.get('/',(req,res,next)=>{

    res.status(200).json({
        message:'handeling GET requests to products'
    })
})


router.post('/',(req,res,next)=>{
    
    const product=new Product({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price :req.body.price
    })
    console.log(product);
    
    product.save()
    .then(result=>{
        console.log(result);
        
    })
    .catch(err=>{ console.log(err);
    

    })

    res.status(201).json({
        message:'handeling POST  requests to products',
        product:product
    })
})

router.get('/:productId',(req,res,next)=>{

    const id = req.params.productId;
    if(id=='special'){
        res.status(200).json({
            message:'you discovered the special ID',
            id:id
        })  
    }
    else{
        res.status(200).json({
            message:'you passed an ID'
        })
    }
    
})


router.patch('/:productId',(req,res,next)=>{

    
        res.status(201).json({
            message:'Updated products'
        
        })  
    })


router.delete('/:productId',(req,res,next)=>{

 
    res.status(200).json({
        message:'deleted product '
    
    })  
})


module.exports=router