const friends = ['ali', 'mohsin', 'aun'];
const res = friends.map((friend, i) => ({
    firstName: friend,
    lastName: 'shah',
    id: 'lasdfs${i}sdf'
}));
console.log(res);

function car(model) {
    this.model = '911 Carrera';
}
var myCar = new car();
console.log(myCar.model);

function sum(a=1,b=2,c=3) {
    return a+b+c;
}
console.log(sum(5,4,3));