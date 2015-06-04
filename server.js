var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');


dotenv.load();

var API_KEY = process.env['MANDRILL_KEY']
var mandrill = require('mandrill-api/mandrill');

mandrill_client = new mandrill.Mandrill(API_KEY);

var message = {
    "text": "Example text content",
    "subject": "example subject",
    "from_email": "message.from_email@example.com",
    "from_name": "Example Name",
    "to": [{
        "email": "prosoldp@gmail.com",
        "name": "Artem",
        "type": "to"
    }],
    "headers": {
        "Reply-To": "message.reply@example.com"
    }
};
var async = false;
var ip_pool = "Main Pool";
//var send_at = "example send_at";
mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
    console.log(result);

}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
});