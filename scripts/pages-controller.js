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

  //variaveis para acessibilidade de fonte
  $scope.tamanho = 13;
  $scope.tamanhoNavItem;
  $scope.tamanhoLogoSmall;
  $scope.tamanhoLogoLarge;
  $scope.tamanhoNavLateral;
  $scope.tamanhoNomeBotao;
  $scope.tamanhoDescricaoItem;

  $scope.tamanhoFonte = $window.fonte;
  $scope.tamanhoFonteNavItem = $window.fonteNavItem;
  $scope.tamanhoFonteLogoSmall = $window.fonteLogoSmall;
  $scope.tamanhoFonteLogoLarge = $window.fonteLogoLarge;
  $scope.tamanhoFonteNavLateral = $window.fonteNavLateral;
  $scope.tamanhoFonteNomeBotao = $window.fonteNomeBotao;
  $scope.tamanhoFonteDescricaoItem = $window.fonteDescricaoItem;

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
  $scope.tamanhoFonteNavItem = $scope.arrayConvertidoParaBoolean[5];
  $scope.tamanhoFonteLogoSmall = $scope.arrayConvertidoParaBoolean[6];
  $scope.tamanhoFonteLogoLarge = $scope.arrayConvertidoParaBoolean[7];
  $scope.tamanhoFonteNavLateral = $scope.arrayConvertidoParaBoolean[8];
  $scope.tamanhoFonteNomeBotao = $scope.arrayConvertidoParaBoolean[9];
  $scope.tamanhoFonteDescricaoItem = $scope.arrayConvertidoParaBoolean[10];

  // define os tamanhos para view
  $scope.tamanho = $scope.tamanhoFonte;
  $scope.tamanhoNavItem = $scope.tamanhoFonteNavItem;
  $scope.tamanhoLogoSmall = $scope.tamanhoFonteLogoSmall;
  $scope.tamanhoLogoLarge = $scope.tamanhoFonteLogoLarge;
  $scope.tamanhoNavLateral = $scope.tamanhoFonteNavLateral;
  $scope.tamanhoNomeBotao = $scope.tamanhoFonteNomeBotao;
  $scope.tamanhoDescricaoItem = $scope.tamanhoFonteDescricaoItem;

  console.log($scope.tamanhoNavItem);
  console.log($scope.tamanhoLogoSmall);
  console.log($scope.tamanhoLogoLarge);
  console.log($scope.tamanhoNavLateral);
  console.log($scope.tamanhoNomeBotao);
  console.log($scope.tamanhoDescricaoItem);

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
    if(acessibilidadeFonteMaior == tipoFonte){
      $scope.tamanhoFonte = $window.fonte+3;
      $scope.tamanhoFonteNavItem = $window.fonteNavItem+3;
      $scope.tamanhoFonteLogoSmall = $window.fonteLogoSmall+3;
      $scope.tamanhoFonteLogoLarge = $window.fonteLogoLarge+3;
      $scope.tamanhoFonteNavLateral = $window.fonteNavLateral+3;
      $scope.tamanhoFonteNomeBotao = $window.fonteNomeBotao+3;
      $scope.tamanhoFonteDescricaoItem = $window.fonteDescricaoItem+3;
      console.log($window.fonteNavItem);
      console.log($window.fonteLogoSmall);
      console.log($window.fonteLogoLarge);
      console.log($window.fonteNavLateral);
      console.log($window.fonteNomeBotao);
      console.log($window.fonteDescricaoItem);
    }else{
      $scope.tamanhoFonte = $window.fonte-3;
      $scope.tamanhoFonteNavItem = $window.fonteNavItem-3;
      $scope.tamanhoFonteLogoSmall = $window.fonteLogoSmall-3;
      $scope.tamanhoFonteLogoLarge = $window.fonteLogoLarge-3;
      $scope.tamanhoFonteNavLateral = $window.fonteNavLateral-3;
      $scope.tamanhoFonteNomeBotao = $window.fonteNomeBotao-3;
      $scope.tamanhoFonteDescricaoItem = $window.fonteDescricaoItem-3;
    }
    $scope.tamanho = $scope.tamanhoFonte;
    $scope.colocaValoresNaLista();
    $scope.atribuiValorFonte();
  }

  // atribui valor para localStorage
  $scope.atribuiValorFonte = function(){
    arrayAcessibilidade[4] = $scope.tamanhoFonte;
    arrayAcessibilidade[5] = $scope.tamanhoFonteNavItem;
    arrayAcessibilidade[6] = $scope.tamanhoFonteLogoSmall;
    arrayAcessibilidade[7] = $scope.tamanhoFonteLogoLarge;
    arrayAcessibilidade[8] = $scope.tamanhoFonteNavLateral;
    arrayAcessibilidade[9] = $scope.tamanhoFonteNomeBotao;
    arrayAcessibilidade[10] = $scope.tamanhoFonteDescricaoItem;
    arrayAcessibilidade = $scope.trocaValorNuloFonte(arrayAcessibilidade);
    console.log(arrayAcessibilidade);
    localStorage.setData(arrayAcessibilidade);
  }

  //coloca valores na lista
  $scope.colocaValoresNaLista = function(){
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonte);
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonteNavItem);
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonteLogoSmall);
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonteLogoLarge);
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonteNavLateral);
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonteNomeBotao);
    $scope.arrayAcessibilidadeFonte.push($scope.tamanhoFonteDescricaoItem);
  }

  $scope.trocaValorNuloFonte = function(arrayAcessibilidade){
    var nan = "NaN"
    for(var i = 4; i < 11; i++){
      console.log(arrayAcessibilidade[i].toString() == nan);
      if(arrayAcessibilidade[i] == 'undefined' || arrayAcessibilidade[i].toString() == nan){
        console.log(i);
        if(i == 4){
          arrayAcessibilidade[i] = $scope.tamanhoFonte;
        }else if(i == 5){
          arrayAcessibilidade[i] = $scope.tamanhoFonteNavItem;
        }else if(i == 6){
          arrayAcessibilidade[i] = $scope.tamanhoFonteLogoSmall;
        }else if(i == 7){
          arrayAcessibilidade[i] = $scope.tamanhoFonteLogoLarge;
        }else if(i == 8){
          arrayAcessibilidade[i] = $scope.tamanhoFonteNavLateral;
          console.log($scope.tamanhoFonteNavLateral);
        }else if(i == 9){
          arrayAcessibilidade[i] = $scope.tamanhoFonteNomeBotao;
        }else if(i == 10){
          arrayAcessibilidade[i] = $scope.tamanhoFonteDescricaoItem;
        }
      }
    }
    return arrayAcessibilidade;
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
