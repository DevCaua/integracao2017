angular.module('ocurso').controller("TemplatesController", function ($scope, $stateParams) {

	$scope.menuEscolhido = $stateParams.menuEscolhido;
	$scope.subMenuSelecionado = $stateParams.subMenuSelecionado;

	//variáveis de verificação da página em que o usuário está
	var _curso = "Curso";
	var _disciplinas = "Disciplinas";
	var _estruturaCurricular = "EC";
	var _informacoes = "Informacoes";

	// array contendo os textos que serão mostrados na tela do curso
	var arrayCurso = [
		{
			titulo: 'Apresentacao',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a \
            UFG a universidade brasileira pioneira. O curso é focado na graduação \
            de um profissional capaz de especificar software; projetar (design) \
            software (inclui arquitetura de software); construir (programar) software \
            com qualidade; realizar atividades de manutenção de software, além de \
            trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, \
            predominantemente no turno noturno'	
		},
		{
			titulo: 'Contexto',
			conteudo: 'testeObjetivos'	
		},
		{
			titulo: 'Motivacao',
			conteudo: 'teste'	
		},
		{
			titulo: 'Objetivos',
			conteudo: 'teste'	
		},
		{
			titulo: 'Principios',
			conteudo: 'teste'	
		},
		{
			titulo: 'Expectativas',
			conteudo: 'teste'	
		},
	];

	// array contendo os textos que serão mostrados na tela de disciplinas
	var arrayDisciplinas = [
		{
			titulo: 'disciplina1',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'disciplina2',
			conteudo: 'TESTETESTETESTE'	
		},
	];

	// array contendo os textos que serão mostrados na tela de Estrutura Curricular
	var arrayEstruturaCurricular = [
		{
			titulo: 'MatrizCurricular',
			conteudo: 'teste'	
		},
		{
			titulo: 'FluxoSugerido',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'CargaHoraria',
			conteudo: 'TESTETESTETESTE'	
		},
	];

	// array contendo os textos que serão mostrados na tela de infomações
	var arrayInformacoes = [
		{
			titulo: 'Estagio',
			conteudo: 'teste'	
		},
		{
			titulo: 'NucleoLivre',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'AtividadesComplementares',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'INF',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'PCC',
			conteudo: 'TESTETESTETESTE'	
		},
	];

	//função para obter o template texto a ser mostrado em tela
	$scope.obterTemplate = function(){
		console.log($scope.menuEscolhido);
		console.log($scope.subMenuSelecionado);
		return $scope.retornaTextoCorreto($scope.menuEscolhido, $scope.subMenuSelecionado);
	}

	$scope.retornaTextoCorreto = function(menuEscolhido, subMenuSelecionado){
		if(menuEscolhido == _curso){
			return $scope.obtemTextoDoItemSelecionado(arrayCurso, subMenuSelecionado);
		}else if(menuEscolhido == _estruturaCurricular){
			return $scope.obtemTextoDoItemSelecionado(arrayEstruturaCurricular, subMenuSelecionado);
		}else if(menuEscolhido == _disciplinas){
			return $scope.obtemTextoDoItemSelecionado(arrayDisciplinas, subMenuSelecionado);
		}else if(menuEscolhido == _informacoes){
			return $scope.obtemTextoDoItemSelecionado(arrayInformacoes, subMenuSelecionado);
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
