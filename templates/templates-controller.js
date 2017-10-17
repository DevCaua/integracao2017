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
			conteudo: 'O curso de bacharelado em Engenharia de Software(BES) é oferecido pelo Instituto de Informática(INF) da Universidade Federal de Goiás(UFG). A primeira versão do Projeto Pedagógico do Curso(PPCi criada em 2008, a segunda versão, registrada nesse documento, é fruto de uma reflexão de dois anos do Núcleo Docente Estruturante (NDE) que reinventou o BES</br></br>\
						A busca pela qualidade é a motivação dessa segunda versão, que só pode ser adequadamente compreendida com o detalhamento da história da criação do curso e do cenário no qual está inserido(p.10), o que lembra Paulo Freire, segundo o qual "toda leitura de texto pressupõe uma rigorosa leitura do contexto".</br></br>\
						Não houve alteração relevante dos objetivos do curso, nem tampouco do perfil do egresso (p.15), contudo,ambos foram refinados.Os requisitos legais e normativos foram ampliados pelas diretrizes curriculares nacionais(que não existem quando a primeira versão foi produzida). Em particular, a estratégia para atender a educação das relações etnico-raciais e para o ensino de história e cultura afro-brasileira foi revista em sua totalidade.</br></br>\
						A estrutura curricular sofreu mudanças significativas.Em particular, o fluxo sugerido, nos quatro primeiros períodos, inclui apenas disciplinas de formação básica em computação.A disciplina "Prática em Engenharia de Software" é o elemento intetegrador do curso, com carga horária de 320 horas. Em particular, as disciplinas específicas da Engenharia de Software são acompanhadas em uma seção adicional, "condições mínimas", que estabelece competências a serem demonstradas/adiquiridas pelo estudante em cada uma delas.</br></br>\
						A busca por um curso de Engenharia de Software melhor é uma atribuição contínua do NDE estabelecida nesse PPC por meio de princípios. Esse compromisso é oportuno para estabelecer claramente a responsabilidade pela gestão do presente PPC pelo NDE, sem o qual esse texto resume-se a um registro de intenções.'	
		},
		{
			titulo: 'Identificacao',
			conteudo: '<table class="tabela-identificacao">\
					  <tr>\
					    <th>Nome do curso</th>\
					    <th>Engenharia de Software</th>\
					  </tr>\
					  <tr>\
					    <th>Grau acadêmico</th>\
					    <th>Bacharelado</th>\
					  </tr>\
					  <tr>\
					    <th>Tipo do egresso</th>\
					    <th>Bacharel(a) em Engenharia de Software</th>\
					  </tr>\
					  <tr>\
					    <th>Área do conhecimento</th>\
					    <th>\
					        Ciências Exatas e da Terra</br>\
					        Ciências da Computação  </br>\
					        Metodologia e Técnicas da Computação  </br>\
					        Engenharia de Software  \
					    </th>\
					 </tr>\
					  <tr>\
					    <th>Modalidade</th>\
					    <th>Presencial</th>\
					  </tr>\
					 <tr>\
					    <th>Local de Oferta</th>\
					    <th>\
					      Instituto de Informática(INF) </br>\
					      Alameda Palmeiras, Quadra D, Câmpus Samambaia <br>\
					      Goiânia(GO), CEP 74690-900\
					    </th>\
					  </tr>\
					  <tr>\
					    <th>Reconhecimento</th>\
					    <th>\
					      Portaria N819 de 29 de Outubro de 2015, </br>\
					      Número de registro no e-MEC: 201307356\
					    </th>\
					  </tr>\
					  <tr>\
					    <th>Responsável</th>\
					    <th>Instituto de Informática(INF)</th>\
					  </tr>\
					 <tr>\
					    <th>Unidades executoras</th>\
					    <th>\
					      Instituto de Informática(INF) </br>\
					      Instituto de Matemática e Estatística(IME) </br>\
					      Faculdade de Letras(Letras)\
					    </th>\
					  </tr>\
					  <tr>\
					    <th>Número de vagas</th>\
					    <th>40 vagas anuais</th>\
					  </tr>\
					  <tr>\
					    <th>Carga Horária</th>\
					    <th>3200</th>\
					  </tr>\
					   <tr>\
					    <th>Duração do curso em semestres</th>\
					    <th>9 semestres</th>\
					  </tr>\
					   <tr>\
					    <th>Turno de Funcionamento</th>\
					    <th>Noturno</th>\
					  </tr>\
					   <tr>\
					    <th>Forma de ingresso</th>\
					    <th>Sistema de Seleção Unificada(SISU). Em caso de existência de vagas é possível o ingresso através : (a) Transferência de outras instituições de ensino superior; (b) portadores de diploma e (c) reingresso. Essas opções dependem de processo seletivo específico da ufg</th>\
					  </tr>\
					</table>'	
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
