function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('.sidebar-nav').offset().top;
    if (window_top > div_top) {
        $('#section-title').addClass('stick');
    } 
    else {
        $('#section-title').removeClass('stick');
    }
    }
    
    $(function () {
        $(window).scroll(function(){
            $(window).scroll(function() {
                $(".header-caption").css("opacity", 1 - $(window).scrollTop() / 250)
            });
            sticky_relocate();
            if($(window).scrollTop() > $('#band-members-header').offset().top 
                && $(window).scrollTop() < $('#band-members-header').offset().top + $('#band-members-header').outerHeight(true)
            ){
                $('#section-title').text('Band Members');
            }else if($(window).scrollTop() > $('#band-members').offset().top 
                && $(window).scrollTop() < $('#band-members').offset().top + $('#band-members').outerHeight(true)
            ){
                $('#section-title').text('Band Members');
            }else if($(window).scrollTop() > $('#beginnings').offset().top 
                && $(window).scrollTop() < $('#beginnings').offset().top + $('#beginnings').outerHeight(true)
            ){
                $('#section-title').text('2002 - 2005');
            }else if($(window).scrollTop() > $('#2006').offset().top 
                && $(window).scrollTop() < $('#2006').offset().top + $('#2006').outerHeight(true)
            ){
                $('#section-title').text("2006");
            }else if($(window).scrollTop() > $('#2007').offset().top 
                && $(window).scrollTop() < $('#2007').offset().top + $('#2007').outerHeight(true)
            ){
                $('#section-title').text("2007");
            }else if($(window).scrollTop() > $('#2009').offset().top 
                && $(window).scrollTop() < $('#2009').offset().top + $('#2009').outerHeight(true)
            ){
                $('#section-title').text("2009");
            }else if($(window).scrollTop() > $('#2011').offset().top 
                && $(window).scrollTop() < $('#2011').offset().top + $('#2011').outerHeight(true)
            ){
                $('#section-title').text("2011");
            }else if($(window).scrollTop() > $('#2013').offset().top 
            && $(window).scrollTop() < $('#2013').offset().top + $('#2013').outerHeight(true)
            ){
                $('#section-title').text("2013");
            }else if($(window).scrollTop() > $('#2018').offset().top 
                && $(window).scrollTop() < $('#2018').offset().top + $('#2018').outerHeight(true)
            ){
                $('#section-title').text("2018");
            }else if($(window).scrollTop() > $('#2022').offset().top 
                && $(window).scrollTop() < $('#2022').offset().top + $('#2022').outerHeight(true)
            ){
                $('#section-title').text("2022");
            }
            else{
                $('#section-title').text('Welcome');
            }
        });
    });
