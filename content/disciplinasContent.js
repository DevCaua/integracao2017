angular.module('ocurso', ['ui.router', 'ngResource', 'minhasDiretivas'])
.config(function($stateProvider) {

	var computacaoSociedadeState = {
        name: 'computacaoSociedade',
        url: '/Computacao_e_Sociedade',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Primeiro',
      		subMenuSelecionado: 'ComputacaoSociedade'
      	}
    }

    var intProgramacaoState = {
        name: 'intProgramacao',
        url: '/Introducao_a_Programacao',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Primeiro',
      		subMenuSelecionado: 'IntProgramacao'
      	}
    }

    var calculoState = {
        name: 'calculo',
        url: '/Calculo_1A',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Primeiro',
      		subMenuSelecionado: 'Calculo'
      	}
    }

    var fundMatematicaState = {
        name: 'fundMatematica',
        url: '/Fundamentos_de_Matematica_para_Computacao',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Primeiro',
      		subMenuSelecionado: 'FundMatematica'
      	}
    }

    var arquiteturaState = {
        name: 'arquitetura',
        url: '/Arquitetura_De_Computadores',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Segundo',
      		subMenuSelecionado: 'Arquitetura'
      	}
    }

    var algoritmos1State = {
        name: 'algoritmos1',
        url: '/Algoritmos_e_Estrutura_de_Dados_1',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Segundo',
      		subMenuSelecionado: 'Algoritmos1'
      	}
    }

    var probEstatisticaState = {
        name: 'probEstatistica',
        url: '/Probabilidade_e_Estatistica',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Segundo',
      		subMenuSelecionado: 'ProbEstatistica'
      	}
    }

    var algebraLinearState = {
        name: 'algebraLinear',
        url: '/Arquitetura_Linear',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Segundo',
      		subMenuSelecionado: 'AlgebraLinear'
      	}
    }

    var logicaMatState = {
        name: 'logicaMat',
        url: '/Logica_Matematica',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Segundo',
      		subMenuSelecionado: 'LogicaMat'
      	}
    }

    var pooState = {
        name: 'poo',
        url: '/Programacao_Orientada_Objetos',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'Poo'
      	}
    }

    var algoritmos2State = {
        name: 'algoritmos2',
        url: '/Algoritmos_e_Estrutura_de_Dados_2',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'Algoritmos2'
      	}
    }

    var linguagensProgState = {
        name: 'linguagensProg',
        url: '/Linguagens_e_Paradigmas_da_Programacao',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'LinguagensProg'
      	}
    }

    var engenhariaSoftwareState = {
        name: 'engenhariaSoftware',
        url: '/Engenharia_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'EngenhariaSoftware'
      	}
    }

    var sistemasOpState = {
        name: 'sistemasOp',
        url: '/Sistemas_Operacionais',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'SistemasOp'
      	}
    }

    var pesquisaOpState = {
        name: 'pesquisaOp',
        url: '/Pesquisa_Operacional',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'PesquisaOp'
      	}
    }

    var linguagensFormaisState = {
        name: 'linguagensFormais',
        url: '/Linguagens_Formais_e_Automatos',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Terceiro',
      		subMenuSelecionado: 'LinguagensFormais'
      	}
    }

    var analiseAlgState = {
        name: 'analiseAlg',
        url: '/Analise_e_Projeto_de_Algoritmos',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'AnaliseAlg'
      	}
    }

    var ihcState = {
        name: 'ihc',
        url: '/Interacao_Humano_Computador',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'Ihc'
      	}
    }

    var bdState = {
        name: 'bd',
        url: '/Banco_de_Dados',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'BD'
      	}
    }

    var projetoSoftwareState = {
        name: 'projetoSoftware',
        url: '/Projeto_De_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'ProjetoSoftware'
      	}
    }

    var redesCompState = {
        name: 'redesComp',
        url: '/Redes_de_Computadores',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'RedesComp'
      	}
    }

    var linguaBrasileiraState = {
        name: 'linguaBrasileira',
        url: '/Introducao_a_Lingua_Brasileira_de_Sinais',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'LinguaBrasileira'
      	}
    }

    var compiladoresState = {
        name: 'compiladores',
        url: '/Compiladores',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quarto',
      		subMenuSelecionado: 'Compiladores'
      	}
    }

    var construcaoSoftwareState = {
        name: 'construcaoSoftware',
        url: '/Construcao_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quinto',
      		subMenuSelecionado: 'ConstrucaoSoftware'
      	}
    }

    var modelagemSoftwareState = {
        name: 'modelagemSoftware',
        url: '/Modelagem_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quinto',
      		subMenuSelecionado: 'ModelagemSoftware'
      	}
    }

    var processosSoftwareState = {
        name: 'processosSoftware',
        url: '/Processos_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quinto',
      		subMenuSelecionado: 'ProcessosSoftware'
      	}
    }

    var engenhariaSistemaState = {
        name: 'engenhariaSistema',
        url: '/Engenharia_de_Sistemas',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Quinto',
      		subMenuSelecionado: 'EngenhariaSistema'
      	}
    }

    var designSoftwareState = {
        name: 'designSoftware',
        url: '/Design_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Sexto',
      		subMenuSelecionado: 'DesignSoftware'
      	}
    }

    var dominioSoftwareState = {
        name: 'dominioSoftware',
        url: '/Dominio_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Sexto',
      		subMenuSelecionado: 'DominioSoftware'
      	}
    }

    var qualidadeSoftwareState = {
        name: 'qualidadeSoftware',
        url: '/Processos_de_Qualidade_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Sexto',
      		subMenuSelecionado: 'QualidadeSoftware'
      	}
    }

    var gerenciaSoftwareState = {
        name: 'gerenciaSoftware',
        url: '/Gerencia_de_Projeto_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Sexto',
      		subMenuSelecionado: 'GerenciaSoftware'
      	}
    }

    var softwareConcorrenteState = {
        name: 'softwareConcorrente',
        url: '/Software_Concorrente_e_Distribuido',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Setimo',
      		subMenuSelecionado: 'SoftwareConcorrente'
      	}
    }

    var experienciaUsuarioState = {
        name: 'experienciaUsuario',
        url: '/Experiencia_do_Usuario_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Setimo',
      		subMenuSelecionado: 'ExperienciaUsuario'
      	}
    }

    var arquiteturaSoftwareState = {
        name: 'arquiteturaSoftware',
        url: '/Arquitetura_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Setimo',
      		subMenuSelecionado: 'ArquiteturaSoftware'
      	}
    }

    var requisitosSoftwareState = {
        name: 'requisitosSoftware',
        url: '/Requisitos_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Setimo',
      		subMenuSelecionado: 'SoftwareConcorrente'
      	}
    }

    var governancaSoftwareState = {
        name: 'governancaSoftware',
        url: '/Governanca_e_Gestao_dos_Servicos_de_Software',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesDisciplinasController',
      	params:{
      		semestreEscolhido: 'Setimo',
      		subMenuSelecionado: 'GovernancaSoftware'
      	}
    }



    //primeiro semestre
    $stateProvider.state(computacaoSociedadeState);
    $stateProvider.state(intProgramacaoState);
    $stateProvider.state(calculoState);
    $stateProvider.state(fundMatematicaState);

    //segundo semestre
    $stateProvider.state(arquiteturaState);
    $stateProvider.state(algoritmos1State);
    $stateProvider.state(probEstatisticaState);
    $stateProvider.state(algebraLinearState);
    $stateProvider.state(logicaMatState);

    //terceiro semestre
    $stateProvider.state(pooState);
    $stateProvider.state(algoritmos2State);
    $stateProvider.state(linguagensProgState);
    $stateProvider.state(engenhariaSoftwareState);
    $stateProvider.state(sistemasOpState);
    $stateProvider.state(pesquisaOpState);
    $stateProvider.state(linguagensFormaisState);

     //quarto semestre
    $stateProvider.state(analiseAlgState);
    $stateProvider.state(ihcState);
    $stateProvider.state(bdState);
    $stateProvider.state(projetoSoftwareState);
    $stateProvider.state(redesCompState);
    $stateProvider.state(linguaBrasileiraState);
    $stateProvider.state(compiladoresState);

    //quinto semestre
    $stateProvider.state(construcaoSoftwareState);
    $stateProvider.state(modelagemSoftwareState);
    $stateProvider.state(processosSoftwareState);
    $stateProvider.state(engenhariaSistemaState);

    //sexto semestre
    $stateProvider.state(designSoftwareState);
    $stateProvider.state(dominioSoftwareState);
    $stateProvider.state(qualidadeSoftwareState);
    $stateProvider.state(gerenciaSoftwareState);

    //setimo semestre
    $stateProvider.state(softwareConcorrenteState);
    $stateProvider.state(experienciaUsuarioState);
    $stateProvider.state(arquiteturaSoftwareState);
    $stateProvider.state(requisitosSoftwareState);
    $stateProvider.state(governancaSoftwareState);
});
