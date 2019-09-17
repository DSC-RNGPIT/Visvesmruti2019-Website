/** code by webdevtrick ( https://webdevtrick.com ) **/
$(function () {
    "use strict";
    
    var slider          = $('.slider'),
        sliderUl        = slider.find('.slider-parent'),
        sliderUlLi      = sliderUl.find('.images-list'),
        sliderOl        = slider.find('.buttom-circles'),
        sliderOlLi      = sliderOl.find('.buttom-circles-list'),
        sliderFaRight   = slider.find('> .fa:first-of-type'),
        sliderFaLeft    = slider.find('> .fa:last-of-type'),
        sliderTime      = 1000,
        sliderWait      = 2000,
        sliderSetInt,
        resumeAndPause;
    
    sliderFaLeft.fadeOut();
    

	function resetWH() {
        slider.width(slider.parent().width()).height(slider.parent().width() * 0.5);
        sliderUl.width(slider.width() * sliderUlLi.length).height(slider.height());
        sliderUlLi.width(slider.width()).height(slider.height());
    }
    resetWH();

	function runSlider() {
        if (sliderOlLi.hasClass('slider-active')) {
            sliderUl.animate({
                marginLeft: -slider.width() * ($('.slider-active').data('slider') - 1)
            }, sliderTime);
        }
        if ($('.slider-active').is(':first-of-type')) {
            sliderFaLeft.fadeOut();
        } else {
            sliderFaLeft.fadeIn();
        }
        if ($('.slider-active').next().is(':last-of-type')) {
            sliderFaRight.fadeOut();
        } else {
            sliderFaRight.fadeIn();
        }
    }

	function runRight() {
        slider.each(function () {
            $('.slider-active').next().addClass('slider-active').siblings().removeClass('slider-active');
            runSlider();
        });
    }

	function runLeft() {
        slider.each(function () {
            $('.slider-active').prev().addClass('slider-active').siblings().removeClass('slider-active');
            runSlider();
        });
    }

	sliderSetInt = function autoRunSlider() {
        if ($('.slider-active').next().is(':last-of-type')) {
            sliderUl.animate({
                marginLeft: -sliderUlLi.width() * $('.slider-active').data('slider')
            }, sliderTime, function () {
                sliderUl.css('margin-left', 0);
                sliderOlLi.first().addClass('slider-active').siblings().removeClass('slider-active');
            });
        } else {
            runRight();
        }
    };
    
    resumeAndPause = setInterval(sliderSetInt, sliderWait);
    

	$(window).on('resize', function () {
        resetWH();
    });
    

	slider.each(function () {
        sliderOlLi.click(function () {
            $(this).addClass('slider-active').siblings().removeClass('slider-active');
            runSlider();
        });
    });
    
    sliderFaRight.on('click', function () {
        runRight();
    });
    sliderFaLeft.on('click', function () {
        runLeft();
    });
    
    slider.find('.fa').hover(function () {
        clearInterval(resumeAndPause);
    }, function () {
        resumeAndPause = setInterval(sliderSetInt, sliderWait);
    });
});
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
/** code by webdevtrick ( https://webdevtrick.com ) **/
$(function () {
    "use strict";
    
    var slider          = $('.slider'),
        sliderUl        = slider.find('.slider-parent'),
        sliderUlLi      = sliderUl.find('.images-list'),
        sliderOl        = slider.find('.buttom-circles'),
        sliderOlLi      = sliderOl.find('.buttom-circles-list'),
        sliderFaRight   = slider.find('> .fa:first-of-type'),
        sliderFaLeft    = slider.find('> .fa:last-of-type'),
        sliderTime      = 1000,
        sliderWait      = 2000,
        sliderSetInt,
        resumeAndPause;
    
    sliderFaLeft.fadeOut();
    
 
	function resetWH() {
        slider.width(slider.parent().width()).height(slider.parent().width() * 0.5);
        sliderUl.width(slider.width() * sliderUlLi.length).height(slider.height());
        sliderUlLi.width(slider.width()).height(slider.height());
    }
    resetWH();
 
	function runSlider() {
        if (sliderOlLi.hasClass('slider-active')) {
            sliderUl.animate({
                marginLeft: -slider.width() * ($('.slider-active').data('slider') - 1)
            }, sliderTime);
        }
        if ($('.slider-active').is(':first-of-type')) {
            sliderFaLeft.fadeOut();
        } else {
            sliderFaLeft.fadeIn();
        }
        if ($('.slider-active').next().is(':last-of-type')) {
            sliderFaRight.fadeOut();
        } else {
            sliderFaRight.fadeIn();
        }
    }
 
	function runRight() {
        slider.each(function () {
            $('.slider-active').next().addClass('slider-active').siblings().removeClass('slider-active');
            runSlider();
        });
    }
 
	function runLeft() {
        slider.each(function () {
            $('.slider-active').prev().addClass('slider-active').siblings().removeClass('slider-active');
            runSlider();
        });
    }
 
	sliderSetInt = function autoRunSlider() {
        if ($('.slider-active').next().is(':last-of-type')) {
            sliderUl.animate({
                marginLeft: -sliderUlLi.width() * $('.slider-active').data('slider')
            }, sliderTime, function () {
                sliderUl.css('margin-left', 0);
                sliderOlLi.first().addClass('slider-active').siblings().removeClass('slider-active');
            });
        } else {
            runRight();
        }
    };
    
    resumeAndPause = setInterval(sliderSetInt, sliderWait);
    
 
	$(window).on('resize', function () {
        resetWH();
    });
    
 
	slider.each(function () {
        sliderOlLi.click(function () {
            $(this).addClass('slider-active').siblings().removeClass('slider-active');
            runSlider();
        });
    });
    
    sliderFaRight.on('click', function () {
        runRight();
    });
    sliderFaLeft.on('click', function () {
        runLeft();
    });
    
    slider.find('.fa').hover(function () {
        clearInterval(resumeAndPause);
    }, function () {
        resumeAndPause = setInterval(sliderSetInt, sliderWait);
    });
});