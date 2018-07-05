const express= require('express')
const router= express.Router();
const Order = require('../models/order')
const mongoose= require('mongoose')
const Product = require('../models/product')



router.get('/',(req,res,next)=>{
    Order.find().exec().then(docs=>{
        res.status(200).json({
            message:'getting all orders',
            orders:docs
       
        })
    }).catch(err=>{
        res.status(500).json({
            err:err
        })
    })
    
})

router.post('/',(req,res,next)=>{
    
    Product.findById({_id:req.body.productId})
    .then(doc=>{
        if(!doc){
            res.status(404).json({
                message:'Product not found'
            })
        }
        const order=new Order({
            _id: new mongoose.Types.ObjectId(),
            product:req.body.productId,
            quantity:req.body.quantity
        });
        return order.save()   
    })
    .then((result) => {
        //console.log(result);
        res.status(201).json({
            message:'orders was created',
            createdOrder:{
                _id:result._id,
                product:result.productId,
                quantity:result.quantity,
                request:{
                    type:'GET',
                    url:'http://localhost:3000/orders/'+result._id
                }

            }
        })
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            err:err
        })
    })  

    })
    


   


router.get('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;
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


module.exports=router