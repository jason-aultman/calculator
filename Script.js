
const allButtons = document.getElementById('inputButton');
const calcDisplay = document.getElementById('output');
var operand;
var placeholderOne;
var placeholderTwo;

function buttonClickEventClickNumber(number){
    if((calcDisplay.innerHTML).trim()==='0'){
        calcDisplay.innerHTML='';
}
let holder = calcDisplay.innerHTML;
calcDisplay.innerHTML=holder+number;
};    

function buttonClickEventClickOperand(operand)
{
    
    this.operand=operand;
    if(placeholderOne!==undefined)
    {
        placeholderTwo=calcDisplay.innerHTML;
    }else placeholderOne = calcDisplay.innerHTML;
    placeholder = calcDisplay.innerHTML;
    calcDisplay.innerHTML='0';
    
};

function buttonClickEventEquals(){
    placeholderTwo=calcDisplay.innerHTML;
    if(operand==='+'){
        var result = parseFloat(placeholderOne)+parseFloat(placeholderTwo);
    }else if(operand==='-'){
        var result = parseFloat(placeholderOne)-parseFloat(placeholderTwo);
    }else if (operand ==='X'){
        var result = parseFloat(placeholderOne)*parseFloat(placeholderTwo);
    }else if (operand==='/'){
        var result = parseFloat(placeholderOne)/parseFloat(placeholderTwo);
    }

    result=result.toString();
    calcDisplay.innerHTML=result;
};


