var express = require("express")
var app = new express()

app.get("/",function(req,res){
var form = '<!doctype html>\
<html lang="en">\
<head>\
<meta charset="UTF-8">\
<title>Document</title>\
</head>\
<body>\
<form action="/our_post" method="post">\
<input type="text" name= "text" style="font-size:36px;"/>\
<button style="font-size:36px;">Клацай</button>\
</form>\
</body>\
</html>'
res.send(form)
})

app.listen(999)

app.post("/our_post",function(req,res){
res.send("Ну привет")
})

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
