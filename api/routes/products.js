const express =require('express')
const router =express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).json({
        message:'handeling GET requests to products'
    })
})

router.post('/',(req,res,next)=>{
 
    res.status(200).json({
        message:'handeling POST  requests to products'
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

    
        res.status(200).json({
            message:'Updated products'
        
        })  
    })


router.delete('/:productId',(req,res,next)=>{

 
    res.status(200).json({
        message:'deleted product dd'
    
    })  
})


module.exports=router