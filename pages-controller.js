angular.module('ocurso').controller('PagesController', function($scope) {

  var acessibilidadeBlue = 'contrasteAzul';
  var acessibilidadeBlackYellow = 'contrastePretoAmarelo';
  var acessibilidadeYellow = 'contrasteAmarelo';
  var acessibilidadeSem = 'contrasteNulo';

  $scope.acessibilidadeBlue = false;
  $scope.acessibilidadeByellow = false;
  $scope.acessibilidadeYellow = false;
  $scope.acessibilidadeNula = false;

  $scope.buscaAcessibilidade = function(tipoAcessibilidade){
      $scope.inicializa();
      if(tipoAcessibilidade == acessibilidadeBlue){
          $scope.acessibilidadeBlue = true;
      }else if(tipoAcessibilidade == acessibilidadeBlackYellow){
          $scope.acessibilidadeByellow = true;
      }else if(tipoAcessibilidade == acessibilidadeYellow){
          $scope.acessibilidadeYellow = true;
      }else{
          $scope.acessibilidadeNula = true;
      }
  }

  $scope.inicializa = function(){
    $scope.acessibilidadeBlue = false;
    $scope.acessibilidadeByellow = false;
    $scope.acessibilidadeYellow = false;
    $scope.acessibilidadeNula = false;
  }

});
