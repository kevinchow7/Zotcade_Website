$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    $('#text').css({
        'transform': 'translate(0px, '+ wScroll/1.5 +'%)'
    });
    
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".jumbotron").css({"-webkit-filter": "blur("+pixs*1.2+"px)","filter": "blur("+pixs*1.2+"px)" })   

});

