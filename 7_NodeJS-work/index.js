const os = require('os');
const fs = require('fs');
const newUser = require('./user.js');

const user = os.userInfo();
const data = new Date();

let message = "User " + user.username + " started the app at " + data;

if (newUser.addLog()) 
{
    fs.appendFile("hello.txt", message, (err) => {
        if(err){
            console.log('not able to append')
        }
    })
}

