angular.module('minhasDiretivas', [])
.directive('templateConteudo', function ($compile) {

    return{
        restrict: 'E',
        scope: {
        	template: '&'
        },
        link: function(scope, element){
        	var resultado = scope.template();
        	element.html(resultado);
        }
    }

});


// quando for chamar a diretiva no html, utilizar a seguinte sintaxe: <template-conteudo template="obterTemplate('Disciplinas', 'disciplina1')"></template-conteudo>
// não esquecer de chamar a controller TemplatesController