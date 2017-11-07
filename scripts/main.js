angular.module('ocurso', ['ui.router', 'ngResource', 'minhasDiretivas'])
.config(function($stateProvider) {

    var apresentacaoState = {
        name: 'apresentacao',
        url: '/apresentacao',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
      	controller: 'TemplatesController',
      	params:{
      		menuEscolhido: 'Curso',
      		subMenuSelecionado: 'Apresentacao'
      	}
    }

    var contextoState = {
        name: 'contexto',
        url: '/contexto',
        template: '<template-conteudo class="conteudo-page" template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Contexto'
        }
    }

    var motivacaoState = {
        name: 'motivacao',
        url: '/motivacao',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Motivacao'
        }
    }

    var objetivoState = {
        name: 'objetivos',
        url: '/objetivos',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Objetivos e Expectativas'
        }
    }

    var principioState = {
        name: 'principios',
        url: '/principios',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Principios'
        }
    }


    var NDEState = {
        name: 'NDE',
        url: '/NDE',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'NDE'
        }
    }

    var TCCState = {
        name: 'TCC',
        url: '/TCC',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'TCC'
        }
    }

    var matrizState = {
        name: 'matriz',
        url: '/matriz',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'MatrizCurricular'
        }
    }

    var nlState = {
        name: 'nl',
        url: '/nucleo_livre',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'NL'
        }
    }

    var fluxoState = {
        name: 'fluxo',
        url: '/fluxo',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'FluxoSugerido'
        }
    }

    var cargaState = {
        name: 'carga',
        url: '/carga',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'CargaHoraria'
        }
    }

    var atividadesState = {
        name: 'atividades',
        url: '/atividades',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'AtividadesComplementares'
        }
    }

    var estagioState = {
        name: 'estagio',
        url: '/estagio',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'Estagio'
        }
    }

    var equivalenciasState = {
        name: 'equivalencias',
        url: '/equivalencias',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'Equivalencias'
        }
    }

    var ensinoState = {
        name: 'ensino-pesquisa',
        url: '/ensino-pesquisa',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'EnsinoPesquisa'
        }
    }

    var avaliacaoProcessoState = {
        name: 'avaliacao-processo',
        url: '/avaliacao-processo',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'AvaliacaoProcesso'
        }
    }

    var avaliacaoProjetoState = {
        name: 'avaliacao-projeto',
        url: '/avaliacao-projeto',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'AvaliacaoProjeto'
        }
    }

    var politicaState = {
        name: 'politica',
        url: '/politica',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'Politica'
        }
    }

    var ppcState = {
        name: 'ppc',
        url: '/ppc',
        template: '<template-conteudo template="obterTemplate()"></template-conteudo>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'PPC'
        }
    }

    // state Curso
    $stateProvider.state(apresentacaoState);
    $stateProvider.state(contextoState);
    $stateProvider.state(motivacaoState);
    $stateProvider.state(objetivoState);
    $stateProvider.state(principioState);
    $stateProvider.state(NDEState);
    $stateProvider.state(TCCState);

    // state Estrutura Curricular
    $stateProvider.state(matrizState);
    $stateProvider.state(nlState);
    $stateProvider.state(fluxoState);
    $stateProvider.state(cargaState);

    // state Informações
    $stateProvider.state(atividadesState);
    $stateProvider.state(ensinoState);
    $stateProvider.state(equivalenciasState);
    $stateProvider.state(estagioState);
    $stateProvider.state(avaliacaoProcessoState);
    $stateProvider.state(avaliacaoProjetoState);
    $stateProvider.state(politicaState);
    $stateProvider.state(ppcState);

  });
