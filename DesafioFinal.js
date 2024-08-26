//Se verifica si el numero es par
function pares (numero){
    return numero % 2 ===0;
}
//Ver en que posicion estan
function usapares(arreglo){
    let arreglopares=[];
    for (let s = 0; s < arreglo.length; s++)
        if (pares (arreglo[s])){
            arreglopares.push(arreglo[s]);
        }
        return arreglopares;
}

function p(){
    let numeros=[1,2,3,4,5,6,7,8,9,10];
    let numerospares=(usapares(numeros));
    console.log ("los numeros pares son: ",numerospares);
}
p();

