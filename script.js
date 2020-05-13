// 1

let newWindow = window.open();

let timer = setTimeout(() => {
    newWindow.close();
},1000)

// 2
let list = {
    value:1,
    next: null
}

let recursiveObject = (object, n) => {
    let obj = object;
    if(n > 0){
        obj.next = JSON.parse(JSON.stringify(obj));
        console.log(obj.next.value++);
        recursiveObject(obj.next, --n)
    }
    return obj;
}

let obj = recursiveObject(list, 10);

console.log(obj);
// 3
let add = (a, b) => a+b;
let subtract = (a, b) => a-b;
let multiply = (a, b) => a*b;
let divide = (a, b) => b === 0? -1: a/b;

let doSomethingWithTwoNumbers = (a,b, operation) =>{
    console.log(operation(a,b));
} 

doSomethingWithTwoNumbers(5, 3, add);
doSomethingWithTwoNumbers(5, 3, subtract);
doSomethingWithTwoNumbers(5, 3, multiply);
doSomethingWithTwoNumbers(5, 3, divide);

// 4

let arr = [1, 2, 3, 4, 5, {hello: 'world'}];

arr.pop();

console.log(arr);

console.log(arr.join(" и "));

arr = arr.map((value, index) => {
    if(value === 4){
        return 10;
    }
    return value;
})

arr.reverse();

console.log(arr)

// 5

let timers = 0;
let intervals = 0;

let currentTimer;
let currentInterval;

let main = document.getElementById('main');

let timerLabel = document.createElement('p');
let intervalLabel = document.createElement('p');
timerLabel.innerHTML = 'Timeout 0';
intervalLabel.innerHTML = 'Interval 0';

let resetButton = document.createElement('button');
resetButton.innerHTML = "Reset";

resetButton.addEventListener('click', () => {
    timers = 0
    intervals = 0;
    clearInterval(currentInterval);
    clearTimeout(currentTimer);
    updateText();
})

let startButton = document.createElement('button');
startButton.innerHTML = 'Start';

startButton.addEventListener('click', () => {
    clearTimeout(currentTimer)
    currentTimer = setTimeout(() => {
        timers++;
        updateText();
    }, 5000 )
    clearInterval(currentInterval)
    currentInterval = setInterval(() => {
        intervals++;
        updateText();
    },1000 )
    }
)

let updateText = () => {
    timerLabel.innerHTML = 'Timeout ' + timers;
    intervalLabel.innerHTML = 'Interval ' + intervals;
}

main.appendChild(timerLabel);
main.appendChild(intervalLabel);
main.appendChild(startButton);
main.appendChild(resetButton);
