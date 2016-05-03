var express=require('express');
var router=express.Router();
var socket=require('../function/socket');
var server=require('../app');
module.exports=router;

router.get('/',function (req,res) {
	var id=req.query.id;
	if (id==2) {
		res.render('se2');
	} else if(id==3) {
		res.render('se3');
	} else if(id==4) {
		res.render('se4');
	} else if(id==5) {
		res.render('se5');
	} else if(id==6) {
		res.render('se6');
	}
	res.render('index',{title:'Greg'});
});

// router.post('/',function (req,res) {
// 	var id=req.query.id;
// 	if (id==2) {
// 		res.render('se2');
// 	} else {

// 	}
// 	// res.render('se2');
// });