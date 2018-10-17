/*
This function takes two arguments i.e. start and end.
Returns an array containing all the numbers from start up to and
(including) end. 
 */

function range(start,end) {
    var myArr = [];
    for (var k=start; k<=end; k++) {
        myArr.push(k);
    }
    return myArr;
}