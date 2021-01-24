/***********************
 * Interações iniciais
 **********************/
//ENIGMA
//Definindo variável, para pegar o texto do usuário (a resposta do enigma)
var PuzzleAnswer = window.prompt('RESPONDA AO SEGUINTE ENIGMA:\n Mais conhecido em forma redonda. Porém sou mais utilizado em forma cubica. Há animais que vivem dentro de mim que costumam soltar bolhas, por causa do meu conteúdo.\n Quem sou?');
//Verificando se aresposta está certa
while(PuzzleAnswer != 'Aquário'){
    window.alert('Você precisa responder, corretamente, ao enigma se quiser continuar.');
    PuzzleAnswer = window.prompt('RESPONDA AO SEGUINTE ENIGMA:\n Mais conhecido em forma redonda. Porém sou mais utilizado em forma cubica. Há animais que vivem dentro de mim que costumam soltar bolhas, por causa do meu conteúdo.\n Quem sou?');
}

//PEDINDO A SENHA
//Definindo variável, para pegar o texto do usuário (a senha para entrar na página)
var password = window.prompt('Insira a senha para entrar nesta página.');
//Verificcando se a pessoa poderá entrar
while(password != 'PasswordSenha'){
    window.alert('Você não pode entrar, pois não inseriu a senha corretamente!');
    password = window.prompt('Insira a senha para entrar nesta página.');
}

/***********************
 * Funções
 **********************/
