var nome = prompt('Qual o seu nome?');
var idade = parseInt(prompt('Qual a sua idade'));
var profissão = prompt('Com o que você trabalha?');

if (idade >= 100) {
    alert('Você não é tão velho!');
}

else {
    alert(`Olá, ${nome}. Você tem ${idade} anos e trabalha como ${profissão}. Que daora!`);
} 

