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
			conteudo: '<p><b>Computação e Sociedade</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Introdução a Programação</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Cálculo 1A</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Fundamentos de Matemática para Computação</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Arquitetura de Computadores</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Algoritmos e Estruturas de Dados 1</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Probabilidade e Estatística A</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Álgebra Linear</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Lógica Matemática</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Programação Orientada a Objetos</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Algoritmos e Estruturas de Dados 2</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Linguagens e Paradigmas da Programação</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Engenharia de Software</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Sistemas Operacionais</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Pesquisa Operacional</b></br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p>Linguagens Formais e Autômatos</br></br>\
						<b>Características</b></br><br>\
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
			conteudo: '<p><b>Análise e Projeto de Algoritmos</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Fundamentos de Matemática para Computação</br>\
						- Algoritmos e Estruturas de Dados 1</br>\
						- Algoritmos e Estruturas de Dados 2</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Análise e Projeto de Algoritmos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Medidas de complexidade, análise assintótica de limites de complexidade para algoritmos iterativos e recursivos, técnicas de prova de cotas inferiores.</br>\
						- Corretude de Algoritmos.</br>\
						- Exemplos de análise de algoritmos.</br>\
						- Técnicas de projeto de algoritmos: dividir para conquistar, programação dinâmica, algoritmos gulosos.</br>\
						- Introdução à NP-Completude.</p>'
		},
		{
			titulo: 'Ihc',
			conteudo: '<p><b>Interação Humano-Computador</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br>\
						- Cálculo 1A</br>\
						- Algoritmos e Estruturas de Dados 1</br>\
						- Probabilidade e Estatística A</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Interação Humano-Computador)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Aspectos gerais sobre interação humano-computador.</br>\
						- Características humanísticas e biológicas, envolvendo questões sobre genealogia, gênero, aspectos étnicos, raciais e culturais, direitos e aspectos políticos, deficiências, limitações e capacidades, dentre outros.</br>\
						- Ciclo da interação e principais problemas. Metas de usabilidade e experiência do usuário.</br>\
						- Fatores humanos em software interativo: teoria, princípios e regras básicas. Modelos conceituais e metáforas.</br>\
						- Estilos de interação. Elementos de interação (menus, formulários, manipulação direta e outros). Voz, linguagem natural, sons, páginas Web. Padrões para interface.</br>\
						- Localização e internacionalização.</br>\
						- Princípios de projeto de interfaces humano-computador. Métodos de projeto de interação. Projeto visual (cores, ícones, fontes e outros). Tempo de resposta e retroalimentação.</br>\
						- Dispositivos de interação.</br>\
						- Métodos de avaliação de interfaces: avaliação heurística, abordagens para testes realizados com apoio de usuários, técnicas de testes para páginas Web, entre outros.</br>\
						- Visão geral de ferramentas de desenvolvimento de interfaces humano-computador.</p>'
		},
		{
			titulo: 'BD',
			conteudo: '<p><b>Banco de Dados</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br></br>\
						<b>Carga Horária</b></br></br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 16h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br></br>\
						- Fundamentos de Matemática para Computação</br>\
						- Lógica Matemática</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Banco de Dados)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br></br>\
						- Conceitos básicos de Banco de Dados.</br>\
						- Modelo relacional.</br>\
						- Linguagens para Banco de Dados: álgebra relacional, cálculo relacional e SQL.</br>\
						- Modelo Entidade-Relacionamento e extensões.</br>\
						- Mapeamento ER-relacional.</br>\
						- Normalização.</p>'
		},
		{
			titulo: 'ProjetoSoftware',
			conteudo: '<p><b>Projeto de Software</b></br></br>\
						<b>Características</b></br></br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br></br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br>\
						- Programação Orientada a Objetos</br>\
						- Engenharia de Software</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Projeto de Software)</br>\
						Diretamente</br>\
						- Nenhum</br></br>\
						Indiretamente</br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br></br>\
						- Fundamentos de design de software.</br>\
						- Questões básicas de design de software: concorrência, controle e tratamento de eventos, persistência de dados, distribuição, tratamento de erro e exceção, tolerância a falhas, interação e apresentação, e segurança. Estrutura e arquitetura de software.</br>\
						- Projeto de interface de usuário.</br>\
						- Análise de qualidade e avaliação de design de software.</br>\
						- Notação de design de software.</br>\
						- Métodos e estratégias de design de software.</br>\
						- Ferramentas de design de software.</p>'
		},
		{
			titulo: 'RedesComp',
			conteudo: '<p><b>Redes de Computadores</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Redes de Computadores)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Fundamentos.</br>\
						- Arquitetura de Redes TCP/IP (Internet).</br>\
						- Camadas de Aplicação, Transporte, Rede, Enlace e Física.</br>\
						- Gerenciamento de Redes.</br>\
						- Redes Sem Fio e Mobilidade.</br>\
						- Estudo de Caso de Tópicos Emergentes em Redes.</p>'
		},
		{
			titulo: 'LinguaBrasileira',
			conteudo: '<p><b>Introdução a Língua Brasileira de Sinais</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Introdução à Língua Brasileira de Sinais)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Introdução às práticas de compreensão e produção em LIBRAS através do uso de estruturas e funções comunicativas elementares.</br>\
						- Concepções sobre a Língua de Sinais.</br>\
						- O surdo e a sociedade.</p>'
		},
		{
			titulo: 'Compiladores',
			conteudo: '<p><b>Compiladores</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Fundamentos de Matemática para Computação</br>\
						- Introdução à Programação</br>\
						- Algoritmos e Estruturas de Dados 1</br>\
						- Linguagens Formais e Autômatos</br>\
						- Algoritmos e Estruturas de Dados 2</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Compiladores)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- A estrutura de um compilador.</br>\
						- Análises léxica e sintática.</br>\
						- Definições dirigidas por sintaxe e análise semântica.</br>\
						- Organização da tabela de símbolos.</br>\
						- Representação intermediária do programa-fonte.</br>\
						- Geração do código-objeto da compilação.</br>\
						- Introdução à otimização do código-objeto.</br>\
						- Implementação de um compilador.</p>'
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayQuintoSemestre = [
		{
			titulo: 'ConstrucaoSoftware',
			conteudo: '<p><b>Construção de Software</b></br></br>\
						<b>Modelagem de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 80h</br>\
						- Carga horária total: 128h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Modelagem de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Visão geral (4h): construção (minimizar complexidade, antecipação de mudança, verificação, padrões), projeto de software (software design), qualidade de produto.</br>\
						- Planejamento (8h): linguagens de programação e processos de construção.</br>\
						- Gerência de construção (16h): controle de versão, inspeção e revisão de código.</br>\
						- Fundamentos de codificação (32h): estratégias recomendadas para criar código, variáveis, classes, interfaces, polimorfismo, rotinas, recursão, condições, laços, tratamento de exceção, reflexão, programação defensiva, padrão de codificação (leiaute e estilo), documentação, ferramentas de programação.</br>\
						- Projeto (design) detalhado e codificação (32h): noções de projeto detalhado, especificação de projeto, análise sintática (parsing), expressões regulares, parametrização (generics), closure, logging, configuração de software em tempo de execução. Internacionalização. Técnicas de construção baseadas em estado e tabelas.</br>\
						- Refatoração (8h).</br>\
						- Testes de unidade (16h).</br>\
						- Detecção e remoção de defeitos (debugging) (8h).</br>\
						- Integração (4h): integração contínua.</b></br><br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Explicar a construção de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.</br>\
						- Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).</br>\
						- Detalhar projeto (design) em conformidade com requisitos de software.</br>\
						- Depurar (debugging) código.</br>\
						- Criar testes de unidade básicos empregando estratégias recomendadas.</br>\
						- Localizar e reutilizar código (bibliotecas e frameworks).</br>\
						- Colaborar com a construção de código em equipe.</br>\
						- Avaliar a qualidade interna de código e, quando apropriado, aplicar estratégias recomendadas de refatoração.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.</br>\
						- Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina</p>'
		},
		{
			titulo: 'ModelagemSoftware',
			conteudo: '<p><b>Modelagem de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 16h</br>\
						- Horas Práticas: 48h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Modelagem de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Conceitos (4h): software, qualidade de software, requisitos de software, projeto de software.</br>\
						- Processo de projeto de software (4h).</br>\
						- Notações para registro de modelos orientados a objetos (16h).</br>\
						- Modelagem de software orientado a objetos (40h).</b></br><br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Criar modelos de projeto de software orientado a objetos</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar o que é software, qualidade de software, requisitos de software e a relação entre eles.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Empregar notações para registro de projeto de software orientado a objetos.</p>'
		},
		{
			titulo: 'ProcessosSoftware',
			conteudo: '<p><b>Modelagem de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Modelagem de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Visão geral (8h): processo, método e modelo.</br>\
						- Processos específicos de software: processos de implementação (12h), processos de suporte (12h) e processos de reutilização (2h).</br>\
						- Qualidade de Processo: modelos de qualidade de processos (12h), avaliação da qualidade do processo (12h) e abordagens de implementação de processo (6h).</br><br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Explicar processos de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.</br>\
						- Explicar o uso de modelos de qualidade de processo: implementação e avaliação.</br>\
						- Obter resultados de processo usando métodos e modelos.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Correlacionar os conceitos de processo de software, método de software, modelo de software, modelo de processo e modelo de qualidade de processo.</br>\
						- Explicar quais são os processos específicos de software: objetivo de cada processo e principais resultados.</p>'
		},
		{
			titulo: 'EngenhariaSistema',
			conteudo: '<p><b>Engenharia de Sistemas</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 64h</br>\
						- Horas Práticas: 00h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Engenharia de Sistemas)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Fundamentos de engenharia (16h): métodos empíricos e técnicas experimentais; análise estatística; medição; design; modelagem, prototipação e simulação; normas e padrões; análise de causa raiz.</br>\
						- Fundamentos de sistema (16h): taxonomias de sistema; sistemas de engenharia (sistemas produzidos por engenharia - engineered systems); sistemas intensivos em software (software-intensive systems); sistemas de sistemas; complexidade de sistemas; propriedades emergentes; princípios do pensamento sistêmico; representação de sistemas por modelos.</br>\
						- Engenharia de Sistemas (32h): abordagens e metodologias; partes interessadas (stakeholders) e suas necessidades; ciclo de vida de sistemas de engenharia (concepção, conceitos operacionais, design, validação de design, construção, validação de construção, implantação, sustentação e descontinuação); processos do ciclo de vida de sistemas (negociação, preparação para projeto organizacional, gestão técnica, processos técnicos); qualidade de processo.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Modelar o ciclo de vida de um sistema intensivo em software, considerando as implicações e perspectivas dos processos do ciclo de vida de sistemas.</br>\
						- Selecionar um modelo de ciclo de vida de software adequado ao modelo de ciclo de vida de engenharia de sistemas e integrar os dois modelos.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Definir o conceito do sistema proposto (propósito desejado, contexto operacional, partes interessadas e conceito de uso do sistema).</br>\
						- Desenvolver conceitos operacionais do sistema (ambientes operacionais, características priorizadas, atributos de qualidade, cenários operacionais, suposições, dependências, limitações e exclusões).</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</p>'
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arraySextoSemestre = [
		{
			titulo: 'DesignSoftware',
			conteudo: '<p><b>Design de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 80h</br>\
						- Carga horária total: 128h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Engenharia de Sistemas)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Conceitos (8h): design, software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado.</br>\
						- Contexto de projeto de software (4h).</br>\
						- Processos e artefatos de projeto de software (8h).</br>\
						- Notações de projeto de software (8h).</br>\
						- Princípios e fundamentos de projeto de software (16h): abstração, acoplamento, coesão, decomposição, encapsulamento, separar interface e implementação, suficiência, completitude, simplicidade e separation of concerns.</br>\
						- Aspectos de projeto de software (16h): concorrência, controle e tratamento de eventos, tratamento de exceção, persistência, distribuição, interação (apresentação).</br>\
						- Qualidade de projeto de software (8h): técnicas de avaliação, medidas, ferramentas.</br>\
						- Métodos e estratégias de projeto (4h).</br>\
						- Método para projeto orientado a objetos (4h).</br>\
						- Padrões de projeto orientado a objetos (16h).</br>\
						- Prática de projeto de software orientado a objetos (36h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Criar projeto de software a partir de um problema.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Aplicar princípios de projeto de software.</br>\
						- Empregar aspectos de projeto de software</br>\
						- Fazer uso de medidas de qualidade de projeto de software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Explicar o que é software, qualidade de software, requisitos de software, arquitetura de software, projeto detalhado, design, e a relação entre eles.</p>'
		},
		{
			titulo: 'DominioSoftware',
			conteudo: '<p><b>Domínio de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 16h</br>\
						- Horas Práticas: 48h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Engenharia de Sistemas)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Visão ampla de domínios de desenvolvimento (4h): sistemas, componentes e a relação entre eles.</br>\
						- Especificidades de alguns domínios de desenvolvimento (8h).</br>\
						- Especificidades de um domínio (12h): requisitos, projeto, construção.</br>\
						- Desenvolvimento de software em um domínio (ênfase na construção) (40h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).</br>\
						- Detalhar projeto (design) em conformidade com requisitos de software.</br>\
						- Colaborar com a construção de código em equipe.</br>\
						- Explicar domínios de desenvolvimento (categorias) e as especificidades correspondentes.</br>\
						- Explicar um domínio de software e as estratégias de desenvolvimento correspondentes.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar a construção de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.</br>\
						- Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.</br>\
						- Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendada.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica para essa disciplina.</p>'
		},
		{
			titulo: 'QualidadeSoftware',
			conteudo: '<p><b>Processos de Qualidade de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 16h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Engenharia de Sistemas)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Visão Geral de Qualidade de Software (4h): custos e impactos da qualidade de software, questões éticas e culturais da qualidade de software.</br>\
						- Processo de garantia da qualidade de software (10h): garantia do produto e garantia do processo.</br>\
						- Processo de Verificação e Validação de Software (36h): requisito, projeto (design), código, integração, documentação.</br>\
						- Processos de Revisão e Auditoria de Software (14h): revisões gerenciais e revisões técnicas.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar um processo da garantia da qualidade de software.</br>\
						- Usar um processo para a verificação e validação de software.</br>\
						- Usar um processo para a revisão e auditoria de software.</br>\
						- Documentar resultados dos processos de qualidade de software.</br>\
						- Identificar e utilizar ferramentas de apoio ao controle de qualidade de artefatos de software.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar a diferença e a relação entre a garantia do produto e a garantia do processo.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Explicar processos de qualidade de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.</br>\
						- Colaborar em uma equipe na execução de um processo de qualidade.</p>'
		},
		{
			titulo: 'GerenciaSoftware',
			conteudo: '<p><b>Gerência de Projeto de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Engenharia de Sistemas)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Projeto e gerência de projeto (4h): ciclo de vida de produto, serviço e projeto; partes interessadas (stakeholders); correlação entre projetos, operações e programas; gerência de portfólio de projetos; escritório de projetos (PMO).</br>\
						- Tipos de projeto de software (4h): aquisição, desenvolvimento, refatoração, descontinuação.</br>\
						- Tipos de ciclo de vida de projeto de software (4h): preditivo, iterativo, adaptativo; processos empíricos e processos definidos e sua relação com métodos ágeis e métodos planejados para gerência de projeto de software.</br>\
						- Modelos de qualidade de processo de gerência de projeto de software (4h).</br>\
						- Áreas de conhecimento da gerência de projetos aplicadas a projetos de software (48h): escopo, tempo, custo, qualidade, recursos humanos, comunicações, riscos, aquisições, integração e partes interessadas.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar normas, modelos e ferramentas de gerência de projeto para planejamento e acompanhamento de projeto de software.</br>\
						- Selecionar e implementar o tipo de ciclo de vida de software (ou paradigma de engenharia de software - cascata, espiral, iterativo, baseado em modelo de maturidade, etc.) de acordo com as características do contexto do projeto de software.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Selecionar e implementar o tipo de modelo de processo (dirigido por plano, incremental ou adaptativo) de acordo com as características do contexto do projeto de software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica para essa disciplina.</p>'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arraySetimoSemestre = [
		{
			titulo: 'SoftwareConcorrente',
			conteudo: '<p><b>Software Concorrente e Distribuído</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software Concorrente e Distribuído)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Qualidade de produto (4h): escalabilidade, tolerância a falhas, disponibilidade, desempenho.</br>\
						- Conceitos (4h): middleware, distribuição, paralelismo, concorrência, RESTful, web, internet das coisas, contêineres, troca de mensagens, micro-serviços, serviços web.</br>\
						- Métodos para construção de software distribuído e para construção de software concorrente (8h).</br>\
						- Concorrência (16h): paralelismo, aplicações IO-intensive e CPU-intensive, thread safe, memória compartilhada, Software Transactional Memory, atores, abordagens para explorar concorrência.</br>\
						- Distribuição (24h): projeto, implementação e uso de interface de programação, RESTful, serviços web e micro-serviços (microservices).</br>\
						- Troca de mensagens (messaging) (8h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).</br>\
						- Detalhar projeto (design) em conformidade com requisitos de software.</br>\
						- Localizar e reutilizar código (bibliotecas e frameworks).</br>\
						- Colaborar com a construção de código em equipe.</br>\
						- Avaliar a qualidade interna de código e, quando apropriado, aplicar estratégias recomendadas de refatoração.</br>\
						- Explicar conceitos de concorrência e distribuição.</br>\
						- Criar código que faz uso de concorrência, distribuição e ferramentas correlatas.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar a construção de software, concorrência/distribuição e a relação desses com a engenharia de software e de sistema./br>\
						- Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos./br>\
						- Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</p>'		
		},
		{
			titulo: 'ExperienciaUsuario',
			conteudo: '<p><b>Experiência do Usuário de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Experiência do Usu´´ario de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Qualidade em uso (4h): usabilidade, acessibilidade.</br>\
						- Design centrado no usuário (8h): diretrizes, pesquisa, personas, jornadas de usuário, modelagem (especificação) e ferramentas.</br>\
						- Projeto de interação (16h): diretrizes, criação, modelagem (especificação) e ferramentas.</br>\
						- Design de software e interfaces gráficas (8): padrões arquiteturais para design da camada de apresentação (MVC, MVP, MVVM e outros).</br>\
						- Implementação de interfaces (20h).</br>\
						- Modelos de validação de experiência (8h): modelos, métodos e técnicas para validação de experiência do usuário.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).</br>\
						- Detalhar projeto (design) em conformidade com requisitos de software.</br>\
						- Colaborar com a construção de código em equipe.</br>\
						- Auxiliar na criação de requisitos de usabilidade.</br>\
						- Criar e registrar projeto de interação que atende requisitos de usabilidade.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar a construção de software, experiência do usuário e a relação com a Engenharia de Software e a noção se sistema.</br>\
						- Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.</br>\
						- Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas</br>\
						- Usar ferramentas e bibliotecas para o desenvolvimento de código de interfaces.</br>\
						- Criar código em conformidade com o projeto de interação correspondente.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</p>'
		},
		{
			titulo: 'ArquiteturaSoftware',
			conteudo: '<p><b>Arquitetura de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Arquitetura de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Conceitos (4h): software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado.</br>\
						- Requisitos funcionais e requisitos de qualidade (8h): conceituação e identificação de requisitos relevantes para a arquitetura.</br>\
						- Documentação de arquitetura de software (8h).</br>\
						- Fundamentos de arquitetura de software (4h): importância, contexto, estilos.</br>\
						- Método de desenvolvimento de arquitetura de software (8h).</br>\
						- Técnicas para satisfazer requisitos de qualidade (16h).</br>\
						- Criação de arquiteturas de software (16h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Documentar arquitetura de software.</br>\
						- Criar arquitetura de software</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Compreender a documentação de arquitetura de software</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Explicar o que é software, qualidade de software, requisitos de software, arquitetura de software, projeto detalhado, e a relação entre eles.</p>'
		},
		{
			titulo: 'RequisitosSoftware',
			conteudo: '<p><b>Requisitos de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Requisitos de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.</br>\
						- Modelos e métodos da engenharia de requisitos (32).</br>\
						- Gerência de projetos de engenharia de requisitos (8).</br>\
						- Processo de projeto arquitetural (8h): relação com requisitos.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar um processo de requisitos de software.</br>\
						- Eliciar de requisitos de software.</br>\
						- Construir modelos conceituais de software.</br>\
						- Especificar requisitos de software.</br>\
						- Identificar e utilizar ferramentas de requisitos de software.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Verificar e validar requisitos de software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Explicar requisitos de software, a relação dessa área de conhecimento com as demais da engenharia de software, arquitetura de software em especial, e a relação com o conceito de sistema.</br>\
						- Colaborar em uma equipe na execução de um processo de requisitos.</p>'		
		},
		{
			titulo: 'GovernancaSoftware',
			conteudo: '<p><b>Governança e Gestão de Serviços de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 16h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Governança e Gestão de Serviços de Software)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Governança (8h): governança corporativa; governança de TI (GTI); governança de Software (GS); princípios da GS; conformidade (compliance); alinhamento dos serviços de software ao negócio da organização; normas, frameworks, padrões, modelos de qualidade e de maturidade de GS.</br>\
						- Abordagens para GS (8h): aplicação de abordagens de GS em um contexto organizacional. Objetivos de controle para GS; indicadores e avaliação de desempenho de software; direcionamento, avaliação e controle do uso de serviços de software para apoiar os objetivos de uma organização.</br>\
						- Planejamento e controle estratégico de software (8h): alinhamento entre objetivos organizacionais e objetivos relacionados a software; avaliação, direcionamento e monitoramento de processos de software; diagnóstico de maturidade de processos de software; alinhamento de políticas de software ao plano diretor de TI de uma organização. Gestão de riscos de software; riscos organizacionais; riscos relacionados à segurança física e lógica de software.</br>\
						- Governança de dados (8h): Segurança da informação em uma organização; Segurança de software.</br>\
						- Software como um serviço (SaaS) (8h): serviços de Software (SS); gestão de Serviços de Software (GSS); Estratégia organizacional para SS; Modelos, normas e padrões relacionados à GSS.</br>\
						- Ciclo de vida de SS (8h): planejamento; desenvolvimento; implantação e sustentação; Operação de SS e apoio (suporte) à operação de SS; Descontinuação de SS.</br>\
						- Manutenção de SS (8h): correção, adaptação e evolução de SS; gestão de incidentes e problemas em SS; controle de mudança e de configuração; controle de qualidade.</br>\
						- Gerência de processos de negócio (BPM – Business Process Management) aplicada à GSS (8h): representação de SS como processos de negócio; notação para modelagem de processos de negócio (BPMN); análise, validação e evolução de processos de negócio e de SS.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Planejar a estratégia de software para uma organização, considerando a pouca disponibilidade de informações de longo prazo, a escassez de recursos para implementação dessa estratégia e a necessidade de alinhamento entre a GS e a governança corporativa.</br>\
						- Planejar e implementar (projetar, desenvolver, implantar, monitorar, medir, controlar e sustentar) uma estratégia organizacional para GSS em conformidade com o plano estratégico da organização.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Controlar o uso atual e futuro de software, otimizando o seu valor agregado para o negócio da organização.</br>\
						- Modelar SS e processos de negócio, usando BPMN, em conformidade com os requisitos organizacionais dos processos e serviços.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</p>'	
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayOitavoSemestre = [
		{
			titulo: 'SoftwaresUbiquos',
			conteudo: '<p><b>Softwares para Sistemas Obíquos</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Sistemas de informação que fazem uso de dispositivos (ubíquos) (16h): smartphones, sensores, internet das coisas (IoT), stream analytics e aspectos de segurança (vulnerabilidades, criptografia, certificados digitais).</br>\
						- Definição de arquiteturas para soluções móveis (16): conectar serviços, possivelmente de grande volume, fluxo e em tempo real, com a necessidade de analisá-los.</br>\
						- Desenvolvimento de código para smartphone, sensor ou outro dispositivo capaz de alimentar/receber informações de sistema de informação (32h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Auxiliar na criação de modelo de ameaça.</br>\
						- Criar código que faz uso de recursos de segurança (criptografia de dados, assinatura e verificação de assinatura digital)..</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar a construção de software, dispositivos e a relação desses com a engenharia de software e de sistema.</br>\
						- Usar e configurar ferramentas para edição, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos de linha de comandos para busca e encadear comandos.</br>\
						- Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.</br>\
						- Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).</br>\
						- Detalhar projeto (design) em conformidade com requisitos de software.</br>\
						- Detalhar projeto de interação (design) em conformidade com requisitos de software.</br>\
						- Localizar e reutilizar código (bibliotecas e frameworks).</br>\
						- Colaborar com a construção de código em equipe.</br>\
						- Explicar a construção de software, segurança e a relação desses com a engenharia de software e de sistema.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Explicar a construção de software e a relação dessa área de conhecimento com as demais da engenharia de software.</p>'	
		},
		{
			titulo: 'SoftwarePersistencia',
			conteudo: '<p><b>Software para Persistência de Dados</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Visão geral de persistência (12h): arquivos em formato texto/binário. Serialização de objetos. Documentos XML. JSON. Bancos de dados relacionais. Bancos NoSql.</br>\
						- Modelagem e implementação de bancos de dados (28h).</br>\
						- Mapeamento entre OO e relacional (8h).</br>\
						- Refatoração de bancos de dados (8h)./br>\
						- Integração de bancos de dados (8h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Identificar e usar estratégia adequada de persistência de dados para um dado problema.</br>\
						- Refatorar (refactoring) bases de dados.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar a construção de software, persistência e a relação desses com a engenharia de software e de sistema.</br>\
						- Usar ferramentas para definição e manipulação de bancos de dados.</br>\
						- Criar código que cria, busca, atualiza e remove dados em bancos de dados.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa promotoria.</br></br>\
						<i>Observação:</i></br></br>\
						- Faltou exigências de construção (anteriores).</p>'	
		},
		{
			titulo: 'PadroesArqSoftware',
			conteudo: '<p><b>Padrões de Arquitetura de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Conceitos (12h): arquitetura de software e padrões de arquitetura (blackboard, microservices, invocação implícita, arquitetura orientada a serviços, multitier, arquitetura orienta a eventos, plugin, filtros e pipes, MVC.</br>\
						- Norma ISO/IEC/IEEE 42010:2011 (8h).</br>\
						- Análise (avaliação) de arquiteturas de software (12h).</br>\
						- Criação de arquiteturas de software (32h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Realizar análise de arquitetura de software.</br>\
						- Criar arquitetura de software que se beneficia de padrões de arquitetura.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Explicar padrões de arquitetura e ilustrar o uso.</br>\
						- Documentar arquitetura de software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Compreender a documentação de arquitetura de software.</p>'
		},
		{
			titulo: 'TestesSoftware',
			conteudo: '<p><b>Teste de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Processo de construção (8h): definições básicas, atividades e documentação.</br>\
						- Processo de Teste de Software (56): definições básicas, técnicas de teste, teste baseado em intuição e experiência do engenheiro de software, atividades do processo, documentação e ferramentas.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Usar um processo de teste de software.</br>\
						- Desenvolver planos de teste para o teste de unidade.</br>\
						- Aplicar teste exploratório no teste de sistema.</br>\
						- Realizar medições pertinentes a teste de software.</br>\
						- Identificar e utilizar ferramentas de teste de software.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Propor casos de teste segundo algum critério da técnica de teste funcional para o teste de unidade.</br>\
						- Propor casos de teste segundo algum critério da técnica de teste estrutural para o teste de unidade.</br>\
						- Construir código para automação do teste de software.</br>\
						- Documentar atividades do teste de software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Explicar o teste de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.</br>\
						- Construir código para automação do teste de software.</br>\
						- Compreender a documentação de arquitetura de software.</p>'
		},
		{
			titulo: 'SitemasDist',
			conteudo: '<p><b>Sistemas Distribuídos</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 32h</br>\
						- Horas Práticas: 32h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Introdução à Programação</br>\
						- Programação Orientada a Objetos</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Introdução a Sistemas Distribuídos.</br>\
						- Invocação Remota.</br>\
						- Objetos Distribuídos.</br>\
						- Arquiteturas Orientadas a Serviços e utilização de serviços Web.</br>\
						- Computação Móvel e Ubíqua. Estudo de Casos de Tópicos Emergentes em Sistemas Distribuídos.</p>'	
		},
		{
			titulo: 'Mercado',
			conteudo: '<p><b>Mercado e Economia de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 16h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Modelos de negócio para software (aluguel, serviço, código aberto). </br>\
						- Leis, normas, impostos e legislação brasileira para o mercado local e para a exportação de software. </br>\
						- Programas de incentivo à exportação e à produção de software.</br>\
						- Características e exigências do mercado interno e externo. </br>\
						- Identificação de oportunidades de inovação em software. </br>\
						- Planos de negócio de software para o mercado nacional e global</br>\
						- Engenharia Econômica. Fornecimento, demanda e produção. Lucro produzido por capital (interest). Análise custo-benefício. Análise breakeven. Retorno de investimento. Avaliação de alternativas. Economia aplicada ao desenvolvimento de software.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Explicar a relação entre decisões técnicas e o alinhamento com objetivos de negócio no qual software está inserido.</br>\
						- Explicar as principais leis e normas pertinentes à indústria de software no Brasil.</br>\
						- Elaborar plano de negócio para software inovador.</p>'
		},
		{
			titulo: 'MetodologiaES',
			conteudo: '<p><b>Metodologia e Experimentação em Engenharia de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 48h</br>\
						- Horas Práticas: 16h</br>\
						- Carga horária total: 64h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						Pré-Requisito para(disciplina(s) que só pode(m) ser cursada(s) após Software para Sistemas Ubiquos)</br>\
						Diretamente<br>\
						- Nenhum</br></br>\
						Indiretamente<br>\
						- Nenhum</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Metodologia Científica (16h): aplicação de metodologia científica em atividades de Engenharia de Software.</br>\
						- Fundamentos da Engenharia de Software Experimental (16h): contexto da experimentação na Engenharia de Software; principais tipos de experimentos aplicados à Engenharia de Software; estudos primários e secundários; revisão e mapeamento sistemático da literatura.</br>\
						- Realização de Experimentos em Engenharia de Software (32h).</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Realizar estudo secundário sistemático em Engenharia de Software.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Aplicar princípios científicos da Engenharia de Software Experimental na realização de experimentos com software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</p>'
		},
	];

		// array contendo os textos das disciplinas do primeiro semestre
	var arrayNonoSemestre = [
		{
			titulo: 'PraticaES',
			conteudo: '<p><b>Prática em Engenharia de Software</b></br></br>\
						<b>Características</b></br><br>\
						- Núcleo Comum</br>\
						- Disciplina ministrada pelo INF (Instituto de Informática)</br>\
						- Disciplina Obrigatória</br><br>\
						<b>Carga Horária</b></br><br>\
						- Horas Teóricas: 0h</br>\
						- Horas Práticas: 320h</br>\
						- Carga horária total: 320h<br></br>\
						<b>Pré-Requisitos</b></br><br>\
						- Nenhum</br></br>\
						<b>A Disciplina</b></br></br>\
						O egresso do BES passa pela vivência de dois tipos de experiências práticas diferentes em suas essências</br></br>\
						O primeiro grupo de experiências é composto pelas experiências promovidas nas atividades práticas realizadas de maneira contínua e integrada desde o início do curso, no contexto das diversas disciplinas teórico-práticas que compõem a grade curricular do BES. </br></br>\
						O segundo tipo de experiências é proporcionado pela disciplina “Prática em Engenharia de Software”, que envolve a participação integral do aluno em projetos reais de Engenharia de Software realizados em ambiente típico da indústria de software. É importante contrapor esse cenário de “projeto real”, onde todas as competências são exigidas, com o cenário das atividades práticas realizadas dentro do contexto de uma disciplina, normalmente limitado pelo conteúdo da própria disciplina. </br></br>\
						A Engenharia de Software compreende o uso de processos. Tais processos são claramente explicitados no projeto pedagógico do curso e podem ser classificados em dois grandes tipos: Processos Técnicos de Engenharia de Software e Processos de Gestão de Engenharia de Software. Além disso, o domínio de Tecnologias de Engenharia de Software, aplicadas tanto a processos técnicos quanto a processos de gestão de Engenharia de Software, é uma competência obrigatória para o profissional que trabalha com software. Assim, pode-se considerar que o Engenheiro de Software deve ser capaz de realizar atividades que envolvem três tipos de competências: técnicas, gerenciais e tecnológicas.</br></br>\
						A disciplina “Prática em Engenharia de Software” fornece o ambiente necessário para o amadurecimento das competências dos estudantes, pela aquisição de conhecimentos e desenvolvimento de habilidades e atitudes como profissional de Engenharia de Software. Esta prática acontece na fase final do currículo, na qual são reforçadas as habilidades, competências e conhecimentos adquiridos ao longo das disciplinas teórico-práticas do curso, em um ambiente que representa de forma realista os cenários que serão experimentados na vida profissional do Engenheiro de Software.</br></br>\
						O INF possui uma Fábrica de Software (FS/INF) [CUSUMANO]. O termo “Fábrica” indica um comprometimento de longo prazo e de esforços integrados, acima do nível de projetos individuais, para aprimorar todas as operações de obtenção de software [AAEN]. NA FS/INF, os projetos têm como objetivo atender as necessidades de usuários e patrocinadores reais, ou seja, visam a geração de produtos e/ou a prestação de serviços em Engenharia de Software para a sociedade. Dessa forma, os projetos precisam atender, por exemplo, requisitos de qualidade, de escopo e restrições de custo e prazo definidos pelas partes interessadas do projeto em questão. Além disso, a FS/INF também é responsável por garantir os requisitos definidos pelas normas técnicas aplicáveis de Engenharia de Software.</br></br>\
						Todas as atividades da Prática em Engenharia de Software previstas no BES são realizadas na FS/INF, sob a supervisão direta de docentes do Instituto de Informática. Portanto, a cada semestre letivo, a FS/INF recebe docentes e estudantes que atuarão nos seus projetos. Cabe ressaltar que, embora os projetos e as atividades da FS/INF não estejam limitados pelo calendário acadêmico, existe um compromisso entre a FS/INF e o curso de BES assegurando que o processo de Gestão do Portfólio da Fábrica selecionará os projetos e as atividades que apresentem condições adequadas ao exercício das práticas de Engenharia de Software pelos estudantes como descritas nesse PPC. Desta forma, o estudante terá a oportunidade concreta de integrar teoria e prática, envolvendo-se em situações-problema geradas pela experiência de campo e que exigem atividades de pesquisa, consultorias, debates e adoção de novas condutas. É também uma oportunidade para que o estudante seja avaliado quanto à sua atitude ética e profissional, quanto ao respeito às normas institucionais da FS/INF e quanto à sua relação com os demais envolvidos no projeto, incluindo usuários e patrocinadores.</br></br>\
						A “Prática em Engenharia de Software” é realizada pelo estudante preferencialmente após ter obtido aprovação nas demais disciplinas do BES. A disciplina é integralizada com 320 horas de atividades relacionadas a projetos da FS/INF, é ofertada a cada semestre letivo e os docentes atuam como preceptores. Neste sentido, o docente é o profissional responsável pela integração teoria-prática ao longo do projeto, ensinando, supervisionando, orientando e conduzindo o aluno na prática efetiva de sua futura profissão. </br></br>\
						Os estudantes são divididos em três grupos para melhor acompanhamento das atividades. Cada grupo, em um dado instante, realiza um tipo de atividade típica do exercício profissional: processos técnicos, processos de gestão ou domínio de tecnologias. Ao final da disciplina, é garantido que todos os grupos vivenciaram atividades dos três tipos. A avaliação do estudante é formativa, enfatizando o seu acompanhamento durante todo o período letivo, com o intuito de não apenas verificar se o estudante está alcançando os objetivos propostos, mas também informando seus erros e acertos, além de promover o estímulo necessário para continuar os estudos e o seu desenvolvimento. </br></br>\
						Concluindo, a disciplina “Prática em Engenharia de Software” favorece um ensino baseado na prática, com foco centrado na ética e na postura do profissional de Engenharia de Software perante os desafios que ocorrem quando se trabalha com software, que é um dos artefatos mais complexos que a humanidade produz. Quando o estudante atua em atividades práticas relevantes para a sua futura vida profissional, enfrentando os desafios reais de sua profissão ainda durante sua formação, sua compreensão se torna cada vez mais crítica e comprometida com a sociedade na qual se insere. Portanto, essa disciplina estimula e valoriza as dimensões ética e humanística na formação do Engenheiro de Software, desenvolvendo atitudes e valores orientados para a cidadania e para o desenvolvimento da sociedade.</br></br>\
						<b>Ementa(corresponde ao conteúdo que será abordado durante as aulas)</b></br><br>\
						- Aplicação do corpo de conhecimento da Engenharia de Software no contexto de projetos realizados em uma Fábrica de Software (320h): emprego de processos de Engenharia de Software em abrangência e profundidade; seleção e utilização de normas, métodos, técnicas e ferramentas de Engenharia de Software para atingir objetivos estabelecidos no projeto; integração e consolidação de conhecimentos e habilidades esperadas do profissional de Engenharia de Software; exercício de práticas e atitudes profissionais embasadas no código de ética e na postura profissional da Engenharia de Software; prática em processos técnicos de Engenharia de Software; prática em Gestão de Engenharia de Software; prática em Tecnologias de Engenharia de Software.</br></br>\
						<b>Condições Mínimas(qual o domínio do conteúdo abordado que o estudante deve ter, no final da disciplina, para que ele seja aprovado)</b></br><br>\
						<i>Seguindo instruções (passo-a-passo), o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</br></br>\
						<i>Sem que instruções sejam dadas, o estudante, com a assistência do professor, deve ser capaz de:</i></br></br>\
						- Realizar pacotes de trabalho, desenvolvendo produtos ou serviços dentro de um projeto na Fábrica de Software, aplicando as disciplinas que formam o corpo de conhecimento da Engenharia de Software.</br>\
						- Planejar, realizar e modificar de forma apropriada produtos e serviços pertinentes a processos organizacionais da Engenharia de Software, dentro do contexto da Fábrica de Software.</br>\
						- Atuar individualmente e nas equipes de trabalho segundo o código de ética e a postura profissional da Engenharia de Software.</br></br>\
						<i>Sem instruções e sem a assistência do professor, o estudante deve ser capaz de:</i></br></br>\
						- Esse nível não se aplica a essa disciplina.</p>'
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
