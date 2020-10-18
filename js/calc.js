function botao(num) {
	// Variavel acumula os valores digitados e aparecem no visor 
	var salvo = document.getElementById('visor').value += num;
}

function limpa(){
	// Torna o campo visor sem valor
	document.getElementById('visor').value = '';
}

function calcula(){
	// Variavel resultado é iniciada como zero posteriormente recebe os valores do visor
	resultado = 0;
	resultado = document.getElementById('visor').value;

	// Visor é limpo para que na hora de retornar a conta, esteja com o campo limpo
	document.getElementById('visor').value = '';

	// Retorna no campo visor o resultado com uma função
	document.getElementById('visor').value = eval(resultado);
}