$(document).ready(function () {

  jQuery('.toggle-switch').click( function(e) {
    jQuery('.collapse').collapse('hide');
  });

  $('.disc').click(function() {
    $('.disc').removeClass('selected');
    $(this).addClass('selected');
  });

$("#toggle").click(function () {
    if ($(this).data('name') == 'show') {
        $("#sidebar-wrapper").css("width", "45px")
        $(this).data('name', 'hide')
        $('#icon').removeClass('fa fa-compress').addClass('fa fa-expand')
    } else {
        $("#sidebar-wrapper").css("width", "225px")
        $(this).data('name', 'show')
        $('#icon').removeClass('fa fa-expand').addClass('fa fa-compress')
    }
  });

  var lineHeight;
  var tamanhoFonte;
  var tamanhoFonteLogoLarge;
  var tamanhoFonteLogoSmall;
  var tamanhoFonteNavItem;
  var tamanhoFonteNavLateral;
  var tamanhoFonteNomeBotao;
  var tamanhoFonteDescricaoItem;
  var tamanhoDiv;
  var tamanhoSubMenuDisciplinas;

  if($('#tamanho-fonte').text() != undefined && $('#tamanho-fonte').text() != 'NaN' && $('#tamanho-fonte').text() != ""
    && $('#tamanho-navItem').text() != undefined && $('#tamanho-navItem').text() != 'NaN' && $('#tamanho-navItem').text() != ""
    && $('#tamanho-logoSmall').text() != undefined && $('#tamanho-logoSmall').text() != 'NaN' && $('#tamanho-logoSmall').text() != ""
    && $('#tamanho-logoLarge').text() != undefined && $('#tamanho-logoLarge').text() != 'NaN' && $('#tamanho-logoLarge').text() != ""
    && $('#tamanho-navLateral').text() != undefined && $('#tamanho-navLateral').text() != 'NaN' && $('#tamanho-navLateral').text() != ""){
    tamanhoFonte = parseInt($('#tamanho-fonte').text());
    tamanhoFonteLogoLarge = parseInt($('#tamanho-logoLarge').text());
    tamanhoFonteLogoSmall = parseInt($('#tamanho-logoSmall').text());
    tamanhoFonteNavItem = parseInt($('#tamanho-navItem').text());
    tamanhoFonteNavLateral = parseInt($('#tamanho-navLateral').text());
    lineHeight = parseInt($('#tamanho-fonte').text()) * 5;
    tamanhoSubMenuDisciplinas = parseInt($('#tamanho-fonte').text()) - 2;
    atribuiValor(tamanhoFonteLogoLarge, tamanhoFonteLogoSmall, tamanhoFonteNavItem, tamanhoFonteNavLateral,tamanhoFonte ,lineHeight, tamanhoSubMenuDisciplinas);
  }else{
    tamanhoSubMenuDisciplinas = 14;
    tamanhoFonte = 16;
    tamanhoFonteLogoLarge = 30;
    tamanhoFonteLogoSmall = 12;
    tamanhoFonteNavItem = 18;
    tamanhoFonteNavLateral = 16;
    tamanhoFonteNomeBotao = 32;
    tamanhoFonteDescricaoItem = 16;
    tamanhoDiv = 16;
    lineHeight = 80;
  }

  // busca valor da fonte dos elementos especificos
  window.fonteLogoLarge = parseInt($(".logo-large").css('font-size'), 10);
  window.fonteLogoSmall = parseInt($(".logo-small").css('font-size'), 10);
  window.fonteNavItem = parseInt($(".nav-item").css('font-size'), 10);
  window.fonteNavLateral = parseInt($(".sidebar-title").css('font-size'), 10);

  lineHeight =  parseInt($(".sidebar-nav li").css('line-height'), 10);
  tamanhoSubMenuDisciplinas =  parseInt($(".disc").css('font-size'), 10);

  window.fonte = tamanhoFonte;
  window.fonteLogoLarge = tamanhoFonteLogoLarge;
  window.fonteLogoSmall = tamanhoFonteLogoSmall;
  window.fonteNavItem = tamanhoFonteNavItem;
  window.fonteNavLateral = tamanhoFonteNavLateral;
  window.fonteNomeBotao = tamanhoFonteNomeBotao;
  window.fonteDescricaoItem = tamanhoFonteDescricaoItem;

    $('#aumenta_fonte').click(function(){
      fonte = fonte+3;
      fonteLogoLarge = fonteLogoLarge+3;
      fonteLogoSmall = fonteLogoSmall+3;
      fonteNavItem = fonteNavItem+3;
      fonteNavLateral = fonteNavLateral+3;
      fonteNomeBotao = fonteNomeBotao+3;
      fonteDescricaoItem = fonteDescricaoItem+3;
      lineHeight =  lineHeight+20;
      tamanhoSubMenuDisciplinas = tamanhoSubMenuDisciplinas+3;

      atribuiValor(fonteLogoLarge, fonteLogoSmall, fonteNavItem, fonteNavLateral, fonte, lineHeight, tamanhoSubMenuDisciplinas);
    });

    $('#reduz_fonte').click(function(){
      fonte = fonte-3;
      fonteLogoLarge = fonteLogoLarge-3;
      fonteLogoSmall = fonteLogoSmall-3;
      fonteNavItem = fonteNavItem-3;
      fonteNavLateral = fonteNavLateral-3;
      fonteNomeBotao = fonteNomeBotao-3;
      fonteDescricaoItem = fonteDescricaoItem-3;
      lineHeight =  lineHeight-20;
      tamanhoSubMenuDisciplinas = tamanhoSubMenuDisciplinas-3;

      atribuiValor(fonteLogoLarge, fonteLogoSmall, fonteNavItem, fonteNavLateral, fonte, lineHeight, tamanhoSubMenuDisciplinas);
    });

     function atribuiValor(fonteLogoLarge, fonteLogoSmall, fonteNavItem, fonteNavLateral, fonte, lineHeight, tamanhoSubMenuDisciplinas){
      $('.logo-large').css({'font-size' : fonteLogoLarge+'px'});
      $('.logo-small').css({'font-size' : fonteLogoSmall+'px'});
      $('.nav-item').css({'font-size' : fonteNavItem+'px'});
      $('.sidebar-title').css({'font-size' : fonteNavLateral+'px'});
      $('.ng-scope').css({'font-size' : fonte+'px'});
      $('.disc ').css({'font-size' : tamanhoSubMenuDisciplinas+'px'});
      $('.sidebar-nav li').css({'line-height' : lineHeight+'px'});
    }
});
