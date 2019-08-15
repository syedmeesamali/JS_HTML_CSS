var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) 
{
    greeting = "GOOD Evening!";
} else if (hourNow > 12)
{
    greeting = "GOOD Afternoon!";
} else if (hourNow > 0)
{
    greeting = "GOOD Morning!";
} else 
{
    greeting = 'WELCOME!';
}    

document.write('<h3>' + greeting + '</h3>');
