const express= require('express')
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handeling GET new orders'
    })
})

router.post('/',(req,res,next)=>{
    const order={
        productId:req.body.productId,
        quatity:req.body.quantity
    }
    res.status(201).json({
        message:'orders was created',
        order:order
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