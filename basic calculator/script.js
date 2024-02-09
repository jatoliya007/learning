const buttonsEl = document.querySelectorAll("button");

const inputFeild = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=> {

        const buttonValue = buttonsEl[i].textContent;

        if (buttonValue === "C"){
            clearResult()
        }else if (buttonValue === "="){
            calculateResult()
        }else {
            appendValue(buttonValue)
        }
    })

}

function clearResult(){
    inputFeild.value = "";
}

function calculateResult(){
    inputFeild.value = eval(inputFeild.value);
}

function appendValue(buttonValue){
    inputFeild.value = inputFeild.value + buttonValue;
}
