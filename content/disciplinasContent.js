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

});
