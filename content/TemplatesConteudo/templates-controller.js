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
			conteudo: '<p><h1>Apresentação e Identificação do Curso</h1></br></br>\
						O curso de bacharelado em Engenharia de Software(BES) é oferecido pelo Instituto de Informática(INF) da Universidade Federal de Goiás(UFG). A primeira versão do Projeto Pedagógico do Curso (PPC) criada em 2008, a segunda versão, registrada nesse documento, é fruto de uma reflexão de dois anos do Núcleo Docente Estruturante (NDE) que reinventou o BES.</br></br>\
						A busca pela qualidade é a motivação dessa segunda versão, que só pode ser adequadamente compreendida com o detalhamento da história da criação do curso e do cenário no qual está inserido, o que lembra Paulo Freire, segundo o qual "toda leitura de texto pressupõe uma rigorosa leitura do contexto".</br></br>\
						Não houve alteração relevante dos objetivos do curso, nem tampouco do perfil do egresso, contudo,ambos foram refinados. Os requisitos legais e normativos foram ampliados pelas diretrizes curriculares nacionais(que não existem quando a primeira versão foi produzida). Em particular, a estratégia para atender a educação das relações etnico-raciais e para o ensino de história e cultura afro-brasileira foi revista em sua totalidade.</br></br>\
						A estrutura curricular sofreu mudanças significativas. Em particular, o fluxo sugerido, nos quatro primeiros períodos, inclui apenas disciplinas de formação básica em computação. A disciplina "Prática em Engenharia de Software" é o elemento integrador do curso, com carga horária de 320 horas. Em particular, as disciplinas específicas da Engenharia de Software são acompanhadas em uma seção adicional, "condições mínimas", que estabelece competências a serem demonstradas/adquiridas pelo estudante em cada uma delas.</br></br>\
						A busca por um curso de Engenharia de Software melhor é uma atribuição contínua do NDE estabelecida nesse PPC por meio de princípios. Esse compromisso é oportuno para estabelecer claramente a responsabilidade pela gestão do presente PPC pelo NDE, sem o qual esse texto resume-se a um registro de intenções.</br></br>\
					    <h3>Nome do curso</h3></br>\
					    Engenharia de Software</br></br>\
					    <h3>Grau acadêmico</h3></br>\
					    Bacharelado</br></br>\
					    <h3>Tipo do egresso</h3></br>\
					    Bacharel(a) em Engenharia de Software</br></br>\
					    <h3>Área do conhecimento</h3></br>\
					        Ciências Exatas e da Terra</br>\
					        Ciências da Computação  </br>\
					        Metodologia e Técnicas da Computação  </br>\
					        Engenharia de Software  </br></br>\
					    <h3>Modalidade</h3></br>\
					    Presencial</br></br>\
					    <h3>Local de Oferta</h3></br>\
					      Instituto de Informática(INF) </br>\
					      Alameda Palmeiras, Quadra D, Câmpus Samambaia <br>\
					      Goiânia(GO), CEP 74690-900</br></br>\
					    <h3>Reconhecimento</h3></br>\
					      Portaria N819 de 29 de Outubro de 2015, </br>\
					      Número de registro no e-MEC: 201307356</br></br>\
					    <h3>Responsável</h3></br>\
					    Instituto de Informática(INF)</br></br>\
					    <h3>Unidades executoras</h3></br>\
					      Instituto de Informática(INF) </br>\
					      Instituto de Matemática e Estatística(IME) </br>\
					      Faculdade de Letras(Letras)</br></br>\
					    <h3>Número de vagas</h3></br>\
					    40 vagas anuais</br></br>\
					    <h3>Carga Horária</h3></br>\
					    3200</br></br>\
					    <h3>Duração do curso em semestres</h3></br>\
					    9 semestres</br></br>\
					    <h3>Turno de Funcionamento</h3></br>\
					    Noturno</br></br>\
					    <h3>Forma de ingresso</h3></br>\
					    Sistema de Seleção Unificada(SISU). Em caso de existência de vagas é possível o ingresso através : (a) Transferência de outras instituições de ensino superior; (b) portadores de diploma e (c) reingresso. Essas opções dependem de processo seletivo específico da UFG.\
						</p>'
		},
		{
			titulo: 'Contexto',
			conteudo: '<p><h1>Contexto do Curso</h1></br></br>\
						O Bacharelado em Engenharia de Software (BES) existe e se mantém em um contexto no qual se destaca a aptidão do Instituto de Informática, a carência de mão de obra apta a desenvolver softwares de qualidade e a mportância local do curso, detalhados nas seções seguintes.</br></br>\
						<b>Da aptidão do Instituto de Informática</b></br></br>\
						O Instituto de Informática da UFG possui sólida experiência no ensino superior em Computação, iniciada em 1983, com a primeira turma do curso de Bacharelado em Ciências da Computação (CC). A partir de 2009 foram criados mais dois cursos de graduação: o Bacharelado em Engenharia de Software (BES) e o Bacharelado em Sistemas de Informação (SI). O INF também é responsável por dezenas de disciplinas da área de Computação ministradas para diversos cursos de graduação de várias unidades de ensino da UFG.</br></br>\
						Na pós-graduação lato sensu o INF já ofertou dezenas de edições dos mais variados cursos de especialização na área de Computação. Na pós-graduação stricto sensu o INF oferece, desde 2001, o Mestrado em Ciência da Computação. A partir de 2010 o INF passou a oferecer o Doutorado em Ciência da Computação.</br></br>\
						Essa históra perfaz mais de três décadas de ensino, com milhares de egressos, alguns deles ocupando cargos de destaque em universidades, empresas e organizações tanto no Brasil quanto no exterior.</br></br>\
						O INF construiu, ao longo desse período, um consistente envolvimento com empresas e organizações de Tecnologia da Informação e Comunicação (TIC). O Apoema [APOEMA] é o órgão do INF responsável pela cooperação e interação com organizações externas, com foco em soluções inovadoras</br></br>\
						Um número significativo de projetos de Pesquisa e Desenvolvimento (P&D) já foi realizado pelo INF em parceria com organizações locais, e alguns com empresas multinacionais (como Dell e HP, por exemplo). O INF também já participou de vários projetos de inovação tecnológica financiados pela Fundação de Apoio à Pesquisa do Estado de Goiás (FAPEG).</br></br>\
						<b>Da carência de mão de obra</b></br></br>\
						Um dos motivos para a existência do BES é a necessidade de formar recursos humanos em Engenharia de Software. A demanda por profissionais especializados na produção de software não existe só no Estado de Goiás, nem tampouco apenas no Brasil, mas em todo o mundo.</br></br>\
						Apesar da demanda, na ocasião da criação do BES, não era conhecido outro curso com a mesma denominação ou propósito no Brasil. A tradição do INF na socialização da Computação, juntamente com a atuação em Engenharia de Software do seu corpo docente, resultou em proposta pioneira no País de um curso especificamente voltado para a formação de Engenheiros de Software, com ênfase na produção de software. Hoje, o Guia dos Estudantes da Editora Abril lista 28 cursos similares.</br></br>\
						A região da Grande Goiânia reúne centenas de empresas de TIC, mas elas participam de forma tímida no mercado de software nacional. Com a disponibilidade de recursos humanos qualificados, essa participação pode crescer, o que é compatível com a dimensão do Estado de Goiás, a oitava economia nacional. Portanto, promover a indústria de produção de software em Goiás significa fomentar o aumento da participação das empresas do estado no mercado de software.</br></br>\
						<b>Dos indicadores socioeconômicos regionais</b></br></br>\
						O BES cria a possibilidade de acesso ao ensino superior para aqueles que não podem usufruir do ensino privado. Segundo o IBGE [IBGE], em Goiás, 62.133 estudantes de graduação frequentavam cursos públicos em 2010, enquanto 156.415 estavam matriculados em cursos privados. Ou seja, estudantes em cursos públicos representam menos de 30% do total de estudantes matriculados no ensino superior.</br></br>\
						O rendimento nominal médio mensal domiciliar per capita de todos os municípios brasileiros revela que, das cidades goianas, a capital do estado é a melhor posicionada, em vigésimo quarto lugar. O município goiano seguinte nesta classificação é Alto Paraíso de Goiás, na posição 158. O terceiro é Jataí, na posição 188. Até esta terceira aparição de municípios goianos, observa-se que o Estado do Rio Grande do Sul contribui com 57 municípios, São Paulo contribui com 55 municípios e Santa Catarina com 25 municípios.</br></br>\
						Quando se analisa o produto interno bruto (PIB) dos municípios brasileiros, dentre os cem maiores, Goiás contribui com apenas 2 municípios (Goiânia e Anápolis). Reunidos, estes dois municípios possuem PIB inferior ao do décimo terceiro colocado, São Bernardo do Campo (SP).</br></br>\
						Os valores expostos acima sugerem que a capacidade de financiamento privado do ensino superior em Goiás é inferior à de outros estados. Apesar dessa limitação, menos de 30% do total de estudantes estão matriculados em cursos superiores públicos.</br></br>\
						Aqueles que conseguem acesso ao ensino superior, público ou privado, são minoria em Goiás. Segundo o [IBGE], em 2010 Goiás tinha 1.213.946 pessoas com 10 ou mais anos de idade com curso médio completo, enquanto apenas 218.548 estavam matriculadas em curso superior. Ou seja, menos de 20% continuam seus estudos até o ensino superior. Neste censo, Goiás tinha 394.491 cidadãos com curso superior completo em uma população total de 6.003.788, ou seja, 6,5% da população com curso superior. O Estado de São Paulo, por exemplo, apresenta uma taxa superior a 10%. Taxas ainda bem superiores são encontradas em outros países [OECD, 2012].</br></br>\
						Além de contribuir para melhoria dos indicadores de educação em Goiás, o BES potencializa o crescimento da economia goiana por meio de alternativa à atual dependência do agronegócio. Essa alternativa fomenta a participação de Goiás em um mercado valioso, além de promover a criação de empregos.</br></br>\
						A posição estratégia do BES pode ser esclarecida por meio de iniciativas internacionais. Por exemplo, TechHire Initiative e Computer Scicence for All são programas americanos lançados nos dois últimos anos, orçados em cerca de 2 bilhões de dólares, com o propósito de promover a capacitação em produção de software nos Estados Unidos.</br></br>\
						</p>'
		},
		{
			titulo: 'Motivacao',
			conteudo: '<p><h1>Exposição de motivos</h1></br></br>\
				A dependência da sociedade em relação a softwares continua se expandindo, inclusive em tarefas que antes eram exclusivas dos seres humanos, por exemplo, estacionar um veículo. Isso tem ampliado a demanda por softwares e consequentemente porprofissionais que visam atender essa demanda. O conhecimento necessário paraproduzir software é denominado de Engenharia de Software.</br></br>\
				Tradicionalmente esse conhecimento e as habilidades necessárias são adquiridas por egressos de outros cursos de graduação ou até por meio de cursos rápidos. Nesses casos, a apropriação de habilidades ocorre de forma parcial, pois não há espaço em tais cursos para cobrir adequadamente essa extensa área.</br></br>\
				A vocação de docentes do INF e o Programa de Reestruturação e Expansão das Universidades Federais (REUNI) resultaram na criação do primeiro curso de graduação (bacharelado) em Engenharia de Software do Brasil, o presente curso, pelo INF/UFG em 27/06/2008, conforme a resolução CONSUNI 10/2008, com o foco na formação de egressos aptos a usar de forma efetiva o conhecimento da Engenharia de Software. Essa primeira versão foi amplamente divulgada [BES1] [BES2].</br></br>\
				Dezenas de docentes acumularam lições aprendidas desde o início da primeira turma do curso em março de 2009. A partir de outubro de 2014, o Núcleo Docente Estruturante (NDE) do curso iniciou esforço para refletir essas lições em uma nova versão do PPC. Ao longo de quase meia centena de encontros, o NDE fez uma exaustiva revisão do curso. As lições aprendidas e outras demandas, por exemplo, as diretrizes curriculares e o alinhamento com uma formação básica de qualidade em computação, definida pelo próprio INF, foram acomodadas na presente versão.</br></br>\
				Convém esclarecer que na época da criação do BES, sem similar no país, não existiam diretrizes curriculares específicas. Essas diretrizes vieram apenas em 2012 [CNE 2012].</br></br>\
				A presente versão não é resultado de alterações superficiais aplicadas à versão anterior, mas de ampla reflexão. Insumos empregados na elaboração da versão anterior foram revisitados. As Diretrizes Curriculares Nacionais (DCN), a versão mais recente do corpo de conhecimento da área e o modelo de competência para o engenheiro de software balizaram os esforços realizados. Projetos pedagógicos de cursos semelhantes, inclusive em outros países, também foram investigados. Esse substancial conjunto de informação foi analisado à luz da experiência dos docentes do próprio curso e do conte</br></br>\
				Por fim, o BES obteve nota máxima na avaliação do MEC em 2015, o que estimulou o cuidado com o curso, reforçado pelo Guia dos Estudantes da Editora Abril 2015, no qual, dentre os 28 cursos superiores em Engenharia de Software investigados, dois recebem 5 estrelas, um desses é o curso do presente projeto pedagógico. Em 2016, esse cenário persiste, conforme o Guia dos Estudantes 2016.</p>'
		},
		{
			titulo: 'Objetivos e Expectativas',
			conteudo: '<p><h1>Objetivos do Curso</h1></br></br>\
						<b>Objetivo geral</b></br></br>\
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
						- Fortalecer a indústria de software de Goiânia.</br></br>\
			<h1>Expectativas do Egresso</h1></br></br>\
			<b>Perfil do Egresso</b></br></br>\
			O egresso (pessoa que se formou no curso) do BES é um profissional com capacitação sólida em engenharia de software. Essa capacitação advém de formação básica consistente em computação e de abrangente e aprofundada em engenharia de software.</br>\
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
			- Auxiliar a definição e o desenvolvimento de software que satisfaz objetivos e atributos de qualidade.</br>\
			- Auxiliar a identificação de medidas de qualidade apropriadas.</br>\
			- Auxiliar a elaboração de planos e revisões de qualidade.</br>\
			- Participar da construção de software que segue princípios recomendados para segurança de código.</br>\
			- Participar da construção de software que segue um plano de gerência de configuração de software.</br>\
			- Participar da documentação de software.</p>'
		},
		{
			titulo: 'Principios',
			conteudo: '<p><h1>Princípios do Curso</h1></br></br>\
			O BES baseia-se em princípios que fornecem a sustentação necessária para atingir os objetivos do curso e o perfil do egresso. Esses princípios são fornecidos abaixo.</br></br>\
			<b>Formação Ética e Função Social do Profissional</b></br></br>\
			A vivência de princípios éticos e o conhecimento sobre a responsabilidade social do Engenheiro de Software são elementos imprescindíveis para a formação da postura profissional do egresso do BES.</br></br>\
			Ética é assunto de uma das disciplinas do primeiro semestre do curso, “Computação e Sociedade”, e volta a ser explicitamente tratada, junto com aspectos profissionais, na última disciplina do curso “Prática em Engenharia de Software” . Nesse caso, a postura ética e profissional é condição a ser observada para aprovação nessa disciplina.</br></br>\
			O comportamento ético e profissional será trabalhado nas atividades do curso, e não apenas na primeira e última disciplinas. A exigência de uma conduta apropriada em sala de aula, tanto dos docentes quanto dos estudantes, contribui com essa formação. Isso significa promover a qualidade de vida, o respeito à diversidade, o respeito ao meio ambiente. Nesse sentido, não apenas as disciplinas, mas toda e qualquer ação, deve ser pautada pela reflexão do impacto no contexto no qual se insere.</br></br>\
			Ainda convém destacar que a área possui um código de ética próprio, Código de Ética e Prática Profissional da Engenharia de Software [ACM/IEEE]. Esse código é uma das bases de fundamentação do curso e deve ser observado no convívio diário do curso.</br></br>\
			<b>Formação Técnica</b></br></br>\
			A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014]. Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área.</br></br>\
			As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas. A estratégia de definição das disciplinas do BES é fornecida abaixo.</br></br>\
			<b>Estratégia da definição das disciplinas</b></br></br>\
			As disciplinas do BES foram definidas com substancial cruzamento de fronteiras de subáreas do conhecimento da Engenharia de Software. A estratégia na qual se define uma disciplina por subárea foi preterida. Convém ressaltar que o corpo de conhecimento da área [SWEBOK 2014] foi extensivamente empregado, mas não como exemplo de organização didática.</br></br>\
			Em vez da separação de tópicos induzida pela classificação do conhecimento, o conteúdo (ementa) atribuído a cada disciplina do BES inclui tópicos entre os quais há sinergia. Essa orientação é compatível com a prática da Engenharia de Software e não apenas reconhece, mas também respeita os vínculos entre as suas subáreas. Isso resultou em disciplinas coerentes com a prática da Engenharia de Software.</br></br>\
			A Figura abaixo ilustra uma disciplina X qualquer do BES, composta por conteúdo das subáreas A, B e C. Ou seja, o conteúdo de X não está contido estritamente na subárea A, nem tampouco na B ou na C. Em vez disso, reúne e explora a interdependência de conceitos dessas três subáreas.</br></br>\
			As subáreas “requisitos” e “projeto de software”, por exemplo, são contempladas em várias disciplinas do curso e não apenas nas disciplinas nas quais são o foco principal de interesse. A disciplina que enfatiza testes, por exemplo, inclui aspectos de design de software e também de requisitos, assim como aqueles de construção de software. De forma resumida, as disciplinas não são uma projeção cartesiana das 15 subáreas de conhecimento da Engenharia de Software [SWECOM 2014]. Em vez disso, são 18 disciplinas cobrindo reiteradamente várias dessas 15 áreas, sendo que uma delas cobre todas as áreas necessárias para a execução de um projeto real de produção de software.</br></br>\
			<b>Articulação entre Teoria e Prática Profissional</b></br></br>\
			O perfil do egresso, definido em outra seção desse documento, exige do egresso o envolvimento com o fazer, com o exercício do conhecimento de Engenharia de Software.</br></br>\
			Essa articulação é explicitamente estabelecida por meio da seção “Condições mínimas” definida para cada disciplina de Engenharia de Software. Tais condições, em geral, definem o que o egresso pode fazer, em outras palavras, é capaz de realizar com o conhecimento. Ou seja, o que convencionalmente se limita ao conteúdo, ou teoria, deverá ser exercitado, ou prática, e com um nível bem definido de proficiência.</br></br>\
			A disciplina “Prática em Engenharia de Software” é um ponto explícito do curso no qual a prática é o elemento principal, perfazendo 320 horas. O fazer, contudo, não está restrito a essa disciplina. A capacidade de realização de atividades de desenvolvimento de software é exigência em boa parte das disciplinas.</br></br>\
			<b>Interdisciplinaridade</b></br></br>\
			Produzir software significa, necessariamente, o emprego de pelo menos dois domínios. O domínio da solução, no qual a Engenharia de Software é exercitada e o domínio do problema, que fomenta a existência do software. O domínio do problema é “universal”, pois inclui saúde, educação, segurança, governo, finanças e entretenimento, dentre muitos outros. Fazer software, portanto, por si só, exige o contato com outras áreas do conhecimento.</br></br>\
			O acesso a outras áreas pode vir das disciplinas do Núcleo Livre (NL). O BES exige para a integralização curricular pelo menos 128 horas de disciplinas do NL. Essas disciplinas são escolhidas pelo estudante dentre todas aquelas oferecidas na UFG. Para ilustrar, no primeiro semestre de 2015 houve oferta de vagas para mais de 300 disciplinas de NL. Ou seja, o conjunto de opções de outras áreas do conhecimento é rico, o que contribui com uma formação ampla do estudante. Convém destacar que tais 128 horas perfazem a quantidade mínima exigida, o estudante pode fazer uso de uma carga horária maior. O mesmo é válido para o estágio não obrigatório e para as atividades complementares. O estudante deve cumprir um mínimo de 192 horas em atividades complementares.</br></br>\
			A interdisciplinaridade estimulada pelos elementos citados acima é extra curso. Aquela intracurso é tratada tanto pela definição das disciplinas quanto pela disciplina “Prática em Engenharia de Software”. Nesses casos a interdisciplinaridade é compulsória, pois faz parte da própria concepção do curso. Adicionalmente, sem restringir a liberdade metodológica do docente, cabe ao NDE orientar a definição de programas de disciplinas que cultivem a interdisciplinaridade.</br></br>\
			<b>Disciplina “Prática em Engenharia de Software”</b></br></br>\
			Essa disciplina de 320 horas tem como objetivo explícito a participação do estudante em um ou mais projetos integradores que usufruem de conhecimento e habilidades adquiridos por todo o curso. Os projetos exigem o contato com problemas reais, o que exige contato tanto com o conhecimento quanto profissionais de outras áreas. Consulte detalhes na página 75.</br></br>\
			<b>Atividades Supervisionadas</b></br></br>\
			De acordo com a Resolução  CNE/CES 03/2007 de 2 de julho de 2007, cabe às Instituições de Educação Superior, respeitando o mínimo dos duzentos dias letivos de trabalho acadêmico efetivo, a definição da duração da atividade acadêmica ou do  trabalho discente efetivo, o que compreende: (a) preleções e aulas expositivas e (b) atividades práticas supervisionadas, tais como laboratórios, atividades em biblioteca, iniciação científica, trabalhos individuais e em grupo, práticas de ensino e outras atividades no caso das licenciaturas.</br></br>\
			O BES divide cada hora de atividade acadêmica em 45 minutos de preleções e aulas expositivas e 15 minutos de atividades práticas supervisionadas. O planejamento de cada hora deve estar devidamente registrado no plano de cada disciplina. Em particular, o plano deve incluir de forma clara as atividades práticas supervisionadas.</p>'
		},
		{
			titulo: 'NDE',
			conteudo: '<p><h1>Núcleo Docente Estruturante</h1></br></br>\
						O Núcleo Docente Estruturante (NDE) é composto por docentes (professores) e outros profisionais responsáveis pelo BES. </br></br>\
						<b>Em vez de atribuir atividades ao NDE, o NDE adota os seguintes princípios:</b></br></br>\
						- O NDE possui duas prioridades. A maior prioridade é colocar em prática o Projeto Pedagógico do Curso (PPC). A prioridade seguinte é mantê-lo relevante.</br>\
						- Qualquer questão que diz respeito às prioridades é do interesse do NDE e pode resultar em ação.</br>\
						- Toda ação necessariamente deve gerar valor e estar alinhada com as prioridades.</br>\
						- Uma ação constante e preconcebida é zelar pelos princípios aqui descritos.</br>\
						- O NDE entende que o diálogo é necessário e que a diversidade é natural, assim como o confronto de ideias.</br></br>\
						<b>Esses princípios definem que todo o conteúdo do presente PPC e a aplicação dele está no raio de atuação do NDE. O que inclui:</b></br></br>\
						- Acompanhar a execução das ações de ensino, pesquisa e extensão pertinentes ao curso;</br>\
						- Acompanhar a avaliação das ações do curso;</br>\
						- Emitir opinião sobre ações pertinentes ao curso;</br>\
						- Monitorar o desempenho dos estudantes;</br>\
						- Promover ações que possam reduzir reprovações;</br>\
						- Monitorar resultados dos trabalhos de conclusão de curso;</br>\
						- Monitorar ações de estágios dos estudantes do curso;</br>\
						- Acompanhar e se pronunciar acerca de reclamações pertinentes ao curso;</br>\
						- Avaliar de forma contínua o PPC do curso;</br>\
						- Acompanhar e promover a qualificação de docentes;</br>\
						- Acompanhar e promover a qualificação do corpo de técnico-administrativos.</br></br>\
						O NDE, portanto, não se apresenta como órgão ou mecanismo deliberativo, mas consultivo. Reúne docentes que continuamente refletem sobre questões pertinentes ao curso e, em consequência, definem ações que assistem, apoiam e fomentam a qualidade do curso, bem como contribuem com a execução dessas ações.</br></br>\
						A atuação do NDE deve ser realizada em estreita interação com a coordenação do curso. Entretanto, não é nem pode ser vista como meio para auxiliar a realização de fluxos administrativos (atribuição da coordenação do curso).</br></br>\
						Convém observar que as atribuições estabelecidas acima estão em conformidade com a resolução da Comissão Nacional de Avaliação da Educação Superior (CONAES), 01/2010 de 17 de junho de 2010, a qual “normatiza o núcleo docente estruturante”, e esclarecido pelo parecer CONAES 04/2010 de 17 de junho de 2010.</p>'
		},
		{
			titulo: 'TCC',
			conteudo: '<p><h1>Trabalho de Conclusão de Curso</h1></br></br>\
			O Trabalho de Conclusão de Curso (TCC) no BES é um componente curricular obrigatório regulado pelas Normas e Procedimentos de Trabalho de Conclusão de Curso do Bacharelado em Engenharia de Software.</br></br>\
			O TCC é desenvolvido na última etapa da graduação, sob a orientação de um professor e compreende um relatório e uma apresentação.</br></br>\
			O relatório é individual e tem como objetivo a expressão do estudante na forma escrita, a capacidade de analisar, caracterizar, investigar, discutir, implantar, pesquisar, realizar, sintetizar e avaliar, entre outras. Neste sentido, o relatório descreve, de forma crítica, as atividades teórico-práticas e de formação profissional relacionadas ao desenvolvimento do estudante como profissional, em especial, durante a disciplina Prática em Engenharia de Software.</br></br>\
			A apresentação do relatório, também individual, é realizada como última atividade do curso e tem como objetivo a expressão do estudante, agora na forma oral, das atividades descritas no relatório, em seção pública e para uma banca formada por professores do INF. A banca de professores tem o direito a um período de arguição e é responsável pela avaliação tanto do relatório quanto da apresentação.</p>'
		},
	];

	// array contendo os textos que serão mostrados na tela de Estrutura Curricular
	var arrayEstruturaCurricular = [
		{
			titulo: 'MatrizCurricular',
			conteudo: '<p><h1>Matriz Curricular do Curso</h1></br></br>\
					<table class="tabela-matriz">\
						<tr>\
							<th>Nº</th>\
							<th>Disciplina</th>\
							<th>Pré</th>\
							<th>Unidade</th>\
							<th>TEO</th>\
							<th>PRA</th>\
							<th>CHT</th>\
							<th>Núcleo</th>\
						</tr>\
						<tr>\
							<th>1</th>\
							<th>Computação e Sociedade</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>0</th>\
							<th>32</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>2</th>\
							<th>Introdução à Programação</th>\
							<th></th>\
							<th>INF</th>\
							<th>48</th>\
							<th>80</th>\
							<th>128</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>3</th>\
							<th>Cálculo 1A</th>\
							<th></th>\
							<th>IME</th>\
							<th>96</th>\
							<th>0</th>\
							<th>96</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>4</th>\
							<th>Fundamentos de Matemática para Computação</th>\
							<th></th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>5</th>\
							<th>Arquitetura de Computadores</th>\
							<th>4</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>6</th>\
							<th>Algoritmos e Estruturas de Dados 1</th>\
							<th>2</th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>7</th>\
							<th>Probabilidade e Estatística A</th>\
							<th>3</th>\
							<th>IME</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>8</th>\
							<th>Álgebra Linear</th>\
							<th></th>\
							<th>IME</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>9</th>\
							<th>Lógica Matemática</th>\
							<th>4</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>10</th>\
							<th>Programação Orientada a Objetos</th>\
							<th>2</th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>11</th>\
							<th>Algoritmos e Estruturas de Dados 2</th>\
							<th>6</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>12</th>\
							<th>Linguagens e Paradigmas de Programação</th>\
							<th>3</th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>13</th>\
							<th>Engenharia de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>14</th>\
							<th>Análise e Projeto de Algoritmos</th>\
							<th>4,11</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>15</th>\
							<th>Interação Humano-Computador</th>\
							<th>6,7</th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
						<tr>\
							<th>16</th>\
							<th>Banco de Dados</th>\
							<th>9</th>\
							<th>INF</th>\
							<th>48</th>\
							<th>16</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
							<th>17</th>\
							<th>Projeto de Software</th>\
							<th>10,13</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NC</th>\
						</tr>\
					</table><br></br>\
					As disciplinas da tabela acima fornecem uma sólida formação em Computação, o que inclui o recomendado para a formação em Matemática. Além dessas, outras seis de Computação são oferecidas como optativas.</br></br>\
					As disciplinas da tabela abaixo, por outro lado, são específicas da Engenharia de Software.Todas elas são obrigatórias, fazem parte do Núcleo Específico (NE) e são oferecidas pelo INF</br></br></p>\
					<table class="tabela-matriz">\
						<tr>\
							<th>Nº</th>\
							<th>Disciplina</th>\
							<th>Pré</th>\
							<th>Unidade</th>\
							<th>TEO</th>\
							<th>PRA</th>\
							<th>CHT</th>\
							<th>Núcleo</th>\
						</tr>\
						<tr>\
							<th>18</th>\
							<th>Construção de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>48</th>\
							<th>80</th>\
							<th>128</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>19</th>\
							<th>Modelagem de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>16</th>\
							<th>48</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>20</th>\
							<th>Processos de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>21</th>\
							<th>Engenharia de Sistemas</th>\
							<th></th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>22</th>\
							<th>Design de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>48</th>\
							<th>80</th>\
							<th>128</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>23</th>\
							<th>Domínios de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>16</th>\
							<th>48</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>24</th>\
							<th>Processos de Qualidade de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>48</th>\
							<th>16</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>25</th>\
							<th>Gerência de Projeto de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>26</th>\
							<th>Software Concorrente e Distribuído</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>27</th>\
							<th>Experiência do Usuário de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>28</th>\
							<th>Arquitetura de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>29</th>\
							<th>Requisitos de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>30</th>\
							<th>Governança e Gestão de Serviços de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>48</th>\
							<th>16</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>31</th>\
							<th>Software para Sistemas Ubíquos</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>32</th>\
							<th>Software para Persistência de Dados</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>33</th>\
							<th>Padrões de Arquitetura de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>34</th>\
							<th>Testes de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>32</th>\
							<th>32</th>\
							<th>64</th>\
							<th>NE</th>\
						</tr>\
						<tr>\
							<th>35</th>\
							<th>Prática em Engenharia de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>0</th>\
							<th>320</th>\
							<th>320</th>\
							<th>NE</th>\
						</tr>\
					</table></br></br>\
					São nove as disciplinas optativas. O estudante terá que escolher três delas, conforme as opções oferecidas na tabela abaixo:</br></br>\
					<table class="tabela-matriz">\
						<tr>\
							<th>Nº</th>\
							<th>Disciplina</th>\
							<th>Pré</th>\
							<th>Unidade</th>\
							<th>TEO</th>\
							<th>PRA</th>\
							<th>CHT</th>\
							<th>Núcleo</th>\
							<th>Optativa</th>\
						</tr>\
						<tr>\
							<th>36</th>\
							<th>Pesquisa Operacional</th>\
							<th>8</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>1</th>\
						</tr>\
						<tr>\
							<th>37</th>\
							<th>Linguagens Formais e Autômatos</th>\
							<th>4</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>1</th>\
						</tr>\
						<tr>\
							<th>38</th>\
							<th>Sistemas Operacionais</th>\
							<th>5</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>1</th>\
						</tr>\
						<tr>\
							<th>39</th>\
							<th>Compiladores</th>\
							<th>11,37</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>2</th>\
						</tr>\
						<tr>\
							<th>40</th>\
							<th>Redes de Computadores</th>\
							<th></th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>2</th>\
						</tr>\
						<tr>\
							<th>41</th>\
							<th>Introdução à Língua Brasileira de Sinais</th>\
							<th></th>\
							<th>LETRAS</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>2</th>\
						</tr>\
						<tr>\
							<th>42</th>\
							<th>Sistemas Distribuídos</th>\
							<th>10</th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>3</th>\
						</tr>\
						<tr>\
							<th>43</th>\
							<th>Metodologia e Experimentação em Engenharia de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>3</th>\
						</tr>\
						<tr>\
							<th>44</th>\
							<th>Mercado e Economia de Software</th>\
							<th></th>\
							<th>INF</th>\
							<th>64</th>\
							<th>0</th>\
							<th>64</th>\
							<th>NE</th>\
							<th>3</th>\
						</tr>\
					</table></p>'
		},
		{
			titulo: 'AtividadesComplementares',
			conteudo: '<p><h1>Atividades Complementares</h1></br></br>\
			O estudante do BES deve cumprir o mínimo de 192 horas em atividades complementares para a integralização curricular. Essas horas correspondem a 6% da carga horária do curso, conforme a distribuição da carga horária do curso.</br></br>\
			As atividades complementares contemplam ações de monitoria, produção científica, extensão, produção técnica e de representação e qualificação, dentre outras. O cumprimento das atividades complementares é estabelecido formalmente pelo Regulamento de Atividades Complementares do Bacharelado em Engenharia de Software.</p>'
		},
		{
			titulo: 'NL',
			conteudo: '<p><h1>Núcleo Livre</h1></br></br>\
			O Núcleo Livre (NL) é o conjunto de conteúdos voltado para promover a interdisciplinaridade e a transdisciplinaridade, dentre outros objetivos.</br></br>\
			A carga horária definida pelo BES para o NL é de 128 horas, que é o mínimo estabelecido pelo Regimento Geral dos Cursos de Graduação (RGCG) da UFG [RGCG]. Tais 128 horas perfazem 4% da carga horária do curso.</p>'
		},
		{
			titulo: 'FluxoSugerido',
			conteudo: '<h1>Fluxograma</h1></br></br>\
					<iframe src="content/Fluxograma/fluxograma.html"></iframe> '
		},
		{
			titulo: 'CargaHoraria',
			conteudo: '<p><h1>Carga Horária do Curso</h1></br></br>\
			As Tabelas mostradas na "Matriz Curricular" juntamente com a definição das horas do Núcleo Livre (NL) e das atividades complementares, resultam nos valores compilados na tabela abaixo.</br></br>\
			<table class="tabela">\
				<tr>\
					<th><b>Componentes Curriculares</b></th>\
					<th><b>CHT</b></th>\
					<th><b>Percentual</b></th>\
				</tr>\
				<tr>\
					<th>Núcleo Comum (NC)</th>\
					<th>1088</th>\
					<th>34%</th>\
				</tr>\
				<tr>\
					<th>Núcleo Específico (NE) (obrigatório)</th>\
					<th>1600</th>\
					<th>50%</th>\
				</tr>\
				<tr>\
					<th>Núcleo Específico (NE) (optativo)</th>\
					<th>192</th>\
					<th>6%</th>\
				</tr>\
				<tr>\
					<th>Núcleo Livre (NL)</th>\
					<th>128</th>\
					<th>4%</th>\
				</tr>\
				<tr>\
					<th>Atividades Complementares</th>\
					<th>192</th>\
					<th>6%</th>\
				</tr>\
				<tr>\
					<th><b>CARGA HORÁRIA TOTAL (CHT)</b></th>\
					<th><b>3200</b></th>\
					<th><b>100%</b></th>\
				</tr>\
			</table></p>'
		},
	];

	// array contendo os textos que serão mostrados na tela de infomações
	var arrayInformacoes = [
		{
			titulo: 'Estagio',
			conteudo: '<p><h1>Estágio</h1></br></br>\
			O estágio do BES constitui-se em um mecanismo de complementação de conhecimento e aperfeiçoamento de habilidades, além de oportunidade de prática em Engenharia de Software. O convívio com profissionais, obrigações, hierarquias e processos onde o estágio se desenvolve, resulta em oportunidade valiosa para a formação profissional do egresso.</br><br>\
			O estágio do BES não é de caráter obrigatório, ficando a critério do estudante realizá-lo ou não, desde que o mesmo esteja regularmente matriculado no curso. Ou seja, caracteriza estágio curricular não obrigatório. Adicionalmente, esse estágio deve ser realizado a partir do terceiro período do curso, ou após a conclusão de pelo menos 640 horas da carga horária do curso.</br></br>\
			Convém observar que o estágio está restrito às empresas devidamente conveniadas com a UFG ou que se utilizam de agentes de integração conveniados. Adicionalmente, dois outros papéis são obrigatórios no estágio: (a) supervisor (no local do estágio) e (b) orientador (professor do curso).</br><br>\
			Durante o estágio, que não pode ultrapassar 24 meses em mesmo local, o estudante deverá apresentar o Termo de Compromisso, o Plano de Estágio, além da frequência e dos relatórios semestrais.</br></br>\
			Os documentos citados acima, bem como outros detalhes do estágio, em conformidade com a Lei 11.788/2008, são definidos pelo Regulamento de Estágio de Curso do Bacharelado em Engenharia de Software.</p>'
		},
		{
			titulo: 'Equivalencias',
			conteudo: '<p><h1>Equivalências com PPC de 2009</h1></br></br>\
						<table class="tabela">\
						<tr>\
							<th><b>Disciplina do PPC De 2009-1</b></th>\
							<th><b>CH</b></th>\
							<th><b>Natureza</b></th>\
							<th><b>Aproveita como - No PPC de 2017-1</b></th>\
						</tr>\
						<tr>\
							<th>Introdução a Engenharia de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Engenharia de Software</th>\
						</tr>\
						<tr>\
							<th>Ética, Normas e Postura Profissional</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Computação e Sociedade</th>\
						</tr>\
						<tr>\
							<th>Matemática Discreta</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Fundamentos de Matemática para Computação</th>\
						</tr>\
						<tr>\
							<th>Lógica</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Lógica Matemática</th>\
						</tr>\
						<tr>\
							<th>Introdução à Programação</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Introdução à Programação</th>\
						</tr>\
						<tr>\
							<th>Método de Desenvolvimento de Software</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Programação Orientada a Objetos</th>\
						</tr>\
						<tr>\
							<th>Construção de Software</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Domínios de Software</th>\
						</tr>\
						<tr>\
							<th>Arquitetura de Computadores</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Arquitetura de Computadores</th>\
						</tr>\
						<tr>\
							<th>Algoritmos: Fundamentos e Estruturas de Dados</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Algoritmos e Estruturas de Dados 1</th>\
						</tr>\
						<tr>\
							<th>Banco de Dados</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Banco de Dados</th>\
						</tr>\
						<tr>\
							<th>Engenharia de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Engenharia de Software</th>\
						</tr>\
						<tr>\
							<th>Sistema Operacional</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Sistemas Operacionais</th>\
						</tr>\
						<tr>\
							<th>Redes e Sistemas Distribuídos/th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Redes de Computadores</th>\
						</tr>\
						<tr>\
							<th>Algoritmos: Ordenação e Busca</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Algoritmos e Estruturas de Dados 2</th>\
						</tr>\
						<tr>\
							<th>Linguagens de Programação</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Linguagens e Paradigmas de Programação</th>\
						</tr>\
						<tr>\
							<th>Requisitos de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Requisitos de Software</th>\
						</tr>\
						<tr>\
							<th>Projeto Detalhado de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Projeto de Software</th>\
						</tr>\
						<tr>\
							<th>Processo de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Processos de Software</th>\
						</tr>\
						<tr>\
							<th>Algoritmos em Grafos</th>\
							<th>64</th>\
							<th>NC-OBR</th>\
							<th>Algoritmos e Estruturas de Dados 2</th>\
						</tr>\
						<tr>\
							<th>Interação Homem-Computador</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Interação Humano-Computador</th>\
						</tr>\
						<tr>\
							<th>Segurança</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Optativa 1, Optativa 2 ou Optativa 3</th>\
						</tr>\
						<tr>\
							<th>Qualidade de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Processos de Qualidade de Software</th>\
						</tr>\
						<tr>\
							<th>Arquitetura de Software</th>\
							<th>64</th>\
							<th>NE-OBR</th>\
							<th>Arquitetura de Software</th>\
						</tr>\
					</table></p>'
		},
		{
			titulo: 'EnsinoPesquisa',
			conteudo: '<p><h1>Integração Ensino, Pesquisa e Extensão</h1></br></br>\
			A integração do ensino com a pesquisa e a extensão se verifica por meio de atividades complementares, do estágio não obrigatório, de disciplinas do curso e da postura didática dos docentes, conforme comentado abaixo.</br></br>\
			As atividades complementares são identificadas em resolução própria, perfazem pelo menos 192 horas e explicitamente incluem ações de extensão e de pesquisa. Por exemplo, divulgação de trabalhos em eventos científicos, participação em projetos de extensão e participação em projetos de pesquisa, dentre outras.</br></br>\
			O estágio não obrigatório é um instrumento de integração. As atividades a serem realizadas pelo estudante podem incluir ações de pesquisa.</br></br>\
			A disciplina Metodologia e Experimentação em Engenharia de Software oferece a visão exigida para a realização de pesquisas na área. Isso significa não apenas orientar o estudante acerca da elaboração de uma revisão sistemática, mas também da necessidade da expansão do conhecimento da área e dos mecanismos atualmente empregados para tal.</br></br>\
			Um contundente exemplo é a disciplina de 320 horas, Prática em Engenharia de Software. Essa disciplina envolve em sua concepção o ensino, a extensão e a pesquisa ao se concentrar em projetos reais executados no ambiente de uma Fábrica de Software. Qualquer que seja o projeto, esse envolverá extensão e/ou pesquisa, naturalmente, ainda em um cenário de aprendizado (ensino).</br></br>\
			A integração, contudo, não ocorre apenas por meio dos elementos acima, que seriam pontos de integração localizados e em períodos específicos. A integração deve ocorrer, onde oportuno, em cada ação do curso. Por exemplo, uma postura didática recomendável exige a contextualização de cada aula acerca do que será visto, da repercussão ou relação dela com a indústria de software (sociedade) e do estado da arte corrente. De fato, essa postura não é apenas recomendável, mas exigida por meio das “condições mínimas” definidas para cada disciplina. Ou seja, a integração do ensino com a pesquisa e a extensão ocorre por toda a extensão do curso.</p>'
		},
		{
			titulo: 'AvaliacaoProcesso',
			conteudo: '<p><h1>Avaliação do Processo de Ensino e Aprendizagem</h1></br></br>\
						O que é realizado em nome do curso para que o estudante adquira o perfil esperado pode ser avaliado considerando informações geradas externamente e outras internamente. A avaliação do curso pelo MEC e os resultados obtidos pelos estudantes do curso no ENADE são exemplos de insumos para a avaliação do processo de ensino. Internamente, a avaliação do docente pelo discente (instrumento formal e institucionalizado na UFG), o desempenho dos estudantes do curso nas disciplinas e os planos de ensino das disciplinas são fontes valiosas de informação.</br></br>\
						O NDE do curso é o principal consumidor dessas informações com o propósito de detectar possíveis melhorias e fomentar a introdução delas. Por exemplo, embora o docente tenha autonomia metodológica ao planejar e executar o plano de ensino de uma disciplina, cabe ao NDE analisar o plano e, quando considerar oportuno, recomendar ajustes. Essas e outras ações devem ser realizadas durante a semana de planejamento pedagógico e administrativo (semana formalmente institucionalizada na UFG), que ocorre no início de cada período letivo. Convém destacar que o plano de ensino de cada disciplina deve ser aprovado formalmente pelo Conselho Diretor da unidade antes do início do período letivo. Adicionalmente, a ação de avaliação não deve estar restrita à semana de planejamento, mas contínua. O objetivo é viabilizar a introdução de uma eventual mudança o mais próximo possível do instante no qual a necessidade foi detectada.</br></br>\
						Outra ação relevante do NDE na semana de planejamento pedagógico é apresentar as lições aprendidas no período anterior. Oferecer visibilidade de processos de ensino exitosos, o que é um instrumento de valorização do docente e, ao mesmo tempo, forma de socializar o que produziu bons resultados, também é uma ação a ser executada nessa semana. Enfim, acerca da avaliação do processo de ensino, o NDE possui papel relevante na identificação de dificuldades e busca de alternativas, em comunhão com os docentes do curso.</br></br>\
						A avaliação do processo de ensino, da aprendizagem e do curso, dentre outros, são assuntos pertinentes ao NDE. De fato, são interconectados. Em vez de estabelecer ações específicas no presente PPC, são fornecidos princípios adotados pelo NDE do curso. Ou seja, orientar os estudantes do curso a cada início do período letivo acerca das normas da UFG, de prazos, da meta de integralização curricular de cada um deles, são algumas ações relevantes, tendo em vista tais princípios.</br></br>\
						A avaliação da aprendizagem pode ser materializada de várias formas. São comuns avaliações (provas) escritas e individuais, a avaliação por meio de relatórios ou trabalhos escritos e apresentações orais, dentre outras. A avaliação contínua por meio de exercícios realizados ao longo de toda uma disciplina também é uma forma. De fato, vale ressaltar que um método adequado de avaliação em um cenário não o é em outro.</br></br>\
						A avaliação do processo de ensino e aprendizagem do BES deve atender, no seu planejamento e na forma contínua de sua execução, o estipulado pelo Regulamento Geral dos Cursos de Graduação (RGCG) da UFG [CEPEC 2012], notadamente em seu Capítulo IV, Seção 1 - “Da verificação da Aprendizagem”.</br></br>\
						Cabe ressaltar que o Sistema de Avaliação do BES tem como objetivo primeiro de sua aplicação, por meio de sua Estrutura Curricular, utilizando instrumentos pedagógicos norteados pelos Princípios Norteadores , permitir que cada estudante adquira o perfil desejado.</br></br>\
						A avaliação do estudante deve levar em consideração não apenas o atendimento de requisitos técnicos de produtos e processos das diversas disciplinas da Engenharia de Software, mas também demonstrar postura ética e profissional ao desenvolver ações do curso.</br></br>\
						Convém destacar que as disciplinas específicas de Engenharia de Software são acompanhadas, cada uma delas, de seção de “Condições mínimas”, que identificam elementos obrigatórios a serem satisfeitos pelo estudante para ser considerado aprovado na disciplina. Embora essa seja uma interpretação correta, a intenção é estabelecer um contrato claro do compromisso do estudante e do docente com a disciplina em questão. A avaliação de cada uma dessas disciplinas, portanto, necessariamente deve observar as condições mínimas estabelecidas. De fato, a condução de toda a disciplina deve ser orientada por tais condições.</br></br>\
						Dada a especificidade da disciplina “Prática em Engenharia de Software”, o sistema de avaliação também é específico. Nesse caso, as avaliações devem envolver o domínio de processos e a geração de produtos de Engenharia de Software. Em particular, atividades avaliativas podem ser realizadas mesclando teoria e prática em um ambiente real de desenvolvimento de software, no qual a qualidade estabelecida para os entregáveis do projeto em questão é verificada.</p>'
		},
		{
			titulo: 'AvaliacaoProjeto',
			conteudo: '<p><h1>Avaliação do Projeto de Curso</h1></br></br>\
			O presente PPC deverá ser revisado formalmente de cinco em cinco anos, em ação proativa, ou em intervalo de tempo menor, na ocorrência de evento que justifique tal decisão.</br></br>\
			O NDE é responsável pelas revisões do PPC e, em particular, por contínua vigilância da adequação do PPC ao cenário corrente. Esse esforço se realizada de duas formas. Uma no sentido de fazer com que as orientações do PPC sejam observadas no cotidiano do curso e outra, onde considerado oportuno, na análise de possíveis melhorias para reagir adequadamente às mudanças do ambiente.</br></br>\
			Ao acompanhar o curso, o NDE continuamente coleta, detecta e propõe alterações. As demandas podem se originar dos estudantes, dos docentes e de outras fontes como os resultados dos estudantes do curso no Exame Nacional de Desempenho de Estudantes (ENADE).</p>'
		},
		{
			titulo: 'Politica',
			conteudo: '<p><h1>Política de Qualificação</h1></br></br>\
			Desde a criação o Instituto de Informática implementa uma política vigorosa de capacitação do seu corpo docente, a qual inclui a meta de que todos os docentes tenham a titulação mínima de doutor. De fato, a liberação de docentes para prosseguirem os seus estudos de pós-graduação é uma prática comum, em consequência, nenhum pedido para afastamento com o propósito de realizar o doutorado foi negado até o momento. Essa política é acrescentada de regras institucionalizadas para a concessão de afastamento para o pós-doutorado e de licença para capacitação.</br></br>\
			A qualificação de docentes do INF também pode ser obtida pela sua participação em congressos, simpósios, dentre outros eventos, quer seja nos papéis de autor de artigo, organizador de evento, membro de comitê de programa ou avaliador de artigo. O Instituto de Informática ainda financia ou co-financia viagens e inscrições de seus docentes em congressos e simpósios importantes, principalmente quando há publicação de artigo.</br></br>\
			Em harmonia com a política de capacitação docente, o INF é favorável ao aprimoramento e à capacitação de seu corpo Técnico-Administrativo em Educação (TAE). Normalmente, um TAE faz solicitação ao diretor, encarregado de registrar as intenções de afastamento no plano anual de capacitação e conduzir a apreciação das intenções pelo Conselho Diretor do INF, haja vista que é do interesse da unidade fomentar a especialização e capacitação dos seus profissionais.</br></br>\
			É frequente a liberação das atividades de TAE para que possam participar de treinamentos, tanto em cursos esporádicos quanto em programas de pós-graduação. Em tempo, as ações de extensão do INF reservam vagas exclusivas para participação de TAEs, sem necessidade de pagamento (quando é o caso). Do ponto de vista legal, o INF se apoia na Resolução CEPEC 1286/2014 de 2014 [CEPEC 2014], que regulamenta o afastamento de docentes para cursar Mestrado, Doutorado e estágios Pós-Doutorais, e na Resolução CONSUNI 02/2014 [CONSUNI 2014], que regulamenta o Programa de Capacitação e o Plano Anual de Capacitação dos TAEs. Em consonância com a Resolução CEPEC 1286/2014, o INF instrui o afastamento de docentes com a Resolução CD/INF n. 01 de 2014, que dá suporte ao planejamento administrativo e incentiva a participação de seus docentes, em cursos de doutorado, pós-doutorado e capacitação, no país e no exterior, de acordo com a sua política de pessoal para o ensino, a pesquisa, a extensão e a administração.</br></br>\
			Por fim, cabe ao NDE monitorar o PPC e, consequentemente, promover ações que promovam a qualidade dos serviços oferecidos tanto por docentes quanto por TAEs.</p>'
		},
		{
			titulo: 'PPC',
			conteudo: '<p><h1>Download do PPC</h1></br></br>\
			Para download do PPC 2017-1 em PDF clique no botão abaixo: </br></br>\
			<a class="btn btn-primary" href="content/ppcESPrograd.pdf" target="_blank">Download</a></p>'
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
