const path = require("path");
const express = require("express");
const app = express();
const soapRequest = require("easy-soap-request");
app.use(express.static(__dirname + '/angular-build'));
app.get("/abc",function (req, res, next) {
    // example data
    const url = "https://revcard.pearlcapital.com:7073";
    const sampleHeaders = {
        "Content-Type": "text/xml;charset=UTF-8",
        "Authorization": "UmV2ZW51ZWRIZXJva3VTaXRlL0ZJNzhKSkNSMzRXOTAhNTY=",
		"soapAction": 'https://revcard.pearlcapital.com:7073/Revenued.wsdl#RevenuedTest',
    };

    soapRequest({
        url: url,
        headers: sampleHeaders
    }).then((result) => {
        console.log("res",result);
        res.send(JSON.stringify(result));
    }).catch((err) => {
        console.log("err", err.toJSON());
        res.sendStatus(500);
    });
})
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/angular-build'+'/index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
