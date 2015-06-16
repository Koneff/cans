var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');


dotenv.load();

var API_KEY = process.env['MANDRILL_KEY'];
var mandrill = require('mandrill-api/mandrill');

mandrill_client = new mandrill.Mandrill(API_KEY);
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.set('port',3000);
app.use(express.static(__dirname));

app.post('/email',function(req,res){
    var toEmail = 'prosoldp@gmail.com';
    var message = {
        "text": req.body.comments,
        "subject": "Prosol.dp.ua|Сообщение с сайта",
        "from_email": req.body.email,
        "from_name": req.body.name,
        "to": [{
            "email": toEmail,
            "name": "Artem",
            "type": "to"
        }],
        "headers": {
            "Reply-To": req.body.email
        }
    };
    var async = false;
    var ip_pool = "Main Pool";
//var send_at = "example send_at";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(res) {
        console.log(res);

    }, function(e) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });


});

//var apiPort = process.env['PORT']||3000;
var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});