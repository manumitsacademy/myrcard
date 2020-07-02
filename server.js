const path = require("path");
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
var soap = require('strong-soap').soap;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/angular-build'));
 var url = process.env.Url || "https://revcard.pearlcapital.com:7073/Revenued.wsdl";
    var date = new Date();
    var sysDate = date.getTime();
    //keep the system date server date. only if the response from SOAP api is error then substract the date  -1
    var requestArgs = {
        oppId: req.params.oppId,
        sysDate,
        sessionId: '?'
    };
    var customRequestHeader = {
        "Content-Type": "text/xml;charset=UTF-8",
        "Authorization": process.env.Authorization  
    };
    var options = {};
    
app.get("/accountsummary/:oppId", function (req, res, next) {
    console.log(req.params);
    
    soap.createClient(url, options, function (err, client) {        
        var method = client['Revenued']['RevenuedSoap']['RevenuedGetAcctSummary'];
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
app.get("/transactionhistory/:oppId", function (req, res, next) {

    soap.createClient(url, options, function (err, client) {
        
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
