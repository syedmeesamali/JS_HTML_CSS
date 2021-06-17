const todos = [
    {
        id: 1, text: 'first task', complt: false
    },
    {
        id: 2, text: 'second task', complt: true
    },
    {
        id: 3, text: 'third task', complt: false
    }
];

todos.forEach(function(todos){
    console.log(todos.text);
})

const todoText = todos.filter(function(todos){
    return todos.complt === true;
}).map(function(todos){
    return todos.text;
})
console.log(todoText);