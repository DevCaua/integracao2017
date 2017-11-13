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

  var tamanhoFonte;
  var tamanhoFonteLogoLarge;
  var tamanhoFonteLogoSmall;
  var tamanhoFonteNavItem;
  var tamanhoFonteNavLateral;
  var tamanhoFonteNomeBotao;
  var tamanhoFonteDescricaoItem;

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
    atribuiValor(tamanhoFonteLogoLarge, tamanhoFonteLogoSmall, tamanhoFonteNavItem, tamanhoFonteNavLateral);
  }else{
    tamanhoFonte = 16;
    tamanhoFonteLogoLarge = 30;
    tamanhoFonteLogoSmall = 12;
    tamanhoFonteNavItem = 18;
    tamanhoFonteNavLateral = 16;
    tamanhoFonteNomeBotao = 32;
    tamanhoFonteDescricaoItem = 16;
  }

  // busca valor da fonte dos elementos especificos
  window.fonteLogoLarge = parseInt($(".logo-large").css('font-size'), 10);
  window.fonteLogoSmall = parseInt($(".logo-small").css('font-size'), 10);
  window.fonteNavItem = parseInt($(".nav-item").css('font-size'), 10);
  window.fonteNavLateral = parseInt($(".sidebar-title").css('font-size'), 10);

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

      atribuiValor(fonteLogoLarge, fonteLogoSmall, fonteNavItem, fonteNavLateral);
    });

    $('#reduz_fonte').click(function(){
      fonte = fonte-3;
      fonteLogoLarge = fonteLogoLarge-3;
      fonteLogoSmall = fonteLogoSmall-3;
      fonteNavItem = fonteNavItem-3;
      fonteNavLateral = fonteNavLateral-3;
      fonteNomeBotao = fonteNomeBotao-3;
      fonteDescricaoItem = fonteDescricaoItem-3;

      atribuiValor(fonteLogoLarge, fonteLogoSmall, fonteNavItem, fonteNavLateral);
    });

     function atribuiValor(fonteLogoLarge, fonteLogoSmall, fonteNavItem, fonteNavLateral){
      $('.logo-large').css({'font-size' : fonteLogoLarge+'px'});
      $('.logo-small').css({'font-size' : fonteLogoSmall+'px'});
      $('.nav-item').css({'font-size' : fonteNavItem+'px'});
      $('.sidebar-title').css({'font-size' : fonteNavLateral+'px'});
    }
});
