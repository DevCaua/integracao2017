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
			conteudo: '<p><b>Características</b></br><br>\
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
						- Incubadoras de empresas.</p>'
		},
		{
			titulo: 'IntProgramacao',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 80h</br>\
						- Carga horária total: 128h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Introdução à Programação)</br>\
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
						- Domínio de uma linguagem de programação: sintaxe e semântica; interpretação e compilação de programas; ambiente de desenvolvimento de programas; estilo de codificação; documentação de código; técnicas de depuração e técnicas de profiling; desenvolvimento e uso de bibliotecas.</p>'
		},
		{
			titulo: 'Calculo',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo IME (Instituto de Matemática e Estatística)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 96h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 96h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Cálculo 1A)</br>\
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
						- Aplicações.</p>'	
		},
		{
			titulo: 'FundMatematica',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Fundamentos de Matemática para Computação)</br>\
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
						- Representações numéricas e Mudança de base numérica.</p>'	
		},
	];

	// array contendo os textos das disciplinas do primeiro semestre
	var arraySegundoSemestre = [
		{
			titulo: 'Arquitetura',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 16h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Fundamentos de Matemática para Computação</br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Arquitetura de Computadores)</br>\
						Diretamente<br>\
						- Sistemas Operacionais</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Visão geral dos computadores modernos.<br>\
						- Evolução da arquitetura dos computadores.<br>\
						- Memória e representação de dados e instruções.<br>\
						- Processador, ciclo de instrução, formato e endereçamento.<br>\
						- Noções básicas de programação em linguagem de montagem.<br>\
						- Dispositivos de entrada e saída.<br>\
						- Sistemas de interconexão (barramentos).<br>\
						- Interfaceamento e técnicas de entrada e saída.<br>\
						- Hierarquia de memória.<br>\
						- Introdução a arquiteturas paralelas e métricas de desempenho.</p>'	
		},
		{
			titulo: 'Algoritmos1',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Algoritmos e Estruturas de Dados 1)</br>\
						Diretamente<br>\
						- Algoritmos e Estruturas de Dados 2</br>\
						- Interação Humano-Computador</br></br>\
						Indiretamente<br>\
						- Análise e Projeto de Algoritmos</br>\
						- Compiladores</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Noções de complexidade de algoritmos (notações de complexidade).<br>\
						- Algoritmos de pesquisa: pesquisa sequencial e binária.<br>\
						- Algoritmos de ordenação.<br>\
						- Tipos abstratos de dados.<br>\
						- Estruturas de dados utilizando vetores: pilhas, filas, listas (simples e circulares).<br>\
						- Estruturas de dados com alocação dinâmica de memória: pilhas, filas, listas (simplesmente encadeadas, duplamente encadeadas e circulares).</p>'	
		},
		{
			titulo: 'ProbEstatistica',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo IME (Instituto de Matemática e Estatística)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Cálculo 1A</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Probabilidade Estatística A)</br>\
						Diretamente<br>\
						- Interação Humano-Computador</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Estatística descritiva. Noções sobre amostragem.<br>\
						- Introdução à teoria de conjuntos.<br>\
						- Introdução à teoria de probabilidade: espaço amostral, eventos, frequência relativa, fundamentos de probabilidade, probabilidade condicional, eventos independentes e teorema de Bayes.<br>\
						- Variáveis aleatórias: conceitos básicos, esperança e variância.<br>\
						- Distribuições discretas de probabilidade: uniforme, binomial e Poisson.<br>\
						- Distribuições contínuas de probabilidade: uniforme, exponencial, normal e t-Student.<br>\
						- Estimação pontual e intervalar para uma população: média e proporção<br>\
						- Teste de hipóteses para uma população: média e proporção.<br>\
						- Correlação linear e regressão linear simples.</p>'
		},
		{
			titulo: 'AlgebraLinear',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo IME (Instituto de Matemática e Estatística)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Cálculo 1A</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Álgebra Linear)</br>\
						Diretamente<br>\
						- Pesquisa Operacional</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Sistemas lineares e matrizes.</br>\
						- Espaços vetoriais.</br>\
						- Transformações lineares.</br>\
						- Autovalores e autovetores.</br>\
						- Espaços com produto interno.</p>'	
		},
		{
			titulo: 'LogicaMat',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo IME (Instituto de Matemática e Estatística)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Fundamentos de Matemática para Computação</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Lógica Matemática)</br>\
						Diretamente<br>\
						- Banco de Dados</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Noções básicas: linguagem natural vs linguagens formais; verdade, validade, satisfatibilidade; lógica proposicional (sintaxe e semântica, propriedades e relações semânticas, consequência lógica, simplificação de fórmulas); lógica de primeira ordem (sintaxe e semântica, propriedades e relações semânticas, formas normais);</br>\
						- Métodos de validação: métodos diretos de prova; métodos de prova por contradição; indução estrutural.</br>\
						- Linguagem para experimentação.</br>\
						- Aplicações básicas.</p>'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayTerceiroSemestre = [
		{
			titulo: 'Poo',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Programação Orientada a Objetos)</br>\
						Diretamente<br>\
						- Projeto de Software/br>\
						- Sistemas Distribuídos</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Abstração e tipos abstratos de dados.</br>\
						- Classes, métodos, encapsulamento, interface. Mensagens, instâncias e inicialização. Herança e composição. Polimorfismo.</br>\
						- Uso de uma linguagem orientada a objetos.</br>\
						- Noções de UML.</br>\
						- Noções de padrões de projeto orientado a objetos.</p>'
		},
		{
			titulo: 'Algoritmos2',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br>\
						- Algoritmos e Estruturas de Dados 1</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Algoritmos e Estruturas de Dados 2)</br>\
						Diretamente<br>\
						- Análise e Projeto de Algoritmos</br>\
						- Compiladores</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Árvores: formas de representação, recursão em árvores, árvores binárias, árvores binárias de busca, árvores balanceadas (AVL e rubro-negras).</br>\
						- Filas de prioridades. Heaps, Heapsort. Hashing: tipos de funções de hashing; tratamento de colisões.</br>\
						- Definições de Grafos.</br>\
						- Estruturas de Dados para representação de grafos.</br>\
						- Algoritmos básicos em grafos.</p>'	
		},
		{
			titulo: 'LinguagensProg',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Linguagens e Paradigmas de Programação)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Estudo dos conceitos de linguagens de programação e dos paradigmas de programação: procedural, funcional, lógico, orientado a objeto e script.</br>\
						- Reflexão sobre as características desejáveis em uma linguagem de programação e os critérios de seleção de linguagens de acordo com as especificidades dos domínios de aplicação.</br>\
						- Uso de uma linguagem orientada a objetos.</br>\
						- Descrição de sintaxe e semântica.</br>\
						- Estudo sobre tipos de dados, estruturas de controle, ambientes de execução, variáveis, expressões e subprogramas em linguagens de programação.</p>'
		},
		{
			titulo: 'EngenhariaSoftware',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Engenharia de Software)</br>\
						Diretamente<br>\
						- Projeto de Software</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Requisitos de software.</br>\
						- Projeto (design) de software.</br>\
						- Construção de software.</br>\
						- Teste de software.</br>\
						- Manutenção de software.</br>\
						- Gerência de configuração de software.</br>\
						- Gerência de projeto de software.</br>\
						- Processo de engenharia de software.</br>\
						- Modelos e métodos de engenharia de software.</br>\
						- Qualidade de software.</br>\
						- Prática profissional de engenharia de software.</br>\
						- Economia para engenharia de software.</br>\
						- Fundamentos de engenharia.</p>'
		},
		{
			titulo: 'SistemasOp',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Fundamentos de Matemática para Computação Arquitetura de Computadores</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Sistemas Operacionais)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Conceitos de Hardware e Software.</br>\
						- Tipos de Sistemas Operacionais. Organização da Estrutura Interna do Sistema Operacional. Gerência de Processos. Gerência do Processador. Gerência de Memória. Gerência de Dispositivos de Entrada e Saída. Sistemas de Arquivos.</br>\
						- Estudos de casos de sistemas operacionais atuais.</p>'
		},
		{
			titulo: 'PesquisaOp',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Álgebra Linear</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Pesquisa Operacional)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Modelagem.</br>\
						- Problema de Programação Linear (PL). Resolução gráfica de PL.</br>\
						- Algoritmo Simplex. Dualidade. Algoritmo Simplex-Dual.</br>\
						- Pós-otimização e Análise de Sensibilidade.</p>'
		},
		{
			titulo: 'LinguagensFormais',
			conteudo: '<p><b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Fundamentos de Matemática para Computação</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Linguagens Formais e Autômatos)</br>\
						Diretamente<br>\
						- Compiladores</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Conceitos básicos de linguagens.</br>\
						- Mecanismos geradores (gramáticas) e reconhecedores (determinísticos e não determinísticos) de linguagens regulares, livres de contexto e sensíveis ao contexto; relação entre estas classes de linguagens e suas principais propriedades.</br>\
						- Hierarquia de Chomsky.</p>'
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