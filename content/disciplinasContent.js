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

        var aalgebraLinearState = {
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


    //primeiro semestre
    $stateProvider.state(computacaoSociedadeState);
    $stateProvider.state(intProgramacaoState);
    $stateProvider.state(calculoState);
    $stateProvider.state(fundMatematicaState);
});
