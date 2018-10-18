/*
This function takes two arguments i.e. start and end.
Returns an array containing all the numbers from start up to and
(including) end. 
 */

function range(start,end, step) {
    var myArr = [];
    for (var k=start; k<=end; k+=step) {
        myArr.push(k);
    }
    return myArr;
}

function sumArr(arr) {
    var total = 0;
    for (var i in arr) {
        total += arr[i];
    }
    return total;
}