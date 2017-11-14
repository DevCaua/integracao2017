angular.module('ocurso').controller('PagesController', function($scope, $window, localStorage) {

  //variaveis gerais
  var acessibilidadeBlue = 'contrasteAzul';
  var acessibilidadeBlackYellow = 'contrastePretoAmarelo';
  var acessibilidadeYellow = 'contrasteAmarelo';
  var acessibilidadeSem = 'contrasteNulo';
  var acessibilidadeFonteMaior = 'fonteMaior';
  var acessibilidadeFonteMenor = 'fonteMenor';
  var arrayAcessibilidade = [];

  //variaveis para acessibilidade de cor
  $scope.arrayConvertidoParaBoolean = [];
  $scope.arrayConvertidoParaString = [];
  $scope.arrayAcessibilidadeFonte = [];
  $scope.arrayAcessibilidadeTotal = [];
  $scope.arrayRecebido = [];


  //função responsável por ler os dados do localStorage ao carregar o controller
  (function () {
    var recebeValoresAcessibilidade = localStorage.getData();
    console.log(recebeValoresAcessibilidade);
    if(recebeValoresAcessibilidade != null){
      $scope.arrayConvertidoParaString = recebeValoresAcessibilidade.split(',');
    }
  }());

  // converte o array de string para array de booleano
  $scope.conversorStringParaBooleano = function(arrayDeString){
    arrayDeString.forEach(function(atual){
      if(atual == "false"){
        $scope.arrayConvertidoParaBoolean.push(false);
      }else if(atual == "true"){
        $scope.arrayConvertidoParaBoolean.push(true);
      }else{
        $scope.arrayConvertidoParaBoolean.push(atual);
      }
    })
  }

  // atribui valor do localStorage as variaveis
  $scope.conversorStringParaBooleano($scope.arrayConvertidoParaString);
  $scope.acessibilidadeBlue = $scope.arrayConvertidoParaBoolean[0];
  $scope.acessibilidadeByellow = $scope.arrayConvertidoParaBoolean[1];
  $scope.acessibilidadeYellow = $scope.arrayConvertidoParaBoolean[2];
  $scope.acessibilidadeNula = $scope.arrayConvertidoParaBoolean[3];



  // determina as classes da acessibilidade selecionada
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
      $scope.atribuiValor();
      localStorage.setData(arrayAcessibilidade);
  }


  // Inicializa todas variáveis
  $scope.inicializa = function(){
    $scope.acessibilidadeBlue = false;
    $scope.acessibilidadeByellow = false;
    $scope.acessibilidadeYellow = false;
    $scope.acessibilidadeNula = false;
    arrayAcessibilidade = [];
    localStorage.clearData();
  }

  // Atribui o valor
  $scope.atribuiValor = function(){
      arrayAcessibilidade.push($scope.acessibilidadeBlue);
      arrayAcessibilidade.push($scope.acessibilidadeByellow);
      arrayAcessibilidade.push($scope.acessibilidadeYellow);
      arrayAcessibilidade.push($scope.acessibilidadeNula);
      $scope.arrayRecebido = arrayAcessibilidade;
      console.log(arrayAcessibilidade);
  }

});
