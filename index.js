const txtOp1=document.getElementById("op1");
console.log(txtOp1);
const txtOperacion=document.getElementById("operador");
const txtOp2=document.getElementById("op2");
console.log(txtOp2);
const btnCalcular=document.getElementById("calcular");
const pResultado=document.getElementById("resultado");
btnCalcular.addEventListener('click',calcular);
/* const calcular=()=>{
    const operador=txtOperador.value;
    console.log(txtOperador.value);
    if (operador=="+"||operador=="-"||operador=="*"||operador=="/") {
        pResultado.innerText="Calculo Posible";
        
    }
    else{ 
        pResultado.innerText="Calculo Imposible";
    }
} */
function calcular(){
    const operacion=txtOperacion.value;
    const op1=parseFloat(txtOp1.value);
    const op2=parseFloat(txtOp2.value);

    console.log(txtOperacion.value);
    if (operacion=="+"||operacion=="-"||operacion=="*"||operacion=="/") {
        
        if (!isNaN(op1)&&!isNaN(op2)) {
            const res= op1 +operacion+ op2
            pResultado.style="color:green"
            pResultado.innerText=eval(res);
        }
        else{
            pResultado.style="color:red;text-size:2rem"
            
            pResultado.innerText="Calculo Imposible";
        }
    }
    else{
        pResultado.style="color:red" 
        pResultado.innerText="Calculo Imposible";
    }
}