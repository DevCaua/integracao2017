angular.module('ocurso').controller('PagesController', function($scope, $window, localStorage) {

  var acessibilidadeBlue = 'contrasteAzul';
  var acessibilidadeBlackYellow = 'contrastePretoAmarelo';
  var acessibilidadeYellow = 'contrasteAmarelo';
  var acessibilidadeSem = 'contrasteNulo';
  var arrayAcessibilidade = [];

  $scope.arrayConvertidoParaBoolean = [];
  $scope.arrayConvertidoParaString = [];
  $scope.arrayAcessibilidadeFonte = [];
  $scope.arrayAcessibilidadeTotal = [];
  $scope.arrayRecebido = [];
  $scope.tamanho = 13;
  $scope.tamanhoFonte = $window.fonte;

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
  $scope.tamanhoFonte = $scope.arrayConvertidoParaBoolean[4];
  $scope.tamanho = $scope.arrayConvertidoParaBoolean[4];

  console.log($scope.arrayConvertidoParaBoolean);


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

  // atribui o tamanho da fonte de acordo com a acessibilidade escolhida
  $scope.atribuiAcessibilidadeFonte = function(tipoFonte){
    $scope.inicializaFonte();
    $scope.tamanhoFonte = $window.fonte;
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonte);
    $scope.atribuiValorFonte();
  }

  $scope.atribuiValorFonte = function(){
    arrayAcessibilidade[4] = $scope.tamanhoFonte;
    console.log(arrayAcessibilidade);
    localStorage.setData(arrayAcessibilidade);
  }

 //inicializa as fontes
  $scope.inicializaFonte = function(){
    $scope.arrayAcessibilidadeFonte = [];
    localStorage.clearData();
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
