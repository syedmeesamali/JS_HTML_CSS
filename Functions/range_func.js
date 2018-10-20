/*
This function takes two arguments i.e. start and end.
Returns an array containing all the numbers from start up to and
(including) end. 
 */

function range(start,end, step) {
    var myArr = [];
    if (start < end) {
        for (var k=start; k<=end; k+=step) {
            myArr.push(k);
        }
        return myArr;
    } else {
        for (var k=start; k>=end; k+=step) {
            myArr.push(k);
        }
        return myArr;
    }
    
}

function sumArr(arr) {
    var total = 0;
    for (var i in arr) {
        total += arr[i];
    }
    return total;
}

function reverseArray(arr) {
    var newArr = [];
    for (var k=(arr.length); k>=0; k--) {
        newArr.push(arr[k]);
    }
    return newArr;
}