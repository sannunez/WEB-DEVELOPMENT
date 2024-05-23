// FOR
// i++ cresce de 1 em 1
// i+=n cresce de n em n

// i-- decresce de 1 em 1
// i-= decresce de n em 

function calcular(){
   var numero = parseInt(document.getElementById("numero").value)

    for (i=1; i <= 10; i++){
        console.log(`A tabuada do ${numero} é:
        ${numero} x ${i} é igual a ${numero*i}`)

}
}