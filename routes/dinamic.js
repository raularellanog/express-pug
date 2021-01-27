var express = require('express')
var router=express.Router();

router.get('/',function(req,res){
    res.render('dinamic');
});

router.get('/:datonombre/:datoID',function(req,res){
    res.render('dinamic',{
        dato:{
            nombre:req.params.datonombre,
            id:req.params.datoID
        }
    })
});

module.exports=router;