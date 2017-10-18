angular.module('ocurso').controller("TemplatesController", function ($scope, $stateParams) {

	$scope.menuEscolhido = $stateParams.menuEscolhido;
	$scope.subMenuSelecionado = $stateParams.subMenuSelecionado;

	//variáveis de verificação da página em que o usuário está
	var _curso = "Curso";
	var _estruturaCurricular = "EC";
	var _informacoes = "Informacoes";

	// array contendo os textos que serão mostrados na tela do curso
	var arrayCurso = [
		{
			titulo: 'Apresentacao',
			conteudo: '<p>O curso de bacharelado em Engenharia de Software(BES) é oferecido pelo Instituto de Informática(INF) da Universidade Federal de Goiás(UFG). A primeira versão do Projeto Pedagógico do Curso(PPCi criada em 2008, a segunda versão, registrada nesse documento, é fruto de uma reflexão de dois anos do Núcleo Docente Estruturante (NDE) que reinventou o BES</br></br>\
						A busca pela qualidade é a motivação dessa segunda versão, que só pode ser adequadamente compreendida com o detalhamento da história da criação do curso e do cenário no qual está inserido(p.10), o que lembra Paulo Freire, segundo o qual "toda leitura de texto pressupõe uma rigorosa leitura do contexto".</br></br>\
						Não houve alteração relevante dos objetivos do curso, nem tampouco do perfil do egresso (p.15), contudo,ambos foram refinados.Os requisitos legais e normativos foram ampliados pelas diretrizes curriculares nacionais(que não existem quando a primeira versão foi produzida). Em particular, a estratégia para atender a educação das relações etnico-raciais e para o ensino de história e cultura afro-brasileira foi revista em sua totalidade.</br></br>\
						A estrutura curricular sofreu mudanças significativas.Em particular, o fluxo sugerido, nos quatro primeiros períodos, inclui apenas disciplinas de formação básica em computação.A disciplina "Prática em Engenharia de Software" é o elemento intetegrador do curso, com carga horária de 320 horas. Em particular, as disciplinas específicas da Engenharia de Software são acompanhadas em uma seção adicional, "condições mínimas", que estabelece competências a serem demonstradas/adiquiridas pelo estudante em cada uma delas.</br></br>\
						A busca por um curso de Engenharia de Software melhor é uma atribuição contínua do NDE estabelecida nesse PPC por meio de princípios. Esse compromisso é oportuno para estabelecer claramente a responsabilidade pela gestão do presente PPC pelo NDE, sem o qual esse texto resume-se a um registro de intenções.</p>'	
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
			conteudo: '<p>O Bacharelado em Engenharia de Software (BES) existe e se mantém em um contexto no qual se destaca a aptidão do Instituto de Informática, a carência de mão de obra apta a desenvolver softwares de qualidade e a mportância local do curso, detalhados nas seções seguintes.</br></br>\
						<b>Da aptidão do Instituto de Informática</b></br></br>\
						O Instituto de Informática da UFG possui sólida experiência no ensino superior em Computação, iniciada em 1983, com a primeira turma do curso de Bacharelado em Ciências da Computação (CC). A partir de 2009 foram criados mais dois cursos de graduação: o Bacharelado em Engenharia de Software (BES) e o Bacharelado em Sistemas de Informação (SI). O INF também é responsável por dezenas de disciplinas da área de Computação ministradas para diversos cursos de graduação de várias unidades de ensino da UFG.</br>\
						Na pós-graduação lato sensu o INF já ofertou dezenas de edições dos mais variados cursos de especialização na área de Computação. Na pós-graduação stricto sensu o INF oferece, desde 2001, o Mestrado em Ciência da Computação. A partir de 2010 o INF passou a oferecer o Doutorado em Ciência da Computação.</br>\
						Essa históra perfaz mais de três décadas de ensino, com milhares de egressos, alguns deles ocupando cargos de destaque em universidades, empresas e organizações tanto no Brasil quanto no exterior.</br>\
						O INF construiu, ao longo desse período, um consistente envolvimento com empresas e organizações de Tecnologia da Informação e Comunicação (TIC). O Apoema [APOEMA] é o órgão do INF responsável pela cooperação e interação com organizações externas, com foco em soluções inovadoras</br>\
						Um número significativo de projetos de Pesquisa e Desenvolvimento (P&D) já foi realizado pelo INF em parceria com organizações locais, e alguns com empresas multinacionais (como Dell e HP, por exemplo). O INF também já participou de vários projetos de inovação tecnológica financiados pela Fundação de Apoio à Pesquisa do Estado de Goiás (FAPEG).</br></br>\
						<b>Da carência de mão de obra</b></br></br>\
						Um dos motivos para a existência do BES é a necessidade de formar recursos humanos em Engenharia de Software. A demanda por profissionais especializados na produção de software não existe só no Estado de Goiás, nem tampouco apenas no Brasil, mas em todo o mundo.</br>\
						Apesar da demanda, na ocasião da criação do BES, não era conhecido outro curso com a mesma denominação ou propósito no Brasil. A tradição do INF na socialização da Computação, juntamente com a atuação em Engenharia de Software do seu corpo docente, resultou em proposta pioneira no País de um curso especificamente voltado para a formação de Engenheiros de Software, com ênfase na produção de software. Hoje, o Guia dos Estudantes da Editora Abril lista 28 cursos similares.</br>\
						A região da Grande Goiânia reúne centenas de empresas de TIC, mas elas participam de forma tímida no mercado de software nacional. Com a disponibilidade de recursos humanos qualificados, essa participação pode crescer, o que é compatível com a dimensão do Estado de Goiás, a oitava economia nacional. Portanto, promover a indústria de produção de software em Goiás significa fomentar o aumento da participação das empresas do estado no mercado de software.</br></br>\
						<b>Dos indicadores socioeconômicos regionais</b></br></br>\
						O BES cria a possibilidade de acesso ao ensino superior para aqueles que não podem usufruir do ensino privado. Segundo o IBGE [IBGE], em Goiás, 62.133 estudantes de graduação frequentavam cursos públicos em 2010, enquanto 156.415 estavam matriculados em cursos privados. Ou seja, estudantes em cursos públicos representam menos de 30% do total de estudantes matriculados no ensino superior.</br>\
						O rendimento nominal médio mensal domiciliar per capita de todos os municípios brasileiros revela que, das cidades goianas, a capital do estado é a melhor posicionada, em vigésimo quarto lugar. O município goiano seguinte nesta classificação é Alto Paraíso de Goiás, na posição 158. O terceiro é Jataí, na posição 188. Até esta terceira aparição de municípios goianos, observa-se que o Estado do Rio Grande do Sul contribui com 57 municípios, São Paulo contribui com 55 municípios e Santa Catarina com 25 municípios.</br>\
						Quando se analisa o produto interno bruto (PIB) dos municípios brasileiros, dentre os cem maiores, Goiás contribui com apenas 2 municípios (Goiânia e Anápolis). Reunidos, estes dois municípios possuem PIB inferior ao do décimo terceiro colocado, São Bernardo do Campo (SP).</br>\
						Os valores expostos acima sugerem que a capacidade de financiamento privado do ensino superior em Goiás é inferior à de outros estados. Apesar dessa limitação, menos de 30% do total de estudantes estão matriculados em cursos superiores públicos.</br>\
						Aqueles que conseguem acesso ao ensino superior, público ou privado, são minoria em Goiás. Segundo o [IBGE], em 2010 Goiás tinha 1.213.946 pessoas com 10 ou mais anos de idade com curso médio completo, enquanto apenas 218.548 estavam matriculadas em curso superior. Ou seja, menos de 20% continuam seus estudos até o ensino superior. Neste censo, Goiás tinha 394.491 cidadãos com curso superior completo em uma população total de 6.003.788, ou seja, 6,5% da população com curso superior. O Estado de São Paulo, por exemplo, apresenta uma taxa superior a 10%. Taxas ainda bem superiores são encontradas em outros países [OECD, 2012].</br>\
						Além de contribuir para melhoria dos indicadores de educação em Goiás, o BES potencializa o crescimento da economia goiana por meio de alternativa à atual dependência do agronegócio. Essa alternativa fomenta a participação de Goiás em um mercado valioso, além de promover a criação de empregos.</br>\
						A posição estratégia do BES pode ser esclarecida por meio de iniciativas internacionais. Por exemplo, TechHire Initiative e Computer Scicence for All são programas americanos lançados nos dois últimos anos, orçados em cerca de 2 bilhões de dólares, com o propósito de promover a capacitação em produção de software nos Estados Unidos.</br></br>\
						<b>Exposição de Motivos</b></br></br>\
						A dependência da sociedade em relação a softwares continua se expandindo, inclusive em tarefas que antes eram exclusivas dos seres humanos, por exemplo, estacionar um veículo. Isso tem ampliado a demanda por softwares e consequentemente por profissionais que visam atender essa demanda. O conhecimento necessário para produzir software é denominado de Engenharia de Software.</br>\
						Tradicionalmente esse conhecimento e as habilidades necessárias são adquiridas por egressos de outros cursos de graduação ou até por meio de cursos rápidos. Nesses casos, a apropriação de habilidades ocorre de forma parcial, pois não há espaço em tais cursos para cobrir adequadamente essa extensa área.</br>\
						A vocação de docentes do INF e o Programa de Reestruturação e Expansão das Universidades Federais (REUNI) resultaram na criação do primeiro curso de graduação (bacharelado) em Engenharia de Software do Brasil, o presente curso, pelo INF/UFG em 27/06/2008, conforme a resolução CONSUNI 10/2008, com o foco na formação de egressos aptos a usar de forma efetiva o conhecimento da Engenharia de Software.  Essa primeira versão foi amplamente divulgada [BES1] [BES2].</br>\
						Dezenas de docentes acumularam lições aprendidas desde o início da primeira turma do curso em março de 2009. A partir de outubro de 2014, o Núcleo Docente Estruturante (NDE) do curso iniciou esforço para refletir essas lições em uma nova versão do PPC. Ao longo de quase meia centena de encontros, o NDE fez uma exaustiva revisão do curso. As lições aprendidas e outras demandas, por exemplo, as diretrizes curriculares e o alinhamento com uma formação básica de qualidade em computação, definida pelo próprio INF, foram acomodadas na presente versão.</br>\
						Convém esclarecer que na época da criação do BES, sem similar no país, não existiam diretrizes curriculares específicas. Essas diretrizes vieram apenas em 2012 [CNE 2012].</br>\
						A presente versão não é resultado de alterações superficiais aplicadas à versão anterior, mas de ampla reflexão. Insumos empregados na elaboração da versão anterior foram revisitados. As Diretrizes Curriculares Nacionais (DCN), a versão mais recente do corpo de conhecimento da área e o modelo de competência para o engenheiro de software balizaram os esforços realizados. Projetos pedagógicos de cursos semelhantes, inclusive em outros países, também foram investigados. Esse substancial conjunto de informação foi analisado à luz da experiência dos docentes do próprio curso e do contexto local.</br>\
						Por fim, o BES obteve nota máxima na avaliação do MEC em 2015, o que estimulou o cuidado com o curso, reforçado pelo Guia dos Estudantes da Editora Abril 2015, no qual, dentre os 28 cursos superiores em Engenharia de Software investigados, dois recebem 5 estrelas, um desses é o curso do presente projeto pedagógico. Em 2016, esse cenário persiste, conforme o Guia dos Estudantes 2016.</p>'
		},
		{
			titulo: 'Motivacao',
			conteudo: 'teste'	
		},
		{
			titulo: 'Objetivos',
			conteudo: '<p><b>Objetivo geral</b></br></br>\
						O BES tem como objetivo “Formar profissionais aptos a contribuir efetivamente com a produção de softwares de qualidade seguindo princípios éticos e postura profissional”</br></br>\
						<b>Objetivos específicos</b></br></br>\
						- Reconhecer e valorizar o respeito à diversidade. Conforme se lê na Constituição Federal em seu Art. 3., inciso IV: “promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação”.</br>\
						- Promover relações étnico-raciais respeitosas, assim como a socialização da história da formação dos brasileiros.</br>\
						- Ampliar a compreensão acerca de questões ambientais e, ao mesmo tempo, valorizar projetos sustentáveis.</br>\
						- Contribuir com a demanda da sociedade por softwares de qualidade</br>\
						- Conceber e desenvolver produtos inovadores</br>\
						- Promover a engenharia de software na industria de software regional</br>\
						- Viabilizar atividade econômica de alto valor (produção de software)</br>\
						- Criar alternativa econômica para o Estado de Goiás.</br>\
						- Fortalecer a indústria de software de Goiânia.</p>'
		},
		{
			titulo: 'Principios',
			conteudo: 'teste'	
		},
		{
			titulo: 'Expectativas',
			conteudo: '<p><b>Perfil do Egresso</b></br></br>\
			O egresso do BES é um profissional com capacitação sólida em engenharia de software. Essa capacitação advém de formação básica consistente em computação e de abrangente e aprofundada em engenharia de software.</br>\
			O mercado de atuação do egresso é abrangente, e decorre da dependência da sociedade por software. Adicionalmente, tal dependência tem se expandido com novos produtos, serviços e processos.</br>\
			A bacharela ou o bacharel em Engenharia de Software é capaz de efetivamente contribuir com equipes na produção de modelos abstratos de software e realizá-los por meio de código de qualidade. Essa contribuição é pautada por postura profissional e conduta ética.</br>\
			As habilidades do egresso incluem o que é necessário para lidar com requisitos de software, propor uma solução (software design), construí-la, testá-la e mantê-la, usando processos adequados.</br></br>\
			<b>Habilidades do Egresso</b></br></br>\
			<b><i>Da perspectiva de relações pessoais, o egresso deve ser capaz de:</i></b></br></br>\
			- Participar de forma harmoniosa, profissional e ética durante a elaboração de produtos de software atribuídos a equipes.</br>\
			- Liderar ação contínua de formação de sua própria reputação na área.</br>\
			- Participar da comunicação de ideias com clareza, seja na forma verbal ou escrita.</br></br>\
			<b><i>Da perspectiva técnica, o egresso deve ser capaz de:</i></b></br></br>\
			- Participar de atividades para eliciar, analisar, especificar, validar e gerenciar requisitos de software.</br>\
			- Participar da definição da solução de software que atende requisitos, ou seja, da definição da arquitetura e do projeto detalhado desse software.</br>\</br>\
			- Participar da elaboração de modelos de análise e de projeto (design) de software.</br>\
			- Participar da aplicação de técnicas de projeto ao desenvolver softwares concorrentes, distribuídos, orientados a objetos, orientados a eventos e que implementam a persistência de dados.</br>\
			- Participar da avaliação de design de software considerando, dentre outros quesitos: abstração, coesão, acoplamento e encapsulamento.</br>\
			- Participar da aplicação de técnicas de tratamento de exceção e tolerância a falhas.</br>\
			- Auxiliar a escolha de processo e de metodologia de design de software.</br>\
			- Auxiliar a revisão de design de software</br>\
			- Participar do emprego de estilos, visões, modelos e padrões de arquitetura de software.</br>\
			- Participar do projeto de componentes e módulos de software usando modelos, padrões de projeto e notações.</br>\
			- Auxiliar a execução de análise estática.</br>\
			- Auxiliar a escolha de processos e modelos apropriados para a construção de software.</br>\
			- Auxiliar a escolha de linguagens e ferramentas apropriadas para a construção de software.</br>\
			- Auxiliar a escolha de frameworks, plataformas e ambientes de construção de construção de software.</br>\
			- Participar da construção de software seguindo padrões de gerência de configuração e controle de versão.</br>\
			- Participar da coleta e do monitoramento de medidas de qualidade de código.</br>\
			- Participar da criação de design detalhado que minimiza a complexidade e melhora a qualidade.</br>\
			- Participar da criação de código que implementa projetos detalhados.</br>\
			- Indicar o uso de padrões de projeto.</br>\
			- Participar da refatoração (refactoring) de código.</br>\
			- Participar da construção de software que segue padrões de código.</br>\
			- Participar da construção de software que faz uso de técnicas de codificação defensiva.</br>\
			- Participar da geração de código a partir de modelos de projeto.</br>\
			- Participar do uso apropriado de ferramentas e técnicas de depuração.</br>\
			- Participar da criação de testes de unidade.</br>\
			- Participar da construção de software que satisfaz objetivos de cobertura de testes.</br>\
			- Participar da construção de software que segue estratégias e processos de integração e implantação.</br>\
			- Participar da construção e realização de testes de integração.</br>\
			- Participar da construção de software em equipe ao colaborar com outros membros da equipe.</br>\
			- Participar de revisões e inspeções.</br>\
			- Participar da elaboração e implementação de planos de testes.</br>\
			- Participar da definição de um ambiente de teste e da correspondente implementação.</br>\
			- Participar da identificação, design e implementação de testes.</br>\
			- Participar da elaboração de relatórios de testes.</br>\
			- Auxiliar a elaboração e execução de plano de transição de software.</br>\
			- Auxiliar a elaboração e execução de planos de manutenção de software.</br>\
			- Auxiliar a execução de atividades de processos de software.</br>\
			- Auxiliar a definição e personalização de processos de software.</br>\
			- Auxiliar a implementação e execução de processos de software.</br>\
			- Auxiliar a coleta de dados para avaliação de processos de software.</br>\
			- Auxiliar a definição e o desenvolvimento de software que satisfaz objetivos e atributos de qualidade.</br>\</br>\</br>\
			- Auxiliar a identificação de medidas de qualidade apropriadas.</br>\</br>\
			- Auxiliar a elaboração de planos e revisões de qualidade.</br>\
			- Participar da construção de software que segue princípios recomendados para segurança de código.</br>\
			- Participar da construção de software que segue um plano de gerência de configuração de software.</br>\
			- Participar da documentação de software.</p>'	
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
			titulo: 'AtividadesComplementares',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'Equivalencias',
			conteudo: 'TESTETESTETESTE'	
		},
		{
			titulo: 'EnsinoPesquisa',
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
