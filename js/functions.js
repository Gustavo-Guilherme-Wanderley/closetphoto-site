$(function(){

    /*Usa fadeIn e fadeOut para mostrar e esconder o nome,
    além de destaca-lo, diminuindo a opacidade da imagem*/
    mostrarNome();

    function mostrarNome() {
        let box = $('.box');

        box.hover(function(){
            $(this).children('span').fadeIn(240);
            $(this).children('.imagem_single').css('opacity','0.4');
        },function(){
            $(this).children('span').fadeOut(240);
            $(this).children('.imagem_single').css('opacity','1');
        })
    }

})