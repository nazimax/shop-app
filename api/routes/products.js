const express =require('express')
const router =express.Router();


const Product =require('../models/product')
const mongoose= require('mongoose')


router.get('/',(req,res,next)=>{
    Product.find({})
    .then(docs=>{
        const respons={
            count: docs.length,
            products:docs.map(doc=>{
                return{
                    name : doc.name,
                    price : doc.price,
                    _id : doc._id,
                    request :{
                        type :'GET',
                        url:'http://localhost:3000/products/'+doc._id
                    }
                }
            }),

        }
        
        
        console.log(docs);
        res.status(200).json(respons)    
    }).catch(err=>{
        console.log(err);
        
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
    Product.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc)
        
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err

        })

    })
    
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