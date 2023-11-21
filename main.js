// var, let, const - assigning values
// String, Numbers, Boolean, null, undefined, Symbol

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: true
    },
];

const toDoJSON = JSON.stringify(todos);
console.log(toDoJSON);

//for
for(let i = 0 ; i<todos.length; i++){
    console.log(todos[i].text);
}




