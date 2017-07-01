const express = require('express'),
      path    = require('path'),
      app     = express(),
      port    = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function(){
    console.dir('Server run!!!');
});