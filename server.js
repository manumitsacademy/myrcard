const path = require("path");
const express = require("express");
const app = express();
const http = require('http');
var bodyParser = require('body-parser')
var soap = require('strong-soap').soap;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
var authUrl = process.env.authUrl;      // || "https://revcard.herokuapp.com/api/";

app.use(cors());
app.use(express.static(__dirname + '/angular-build'));
 var url = process.env.Url;             // || "https://revcard.pearlcapital.com:7073/Revenued.wsdl";
    var date = new Date();
    var sysDate = date.getTime()-(24*60*60*1000);
app.get("/getAuthUrl",(req,res)=>{   
    console.log(process.env) 
    res.send("hi")
})
app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/angular-build'+'/index.html'));
});
app.use((req,res,next)=>{
    if(req.headers.authorization){
        var options = {
            method:'GET',
            host: 'revcard.herokuapp.com',
            path: '/api/v1/validateToken',
            headers:{"Authorization":req.headers.authorization}
        };
          
          callback = function(response) {
            var str = '';
            response.on('data', function (chunk) {
                
            });
            response.on('error', function (res) {
               
              });
            response.on('end', function () {
              
            });
            next();
          }
          
          http.request(options, callback).end();
    }
    else{
        res.redirect("/login")
    }
})

app.get("/accountsummary/:oppId", function (req, res, next) {
    var requestArgs = {
        oppId: req.params.oppId,
        sysDate,
        sessionId: '?'
    };
    var options = {};
    soap.createClient(url, options, function (err, client) {
        var customRequestHeader = {
            "Content-Type": "text/xml;charset=UTF-8",
            "Authorization": process.env.Authorization || "UmV2ZW51ZWRIZXJva3VTaXRlL0ZJNzhKSkNSMzRXOTAhNTY="
        };
        var method = client['Revenued']['RevenuedSoap']['RevenuedGetAcctSummary'];
        method(requestArgs, function (err, result, envelope, soapHeader) {
            res.send(result);
        }, null , customRequestHeader);
        
    });
});
app.get("/transactionhistory/:oppId", function (req, res, next) {
    
    var requestArgs = {
        oppId: req.params.oppId,
        sysDate,
        sessionId: '?'
    };

    var options = {};

    soap.createClient(url, options, function (err, client) {
        var customRequestHeader = {
            "Content-Type": "text/xml;charset=UTF-8",
            "Authorization": process.env.Authorization || "UmV2ZW51ZWRIZXJva3VTaXRlL0ZJNzhKSkNSMzRXOTAhNTY="
        };
        var method = client['Revenued']['RevenuedSoap']['RevenuedGetTrxnHistory'];
       
        if(err){
            method({...requestArgs,sysDate:sysDate-(24*60*60*1000)}, function (err, result, envelope, soapHeader) {
                res.send(result);
            }, null , customRequestHeader);
        }
        else{
            
            method(requestArgs, function (err, result, envelope, soapHeader) {
                res.send(result);
            }, null , customRequestHeader);
        }
    });
});
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/angular-build'+'/index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
