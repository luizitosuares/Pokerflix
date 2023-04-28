$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(document).ready(function() {
    $('.scroll-link').click(function(e) {
        e.preventDefault(); // previne o comportamento padrão do link
        var target = $(this).attr('data-target'); // pega o valor do atributo data-target do link clicado
        $('html, body').animate({
            scrollTop: $(target).offset().top // rola a página para a div com o id correspondente
        }, 1000); // tempo em milissegundos da animação de rolagem suave
    });
});