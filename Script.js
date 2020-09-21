
let allButtons = document.getElementById('inputButton');
let displayScreenText = document.getElementById('output');

function buttonClickEvent(){
    allButtons.addEventListener("click", function(){
        displayScreenText.innerHTML(this.innerText);
    });
}

