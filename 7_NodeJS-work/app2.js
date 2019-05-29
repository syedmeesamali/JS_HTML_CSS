var express = require('express');
var app = express();

app.get('/', function(req, res)
{
    res.send('this is a homepage');
});

app.get('/contact', function(req, res)
{
    res.send('this is a contact page');
});

//Special routing parameters below

app.get('/profile/:id', function(req, res)
{
    res.send('Your requested to see ID of ' + req.params.id);
});

app.listen(3000);
