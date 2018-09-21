var express=require('express');
var router=express.Router();
var App=require('../app');


var mqtt = require('mqtt')
client=mqtt.connect('mqtt://ashu.eraofiot.in:1883');
client.on('connect',function(){
    console.log("connected to mqtt");
});


router.post('/onoff',(req,res)=>{
    console.log(req.body);
    var v=(req.body.value).toString();
    console.log(v);
    client.publish('led',v);
    res.json({success:true});
});


module.exports=router;