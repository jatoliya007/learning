const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
// console.log(num1);
// console.log(num2);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"))

if(!score) {
    score = 0;
    }


scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} Multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    // e.preventDefault()
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    let strng = JSON.stringify(score)
    localStorage.setItem("score", strng); 
}
