angular.module('ocurso').controller("TemplatesDisciplinasController", function ($scope, $stateParams) {

	$scope.semestreEscolhido = $stateParams.semestreEscolhido;
	$scope.subMenuSelecionado = $stateParams.subMenuSelecionado;

	var _primeiroSemestre = "Primeiro";
	var _segundoSemestre = "Segundo";
	var _terceiroSemestre = "Terceiro";
	var _quartoSemestre = "Quarto";
	var _quintoSemestre = "Quinto";
	var _sextoSemestre = "Sexto";
	var _setimoSemestre = "Setimo";
	var _oitavoSemestre = "Oitavo";
	var _nonoSemestre = "Nono";

	// array contendo os textos das disciplinas do primeiro semestre
	var arrayPrimeiroSemestre = [
		{
			titulo: 'ComputacaoSociedade',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'IntProgramacao',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'Calculo',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'FundMatematica',
			conteudo: 'TESTETESTETESTE'	
		},
	];

	// array contendo os textos das disciplinas do primeiro semestre
	var arraySegundoSemestre = [
		{
			titulo: 'Arquitetura',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'Algoritmos1',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'ProbEstatistica',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'AlgebraLinear',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'LogicaMat',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayTerceiroSemestre = [
		{
			titulo: 'Poo',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'Algoritmos2',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'LinguagensProg',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'EngenhariaSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'SistemasOp',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'PesquisaOp',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'LinguagensFormais',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayQuartoSemestre = [
		{
			titulo: 'AnaliseAlg',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'Ihc',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'BD',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'ProjetoSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'RedesComp',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'LinguaBrasileira',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'Compiladores',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayQuintoSemestre = [
		{
			titulo: 'disciplina1',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'disciplina2',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arraySextoSemestre = [
		{
			titulo: 'disciplina1',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'disciplina2',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arraySetimoSemestre = [
		{
			titulo: 'disciplina1',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'disciplina2',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayOitavoSemestre = [
		{
			titulo: 'disciplina1',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'disciplina2',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayNonoSemestre = [
		{
			titulo: 'disciplina1',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
	];

	//função para obter o template texto a ser mostrado em tela
	$scope.obterTemplate = function(){
		console.log($scope.semestreEscolhido);
		console.log($scope.subMenuSelecionado);
		return $scope.retornaTextoCorreto($scope.semestreEscolhido, $scope.subMenuSelecionado);
	}

	$scope.retornaTextoCorreto = function(semestreEscolhido, subMenuSelecionado){
		if(semestreEscolhido == _primeiroSemestre){
			return $scope.obtemTextoDoItemSelecionado(arrayPrimeiroSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _segundoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arraySegundoSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _terceiroSemestre){
			return $scope.obtemTextoDoItemSelecionado(arrayTerceiroSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _quartoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arrayQuartoSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _quintoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arrayQuintoSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _sextoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arraySextoSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _setimoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arraySetimoSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _oitavoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arrayOitavoSemestre, subMenuSelecionado);
		}else if(semestreEscolhido == _nonoSemestre){
			return $scope.obtemTextoDoItemSelecionado(arrayNonoSemestre, subMenuSelecionado);
		}
	}

	$scope.obtemTextoDoItemSelecionado = function(arrayDeConteudo, subMenuSelecionado){
		var conteudo = '';

		arrayDeConteudo.forEach(function(atual){
			if(subMenuSelecionado == atual.titulo){
				conteudo = atual.conteudo;
			}
		});
		return conteudo;
	}
});