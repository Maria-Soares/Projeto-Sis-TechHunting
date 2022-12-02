var campoFiltro = document.querySelector("#filtrar-empresa"); // Pegando o id do input.


campoFiltro.addEventListener("input", function(){ // Caso ocorra um evento de input executar esta função.

	var empresas = document.querySelectorAll(".empresa"); // Pegando lista dos pacientes por meio da classe.

	if(this.value.length > 0) { //caso tenha input, no caso, digite texto.

		for(var i = 0; i < empresas.length; i++){
			var empresa = empresas[i]; // verificar por paciente. 

			var tdNome = empresa.querySelector(".info-nome"); // pegar classe para verificar o nome.
			var nome = tdNome.textContent; // pegar o texto da classe.

			var expressao = new RegExp(this.value, "i"); // variavel de comparacao do valor desta função.

			if (expressao.test(nome)){
				empresa.classList.remove("invisivel"); // se for igual remover a classe invisivel.
			} else{
				empresa.classList.add("invisivel") // se for diferente adicionar a classe invisivel.
			}
		}

	} else{ // se não tiver nada digitado, remover classe invisivel de todos. 

		for(var i = 0; i < empresas.length; i++){
			var empresa = empresas[i];
			empresa.classList.remove("invisivel");
		}
	}
});