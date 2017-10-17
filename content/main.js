angular.module('ocurso', ['ui.router', 'ngResource', 'minhasDiretivas'])
.config(function($stateProvider) {
    
    var apresentacaoState = {
        name: 'apresentacao',
        url: '/apresentacao',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
      	controller: 'TemplatesController',
      	params:{
      		menuEscolhido: 'Curso',
      		subMenuSelecionado: 'Apresentacao'
      	}
    }

    var identificacaoState = {
        name: 'identificacao',
        url: '/identificacao',
        template: '<div><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Identificacao'
        }
    }

    var contextoState = {
        name: 'contexto',
        url: '/contexto',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Contexto'
        }
    }

    var motivacaoState = {
        name: 'motivacao',
        url: '/motivacao',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Motivacao'
        }
    }
  
    var objetivoState = {
        name: 'objetivos',
        url: '/objetivos',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Objetivos'
        }
    }
    
    var principioState = {
        name: 'principios',
        url: '/principios',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Principios'
        }
    }
    
    var expectativaState = {
        name: 'expectativas',
        url: '/expectativas',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Curso',
            subMenuSelecionado: 'Expectativas'
        }
    }

        var matrizState = {
        name: 'matriz',
        url: '/matriz',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'MatrizCurricular'
      }
    }
  
    var fluxoState = {
        name: 'fluxo',
        url: '/fluxo',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'FluxoSugerido'
        }
    }
    
    var cargaState = {
        name: 'carga',
        url: '/carga',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'EC',
            subMenuSelecionado: 'CargaHoraria'
        }
    }

    var atividadesState = {
        name: 'atividades',
        url: '/atividades',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'AtividadesComplementares'
        }
    }

    var estagioState = {
        name: 'estagio',
        url: '/estagio',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'Estagio'
        }
    }  

    var equivalenciasState = {
        name: 'equivalencias',
        url: '/equivalencias',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'Equivalencias'
        }
    }

    var ensinoState = {
        name: 'ensino-pesquisa',
        url: '/ensino-pesquisa',
        template: '<div class="conteudo"><template-conteudo template="obterTemplate()"></template-conteudo></div>',
        controller: 'TemplatesController',
        params:{
            menuEscolhido: 'Informacoes',
            subMenuSelecionado: 'EnsinoPesquisa'
        }
    }

    // state Curso
    $stateProvider.state(apresentacaoState);
    $stateProvider.state(identificacaoState);
    $stateProvider.state(contextoState);
    $stateProvider.state(motivacaoState);
    $stateProvider.state(objetivoState);
    $stateProvider.state(principioState);
    $stateProvider.state(expectativaState);

    // state Estrutura Curricular
    $stateProvider.state(matrizState);
    $stateProvider.state(fluxoState);
    $stateProvider.state(cargaState);

    // state Outras Informações
    $stateProvider.state(atividadesState);
    $stateProvider.state(ensinoState);
    $stateProvider.state(equivalenciasState);
    $stateProvider.state(estagioState);
    
  });

