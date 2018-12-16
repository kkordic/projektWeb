$(document).ready(function ($) {
  "use strict"; 

    /* slider */
    
    $('.slider-carousel').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto: true,
        items:{
            visible:{
                min:1,
                max:1
            },
        height:'variable'
        },
        pagination:{
            container:".sliderpager",
            anchorBuilder: false
        }
    });


    $('#port-car').carouFredSel({
        responsive: true,
        width: '100%',
        circular:true,
        prev:'#prev',
        next:'#next',
        scroll: {
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto: true,
        items: { 
            visible: {
                min: 1,
                max: 4
            },
        height: 'variable'
        }
    });


    $('#team-car').carouFredSel({
        responsive: true,
        width: '100%',
        circular:true,
        prev:'#team-prev',
        next:'#team-next',
        scroll: {
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto: true,
        items: { 
            visible: {
                min: 1,
                max: 4
            },
        height: 'variable'
        }
    });


    $('.testimonials-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto: true,
        items:{
            visible:{
                min:1,
                max:1
            },
        height:'variable'
        },
        pagination:{
            container:".testipager",
            anchorBuilder: false
        }
    });


    /* header */
    
    $(window).scroll(function(){

        var top = $(window).scrollTop();
        if(top>=60){
            $("header").addClass('secondary-dark-blue-bg');
        }
        else
            if($("header").hasClass('secondary-dark-blue-bg')){
                $("header").removeClass('secondary-dark-blue-bg');
            }
    }); 

    /* back to top */
    
    $('.back-to-top').css({'display': 'none'});
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if(top>=600) {
            $('.back-to-top').fadeIn(200);
        } else {
        
            $('.back-to-top').fadeOut(200);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    /* smooth scroll */
    
    $('a[href*=#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });

    /* mobile menu */
    
    $('#menu').slicknav({
        label:'',
    })

});

