angular.module('ocurso').controller('FluxogramaController', function($scope) {

	// matérias agrupadas por períodos
	$scope.fluxogramas1 = [
		{
			titulo : 'Computação e Sociedade',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Introdução a Programação',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Cálculo 1A',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas2 = [
		{
			titulo : 'Arquitetura de Computadores',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Algortimos e Estrutura de Dados 1',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Probabilidade e Estatística A',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Álgebra Linear',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Lógica Matemática',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas3 = [
		{
			titulo : 'Programação Orientada a Objetos',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Algortimos e Estrutura de Dados 2',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Linguagens e Paradigmas da Programação',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Engenharia de Software',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas4 = [
		{
			titulo : 'Análise e Projeto de Algoritmo',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Interação Humano-Computador',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Banco de Dados',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Projeto de software',
			possuiDependencia: true,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas5 = [
		{
			titulo : 'Contrução de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Modelagem de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Processos de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Engenharia de Sistemas',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas6 = [
		{
			titulo : 'Design de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Domínios de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Processos de Qualidade de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Gerência de Projeto de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas7 = [
		{
			titulo : 'Software Concorrente e Distribuído',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Experiência do Usuário de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Arquitetura de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Requisitos de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Governança e Gestão de Serviços de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas8 = [
		{
			titulo : 'Software para Computação Ubíqua',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Software para Persistência de Dados',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Padrões de Arquitetura de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
		{
			titulo : 'Testes de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	$scope.fluxogramas9 = [
		{
			titulo : 'Prática em Engenharia de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			link: './teste.html'
		},
	];

	// matérias optativas
	$scope.optativas1 = [
		{
			titulo : 'Sistemas Operacionais',
			possuiDependencia: true,
			dependenciaAcionada: false,
			array: 1,
			link: './teste.html'
		},
		{
			titulo : 'Pesquisa Operacional',
			possuiDependencia: true,
			dependenciaAcionada: false,
			array: 1,
			link: './teste.html'
		},
		{
			titulo : 'Linguagens Formais e Autônomas',
			possuiDependencia: true,
			dependenciaAcionada: false,
			array: 1,
			link: './teste.html'
		},
	];

	$scope.optativas2 = [
		{
			titulo : 'Redes de Computadores',
			possuiDependencia: false,
			dependenciaAcionada: false,
			array: 2,
			link: './teste.html'
		},
		{
			titulo : 'Introdução a Lingua Brasileira de Sinais',
			possuiDependencia: false,
			dependenciaAcionada: false,
			array: 2,
			link: './teste.html'
		},
		{
			titulo : 'Compiladores',
			possuiDependencia: true,
			dependenciaAcionada: false,
			array: 2,
			link: './teste.html'
		},
	];

	$scope.optativas3 = [
		{
			titulo : 'Sistemas Distribuídos',
			possuiDependencia: true,
			dependenciaAcionada: false,
			array: 3,
			link: './teste.html'
		},
		{
			titulo : 'Mercado e Economia de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			array: 3,
			link: './teste.html'
		},
		{
			titulo : 'Metodologia e Experimentação em Engenharia de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			array: 3,
			link: './teste.html'
		},
	];


	// dependências entre matérias
	$scope.dependencias1 = [
		{
			titulo : 'Sistemas Distribuídos',
			array : 1,
			optativa: true
		},
		{
			titulo : 'Programação Orientada a Objetos',
			array : 1,
			optativa: false
		}
	];

	$scope.dependencias2 = [
		{
			titulo : 'Sistemas Operacionais',
			array : 2,
			optativa: true
		},
		{
			titulo : 'Arquitetura de Computadores',
			array : 2,
			optativa: false
		}
	];

	$scope.dependencias3 = [
		{
			titulo : 'Pesquisa Operacional',
			array : 3,
			optativa: true
		},
		{
			titulo : 'Álgebra Linear',
			array : 3,
			optativa: false
		}
	];

	$scope.dependencias4 = [
		{
			titulo : 'Compiladores',
			array : 4,
			optativa: true
		},
		{
			titulo : 'Linguagens Formais e Autômatos',
			array : 4,
			optativa: true
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 4,
			optativa: false
		}
	];

	$scope.dependencias5 = [
		{
			titulo : 'Compiladores',
			array : 5,
			optativa: true
		},
		{
			titulo : 'Algortimos e Estrutura de Dados 2',
			array : 5,
			optativa: false
		}
	];

	$scope.dependencias6 = [
		{
			titulo : 'Banco de Dados',
			array : 6,
			optativa: false
		},
		{
			titulo : 'Lógica Matemática',
			array : 6,
			optativa: false
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 6,
			optativa: false
		}
	];

	$scope.dependencias7 = [
		{
			titulo : 'Projeto de Software',
			array : 7,
			optativa: false
		},
		{
			titulo : 'Engenharia de Software',
			array : 7,
			optativa: false

		}
	];

	$scope.dependencias8 = [
		{
			titulo : 'Projeto de Software',
			array : 8,
			optativa: false
		},
		{
			titulo : 'Programação Orientada a Objetos',
			array : 8,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 8,
			optativa: false
		}
	];

	$scope.dependencias9 = [
		{
			titulo : 'Arquitetura de Computadores',
			array : 9,
			optativa: false
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 9,
			optativa: false
		}
	];

	$scope.dependencias10 = [
		{
			titulo : 'Análise e Projeto de Algoritmo',
			array : 10,
			optativa: false
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 10,
			optativa: false
		}
	];

	$scope.dependencias11 = [
		{
			titulo : 'Linguagens e Paradigmas de Programação',
			array : 11,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 11,
			optativa: false
		}
	];

	$scope.dependencias12 = [
		{
			titulo : 'Análise e Projeto de Algoritmo',
			array : 12,
			optativa: false
		},
		{
			titulo : 'Algoritmo e Estrutura de Dados 2',
			array : 12,
			optativa: false
		},
		{
			titulo : 'Algoritmo e Estrutura de Dados 1',
			array : 12,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 12,
			optativa: false
		}
	];

	$scope.dependencias13 = [
		{
			titulo : 'Interação Humano-Computador',
			array : 13,
			optativa: false
		},
		{
			titulo : 'Algoritmo e Estrutura de Dados 1',
			array : 13,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 13,
			optativa: false
		}
	];

	$scope.dependencias14 = [
		{
			titulo : 'Interação Humano-Computador',
			array : 14,
			optativa: false
		},
		{
			titulo : 'Probabilidade e Estatística A',
			array : 14,
			optativa: false
		},
		{
			titulo : 'Cálculo 1A',
			array : 14,
			optativa: false
		}
	];

	// agrupa todas as matérias de todos os períodos
	$scope.fluxogramaCompleto = $scope.fluxogramas1
				.concat($scope.fluxogramas2)
				.concat($scope.fluxogramas3)
				.concat($scope.fluxogramas4)
				.concat($scope.fluxogramas5)
				.concat($scope.fluxogramas6)
				.concat($scope.fluxogramas7)
				.concat($scope.fluxogramas8)
				.concat($scope.fluxogramas9)
				.concat($scope.optativas1)
				.concat($scope.optativas2)
				.concat($scope.optativas3)

	// agrupa todas as matérias optativas de todos os períodos
	$scope.optativasCompleto = $scope.optativas1
								.concat($scope.optativas2)
								.concat($scope.optativas3)

	// agrupa todas as dependências
	var dependenciasCompleta = $scope.dependencias1
				.concat($scope.dependencias2)
				.concat($scope.dependencias3)
				.concat($scope.dependencias4)
				.concat($scope.dependencias5)
				.concat($scope.dependencias6)
				.concat($scope.dependencias7)
				.concat($scope.dependencias8)
				.concat($scope.dependencias9)
				.concat($scope.dependencias10)
				.concat($scope.dependencias11)
				.concat($scope.dependencias12)	
				.concat($scope.dependencias13)
				.concat($scope.dependencias14

					)	

	//atributos utilizados para a busca de dependências
	$scope.arrayDependencias = [];
	$scope.optativaAcionada = false;
	$scope.optativaAcionada2 = false;
	$scope.optativaAcionada3 = false;
	$scope.optativaSelecionada = false;

	// Obtém dependências das disciplinas
	$scope.obterDependencias = function(fluxograma){

		$scope.configuracaoInicial();

		if(fluxograma.possuiDependencia){

			dependenciasCompleta.forEach(function(atual) {
				if(fluxograma.titulo == atual.titulo) {
					$scope.arrayDependencias = $scope.arrayDependencias
											.concat($scope.obterArrayDaDependencia(atual.array));	
				}
			})
			$scope.verificaDependencia(fluxograma);
			if(!$scope.optativaSelecionada){
				$scope.ativarCollapse();
			}
		}else{
			$scope.ativarCollapse();
		}
	}

	// obtém as dependências das disciplinas optativas e previne o painel de fechar
	$scope.obterDependenciasOptativas = function(fluxograma, event){
		$scope.optativaSelecionada = true; // colocar verdadeiro antes de chamar a função de buscar dependências
		$scope.obterDependencias(fluxograma);
		$scope.desativaCollapse(event);
		$scope.optativaSelecionada = false; // reinicia a variavel com valor falso
	}

	//busca o array de dependencia
	$scope.obterArrayDaDependencia = function(numeroArray) {
		if(numeroArray == 1){
			return $scope.dependencias1;
		}else if(numeroArray == 2){
			return $scope.dependencias2;
		}else if(numeroArray == 3){
			return $scope.dependencias3;
		}else if(numeroArray == 4){
			return $scope.dependencias4;
		}else if(numeroArray == 5){
			return $scope.dependencias5;
		}else if(numeroArray == 6){
			return $scope.dependencias6;
		}else if(numeroArray == 7){
			return $scope.dependencias7;
		}else if(numeroArray == 8){
			return $scope.dependencias8;
		}else if(numeroArray == 9){
			return $scope.dependencias9;
		}else if(numeroArray == 10){
			return $scope.dependencias10;
		}else if(numeroArray == 11){
			return $scope.dependencias11;
		}else if(numeroArray == 12){
			return $scope.dependencias12;
		}else if(numeroArray == 13){
			return $scope.dependencias13;
		}else if(numeroArray == 14){
			return $scope.dependencias14;
		}
	}

	// verifica se elemnto escolhido possui dependências e marca suas dependências
	$scope.verificaDependencia = function(value) {
		$scope.fluxogramaCompleto.forEach(function(atualFluxograma){
			$scope.arrayDependencias.forEach(function(atual){
				if(atualFluxograma.titulo == atual.titulo){
					atualFluxograma.dependenciaAcionada = true;
					if(atual.optativa){
						$scope.buscaOptativas(atual);
					}
				}
			});
		});
	}

	// volta a configuração inicial da classe na view
	$scope.configuracaoInicial = function(){
		$scope.fluxogramaCompleto.forEach(function(atual){
			atual.dependenciaAcionada = false;
		})
		$scope.arrayDependencias = [];
		$scope.optativaAcionada = false;
		$scope.optativaAcionada2 = false;
		$scope.optativaAcionada3 = false;
	}

	// busca em qual array a optativa selecionada se encontra
	$scope.buscaOptativas = function(optativa){
		$scope.optativasCompleto.forEach(function(atual){
			if(optativa.titulo == atual.titulo){
				if(atual.array == 1){
					$scope.optativaAcionada = true;
				}else if(atual.array == 2){
					$scope.optativaAcionada2 = true;
				}else{
					$scope.optativaAcionada3 = true;
				}
			}
		})
	}

	// desativa o evento collapse ao selecionar uma das optativas
	$scope.desativaCollapse = function(e){
		e.stopPropagation();
	}

	//ativa o evento de collapse ao selecionar uma das não optativas
	$scope.ativarCollapse = function(){
		$('.collapse').collapse('hide');
	}

	$scope.blur = function(){
		console.log("acionado");
		$scope.fluxogramaCompleto.forEach(function(atual){
			atual.dependenciaAcionada = false;
		})
		$scope.optativaAcionada = false;
		$scope.optativaAcionada2 = false;
		$scope.optativaAcionada3 = false;
	}
});
