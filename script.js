calc = document.getElementById('calc-text');

clickNumer = (event) =>{
    nr = event.target.innerHTML
    if(calc.innerHTML==0){
        calc.innerHTML = nr;
    }
    else{
        calc.innerHTML+=nr;
    }
    
    // console.log(nr);
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
