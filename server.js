const path = require("path");
const express = require("express");
const app = express();
var soap = require('strong-soap').soap;
const cors = require('cors');
app.use(cors());
app.use(express.static(__dirname + '/angular-build'));
 var url = "https://revcard.pearlcapital.com:7073/Revenued.wsdl";
    var date = new Date();
    var sysDate = (+(date.getUTCMonth()))+1+"/"+(+date.getDate()-1)+"/"+date.getFullYear();
app.get("/accountsummary", function (req, res, next) {
    console.log(process.env)
    var requestArgs = {
        oppId: '0060y00001D8L1dAAF',
        sysDate,
        sessionId: '?'
    };

    var options = {};

    soap.createClient(url, options, function (err, client) {
        var customRequestHeader = {
            "Content-Type": "text/xml;charset=UTF-8",
            "Authorization":"UmV2ZW51ZWRIZXJva3VTaXRlL0ZJNzhKSkNSMzRXOTAhNTY="
        };
        var method = client['Revenued']['RevenuedSoap']['RevenuedGetAcctSummary'];
        method(requestArgs, function (err, result, envelope, soapHeader) {
            res.send(process.env)
            //res.send(result);
        }, null , customRequestHeader);
    });
});
app.get("/transactionhistory", function (req, res, next) {
    var url = "https://revcard.pearlcapital.com:7073/Revenued.wsdl";

    var requestArgs = {
        oppId: '0060y00001D8L1dAAF',
        sysDate,
        sessionId: '?'
    };

    var options = {};

    soap.createClient(url, options, function (err, client) {
        var customRequestHeader = {
            "Content-Type": "text/xml;charset=UTF-8",
            "Authorization":"UmV2ZW51ZWRIZXJva3VTaXRlL0ZJNzhKSkNSMzRXOTAhNTY="
        };
        var method = client['Revenued']['RevenuedSoap']['RevenuedGetTrxnHistory'];
        method(requestArgs, function (err, result, envelope, soapHeader) {
            res.send(result);
        }, null , customRequestHeader);
    });
});
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/angular-build'+'/index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
