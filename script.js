calc = document.getElementById('calc-text');

clickNumer = (event) =>{
    nr = event.target.innerHTML
    if(calc.innerHTML==0){
        calc.innerHTML = nr;
    }
    else{
        calc.innerHTML+=nr;
    }
}

window.addEventListener('load', (event)=>{
    [...document.getElementById('buttons-container').children].forEach(element => {
        if(element.nodeName=='BUTTON'&&element.innerHTML!="C"&&element.innerHTML!="="){
            element.addEventListener("click", clickNumer);
        }
            
    });
    document.getElementById('button-clear').addEventListener('click', (event)=>{
        calc.innerHTML = "0";
    });
    document.getElementById('button-equals').addEventListener('click', (event)=>{
        calc.innerHTML = eval(calc.innerHTML);
    });
    calc.innerHTML=0;
})


//Keypress functionality
document.addEventListener('keydown', function(event){
    if(event.defaultPrevented){
        return;
    }
    if(event.key>='0'&&event.key<='9'){
        if(calc.innerHTML==0)
            calc.innerHTML = ''
        calc.innerHTML+=event.key;
    }
    switch(event.key){
        case "Enter"||"=":
            calc.innerHTML = eval(calc.innerHTML);
            break;
        
        case "Backspace":
            if(calc.innerHTML.length!=1)
                calc.innerHTML = calc.innerHTML.substring(0, calc.innerHTML.length-1)
            else
                calc.innerHTML = '0'
            break;
        case "(":
            calc.innerHTML+='(';
            break;
        case ")":
            calc.innerHTML+=')';
            break;
        case "*":
            calc.innerHTML+='*';
            break;
        case "/":
            calc.innerHTML+='/';
            break;
        case "+":
            calc.innerHTML+='+';
            break;
        case "-":
            calc.innerHTML+='-';
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);