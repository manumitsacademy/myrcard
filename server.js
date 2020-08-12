const path = require("path");
const express = require("express");
const app = express();
const http = require('http');
var bodyParser = require('body-parser')
var soap = require('strong-soap').soap;
var logger = require('./logger')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
var cors = require('cors');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/angular-build'));
var authUrl = process.env.authURL;   
var url = process.env.Url;
var date = new Date();
var sysDate = date.getTime()-(24*60*60*1000);
var allowedOrigins = ['https://praveeng-1002-herokuapp.com','http://localhost:4200','http://localhost:8080']
var corsOptionsDelegate = function (req, callback) {
    logger.info('welcome to loggeer',JSON.stringify(req.connection))
    var corsOptions;
    if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
app.use(cors(corsOptionsDelegate));
app.get("/getAuthUrl",(req,res)=>{    
    res.send({authUrl:authUrl})
})
app.get('/login',function(req,res){
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
app.use(cors({
    origin:function(origin,callback){
        callback(null,true)
    }
}));
app.get("/accountsummary/:oppId",function (req, res, next) {
    var requestArgs = {
        oppId: req.params.oppId,
        sysDate,
        sessionId: '?'
    };
    var options = {};
    soap.createClient(url, options, function (err, client) {
        var customRequestHeader = {
            "Content-Type": "text/xml;charset=UTF-8",
            "Authorization": process.env.Authorization
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
            "Authorization": process.env.Authorization
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
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/angular-build'+'/index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT);
