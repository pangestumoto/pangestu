$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= 200){
        $("#myNav").addClass('bg-light');
        $(".navbar").addClass('navbar-light');
        $(".navbar").removeClass('navbar-dark');
    } else {
        $("#myNav").removeClass('bg-light');
        $(".navbar").removeClass('navbar-light');
        $(".navbar").addClass('navbar-dark');
    }
});