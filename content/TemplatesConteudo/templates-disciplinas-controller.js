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
			conteudo: '<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 32h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Computação e Sociedade)</br>\
						- Nenhum</br><br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- História da computação.<br>\
						- Estudo e análise de casos de aplicação de computadores na sociedade e para o meio ambiente.<br>\
						- Subáreas da computação e áreas interdisciplinares.<br>\
						- Importância e desafios da computação no Brasil e no mundo.<br>\
						- Cursos de computação e aspectos profissionais: tipos de cursos, perfis profissionais, demanda do mercado, organizações e associações na área, regulamentação da profissão.<br>\
						- Leis e normas relacionadas à Informática.<br>\
						- Questões ambientais, raciais, de saúde e de inclusão digital relacionadas à Computação.<br>\
						- Ética na Computação.<br>\
						- Empresas de tecnologia da informação.<br>\
						- Incubadoras de empresas.'
		},
		{
			titulo: 'IntProgramacao',
			conteudo: '<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 80h</br>\
						- Carga horária total: 128h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Computação e Sociedade)</br>\
						Diretamente<br>\
						- Programação Orientada a Objetos</br>\
						- Linguagens e Paradigmas de Programação</br>\
						- Algoritmos e Estruturas de Dados 1</br></br>\
						Indiretamente<br>\
						- Projeto de Software</br>\
						- Algoritmos e Estruturas de Dados 2</br>\
						- Análise e Projeto de Algoritmos</br>\
						- Interação Humano-Computador</br>\
						- Compiladores</br>\
						- Sistemas Distribuídos</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Introdução a algoritmos.<br>\
						- Conceitos básicos de programas: constantes; tipos de dados primitivos; variáveis; atribuição; entrada e saída de dados; expressões; estruturas de decisão; estruturas de repetição.<br>\
						- Ponteiro.<br>\
						- Estruturas de dados homogêneas e heterogêneas: vetores, matrizes, cadeias de caracteres, registros. Subprogramas: funções; passagens de parâmetros por valor e por referência, recursividade.<br>\
						- Manipulação de arquivos: abertura, fechamento, leitura e gravação.<br>\
						- Tipos de acesso a arquivos: sequencial e indexado.<br>\
						- Tipos de arquivos (texto e binário).<br>\
						- Transcrição de algoritmos para uma linguagem de programação.<br>\
						- Domínio de uma linguagem de programação: sintaxe e semântica; interpretação e compilação de programas; ambiente de desenvolvimento de programas; estilo de codificação; documentação de código; técnicas de depuração e técnicas de profiling; desenvolvimento e uso de bibliotecas.'
		},
		{
			titulo: 'Calculo',
			conteudo: '<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo IME (Instituto de Matemática e Estatística)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 96h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 96h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Computação e Sociedade)</br>\
						Diretamente<br>\
						- Probabilidade e Estatística A</br></br>\
						Indiretamente<br>\
						- Interação Humano-Computador</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Números reais. Funções reais de uma variável real e suas inversas.<br>\
						- Noções sobre cônicas.<br>\
						- Limite e continuidade.<br>\
						- Derivadas e aplicações.<br>\
						- Polinômio de Taylor.<br>\
						- Integrais. Técnicas de Integração. Integrais impróprias.<br>\
						- Aplicações.'	
		},
		{
			titulo: 'FundMatematica',
			conteudo: '<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Computação e Sociedade)</br>\
						Diretamente<br>\
						- Lógica Matemática</br>\
						- Arquitetura de Computadores</br>\
						- Análise e Projeto de Algoritmos</br>\
						- Linguagens Formais e Autômatos</br></br>\
						Indiretamente<br>\
						- Banco de Dados</br>\
						- Sistemas Operacionais</br>\
						- Compiladores</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Noções de lógica.<br>\
						- Introdução a demonstrações.<br>\
						- Indução matemática, Recursividade e Relações de Recorrência, Conjuntos e Combinatória.<br>\
						- Séries e sequências.<br>\
						- Relações e Funções.<br>\
						- Representações numéricas e Mudança de base numérica.'	
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
			titulo: 'ConstrucaoSoftware',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'ModelagemSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'ProcessosSoftware',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'EngenhariaSistema',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arraySextoSemestre = [
		{
			titulo: 'DesignSoftware',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'DominioSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'QualidadeSoftware',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'GerenciaSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arraySetimoSemestre = [
		{
			titulo: 'SoftwareConcorrente',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'ExperienciaUsuario',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'ArquiteturaSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'RequisitosSoftware',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'GovernancaSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayOitavoSemestre = [
		{
			titulo: 'SoftwaresUbiquos',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'SoftwarePersistencia',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'PadroesArqSoftware',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'TestesSoftware',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'SitemasDist',
			conteudo: 'O Bacharelado em Engenharia de Software foi criado em 2009, sendo a UFG a universidade brasileira pioneira. O curso é focado na graduação de um profissional capaz de especificar software; projetar (design) software (inclui arquitetura de software); construir (programar) software com qualidade; realizar atividades de manutenção de software, além de trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, predominantesmente no turno noturno.'	
		},
		{
			titulo: 'Mercado',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'MetodologiaES',
			conteudo: 'TESTETESTETESTE'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayNonoSemestre = [
		{
			titulo: 'PraticaES',
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