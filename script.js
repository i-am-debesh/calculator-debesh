const buttonElement = document.querySelectorAll('.js-btn');
let flag = false;

buttonElement.forEach((button)=>{
    button.addEventListener('click', ()=>{

        document.getElementById('result-area').innerHTML = '';
        
        
        if(button.innerHTML === 'C') {
            clearDisplay();
        }else if(button.innerHTML === '=') {
            calculateResult();
            
        }else {
            if(document.getElementById('display').innerHTML.length < 23) {
                if(button.innerHTML=== '( )') {
                    if(flag === false) {
                        appendValue('(');
                        flag = true;
                    }else{
                        appendValue(')');
                        flag = false;
                    }
                }
                else if(button.innerHTML === 'del') {
                    deleteLastElement(document.getElementById('display').innerHTML);
                }
                
                else{
                    appendValue(button.innerHTML);
                }
            }
            
        }
        

        
    });
});


function appendValue(value) {
    
    document.getElementById('display').innerHTML += value;
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '';
    document.getElementById('result-area').innerHTML  = '';
}

function calculateResult() {
    const expression = document.getElementById('display').innerHTML;
    const result = (eval(expression));

    const resultElement = document.getElementById('result-area');
    resultElement.innerHTML = result;

}
function deleteLastElement(value) {
    let displayElement = document.getElementById('display');
    let length = displayElement.innerHTML.length;
    displayElement.innerHTML =  displayElement.innerHTML.slice(0,length-1);
    
}


//23->max element length in screen

