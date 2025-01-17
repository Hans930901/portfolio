$(function(){
    $('a[href^="#"]').on('click', function(e){
        let nTop = this.hash === "" ? 0 : $(this.hash).offset().top - 100;
        $('html, body').animate({scrollTop: nTop}, 600)
    })
})