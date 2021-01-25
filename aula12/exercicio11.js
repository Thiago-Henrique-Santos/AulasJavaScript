//Condições aninhadas - vem de ninho mesmo
//O modo abaixo é o mais usado
var idade = 67;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
    console.log('Não vota!');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional!');
} else {
    console.log('Voto opcional!');
}

/*
Modo básico para entender o nome aninhada e como
criar mais condições do que a condição composta,
que é apenas if e else. Agora há mais possibilidades.

var idade = 68;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
    console.log('Não vota!');
} else {
    if (idade < 18) {
        console.log('Voto opcional!');
    } else {
        if (idade <= 65) {
            console.log('Voto obrigatório!');
        } else {
            console.log('Voto opcional!');
        }
    }
}

*/