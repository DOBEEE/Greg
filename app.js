var router=require('./routes/router');
var socket=require('./function/socket');
var express=require('express');
var app=express();
var port=process.env.PORT||3000;
var server=require('http').Server(app);
server.listen(port);

var serverStaic=require('serve-static');
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extend:true}));
app.use(serverStaic('public'));
app.use(serverStaic('node_modules'));
app.use('/',router);

app.set('views','./views/pages/');
app.set('view engine','jade');

console.log('start on'+port);

app.get('/miya',function(req,res){
	socket(server);
	res.render('miya');

})
module.exports=server;