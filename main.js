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
        template: ' <div class="conteudo"> \
            O Bacharelado em Engenharia de Software foi criado em 2009, sendo a \
            UFG a universidade brasileira pioneira. O curso é focado na graduação \
            de um profissional capaz de especificar software; projetar (design) \
            software (inclui arquitetura de software); construir (programar) software \
            com qualidade; realizar atividades de manutenção de software, além de \
            trabalhar em equipe, comunicar e escrever bem. Tem a duração de 9 semestres, \
            predominantemente no turno noturno. </div>'
      
    }
  
    var fluxoState = {
        name: 'fluxo',
        url: '/fluxo',
        template: ' <div class="conteudo"> \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo viverra, tempus dolor eu, ultricies justo. Integer efficitur erat tellus, sit amet malesuada lorem pellentesque et. In nec nibh arcu. Mauris a ante velit. Sed metus ipsum, bibendum ac pretium et, semper quis magna. Aenean nibh leo, lacinia tincidunt est sed, malesuada ultricies urna. Suspendisse non quam at risus gravida posuere. \
            Quisque quis vestibulum neque. In sed tellus id nisi tincidunt porta non non velit. Integer feugiat fermentum diam commodo molestie. Aenean convallis commodo condimentum. Cras quis varius ex, sit amet facilisis neque. Nullam eu aliquet nulla, sed sodales augue. Donec luctus nunc ut purus fermentum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum aliquam malesuada. </div>'
    }
    
    var cargaState = {
        name: 'carga',
        url: '/carga',
        template: ' <div class="conteudo"> \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a egestas velit, \
            a venenatis ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. \
            Praesent nulla ligula, auctor ut hendrerit porta, sagittis eget diam. Proin mauris ante, \
            eleifend non dapibus id, porttitor eu arcu. Curabitur laoreet tempor odio, eget venenatis \
            dui interdum feugiat. Pellentesque eu nunc sapien. In arcu sem, faucibus sit amet lectus vel, \
            lobortis vehicula velit. \
            Pellentesque non felis non lorem pulvinar varius nec nec mauris. Curabitur \
            pellentesque dolor urna. Aliquam nec nisi condimentum, tristique orci eget, iaculis urna. \
            Praesent mattis malesuada scelerisque. Nullam eget sagittis enim. Nulla porttitor elit \
            eu arcu scelerisque, non consequat felis auctor. Aenean sed porttitor purus. Praesent \
            facilisis vitae neque a egestas. Ut rhoncus elit nec ante aliquet rhoncus. Phasellus nec nunc posuere libero euismod. \
            Maecenas placerat, nibh ac volutpat elementum, eros libero ultrices eros, eu aliquet \
            augue massa quis sem. Praesent arcu dui, luctus varius dui id, congue euismod augue. \
            Ut consectetur iaculis magna, sed fermentum augue posuere feugiat. Pellentesque condimentum gravida urna id. </div>'
    }
  
    $stateProvider.state(apresentacaoState);
    $stateProvider.state(identificacaoState);
    $stateProvider.state(contextoState);
    $stateProvider.state(motivacaoState);
    $stateProvider.state(objetivoState);
    $stateProvider.state(principioState);
    $stateProvider.state(expectativaState);
    $stateProvider.state(matrizState);
    $stateProvider.state(fluxoState);
    $stateProvider.state(cargaState);
  });

