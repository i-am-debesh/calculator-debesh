const buttonElement = document.querySelectorAll('.js-btn');

buttonElement.forEach((button)=>{
    button.addEventListener('click', ()=>{

        document.getElementById('result-area').innerHTML = '';
        
        if(button.innerHTML === 'C') {
            clearDisplay();
        }else if(button.innerHTML === '=') {
            calculateResult();
            
        }else {
            if(document.getElementById('display').innerHTML.length < 23) {
                appendValue(button.innerHTML);
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


//23->max element length in screen