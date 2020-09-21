
const allButtons = document.getElementById('inputButton');
const calcDisplay = document.getElementById('output');
function buttonClickEventClickNumber(number){
    if((calcDisplay.innerHTML).trim()==='0'){
        calcDisplay.innerHTML='';
}
let holder = calcDisplay.innerHTML;
calcDisplay.innerHTML=holder+number;
};    

function buttonClickEventClickOperator(operand)
{
    
}


