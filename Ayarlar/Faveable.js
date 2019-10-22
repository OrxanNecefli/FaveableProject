window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-id").style.width = scrolled + "%";

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myHeader").className = "sticky";
        document.getElementById("select-div").className = "sticky";
    } else {
        document.getElementById("myHeader").className = "";
        document.getElementById("select-div").className = "";
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        $(document).ready(function() {
            $(".icon-fixed-ul").css('opacity', '1')
        })
    } else {
        $(document).ready(function() {
            $('.icon-fixed-ul').css('opacity', '0')
        })

    }
}

// active class yaradacam
$(document).ready(function($) {
    var path = window.location.pathname.split("/").pop();
    if (path == '') {
        path = 'about.html';
    }
    var target = $('#NavUlLiid a[href="' + path + '"]');
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
    }
    target.addClass('active');
});
// active class yaradacam

$(document).ready(function() {
    $('.menu-head-div').click(function() {
        $('.select-ul').toggle()
    });
    $('.a-class-mouse').mouseover(function() {
        $("#img-id-over").animate({ left: '20px' }, 200);
        $("#img-id-over-none").animate({ left: '10px' }, 200);
    });
    $('.a-class-mouse').mouseleave(function() {
        $("#img-id-over").animate({ left: '12px' }, 200);
        $("#img-id-over-none").animate({ left: '0px' }, 200);
    });
    $('.more-none-click').click(function() {
        $(".more-none-ul").css("display", "block");
        $(".more-none-click").css("display", "none");
    });

    $('.search-input').focus(function() {
        $('#focus-i-tag').css('color', '#4cd137');
        $('.button-class-search').css('background-color', '#4cd137');
        $(".div-none-class").css('display', 'none');
        $(".div-none-class-img").css('display', 'none');
        $(".search-div").css({
            'text-align': 'center',
            'width': '70%'
        });
    })
    $('.search-input').blur(function() {
        $('#focus-i-tag').css('color', '#3092d0');
        $('.button-class-search').css('background-color', '#3092d0');
        $('.div-none-class-img').css('display', 'block')
        var maxwidth = window.matchMedia('(max-width: 992px)')
        if (maxwidth.matches) {
            $('.div-none-class').css('display', 'none')
        } else {
            $('.div-none-class').css('display', 'block')
        }
        $('.search-div').css({
            'text-align': 'center',
            'width': '170%'
        })
    });
    $(".p-d-m").click(function() {
        var pdm = document.getElementsByClassName("p-d-m")[0]
        pdm.innerHTML = "<p class=\"class-jq\">Last updated: September 15, 2019</p>"
        $(this).css('position', 'relative');
        $(".six-absolute-div").css("max-height", "100%");
        $(".two-div-all").css("height", "auto");
        $(".p-d-m.p-d-m-t").css('height', 'auto')
    })
    $("#pros-click").click(function() {
        $("#pros-id-all").css({
            "display": "flex"
        });
        $('#cons-id-all').css({
            "display": 'none'
        })
        $("#cons-click").css({
            'color': '#ccc'
        })
        $(this).css({ "color": "#3292d0" });
    });
    $('#cons-click').click(function() {
        $('#cons-id-all').css({
            "display": 'flex'
        });
        $('#pros-id-all').css({
            'display': 'none'
        })
        $("#pros-click").css({
            'color': '#ccc'
        })
        $(this).css({ "color": '#e54d42' })
    });
    $(".show-more-class").click(function() {
        $(".top-div-class-all").css("max-height", "initial");
        $(this).hide()
    });
    $(".icon-div-left").click(function() {
        $(".arrow-bottom-div").css({
            "width": "48px",
            "height": "48px",
            'color': "red",
            "background-color": "#fff"
        });
        $(".votes").css({
            'display': 'flex'
        });
        $(".subscribe-form-all").css({
            'display': 'flex'
        })
        $("#grid-id-none").css("display", "flex");
    });
    $('.icon-div-right').click(function() {
        $('.arrow-top-div').css({
            'width': '48px',
            'height': '48px',
            'color': 'green',
            'background-color': '#fff'
        })
        $('.votes').css({
            'display': 'flex'
        })
        $('.subscribe-form-all').css({
            'display': 'flex'
        });
        $('#grid-id-none').css('display', 'flex');
    })
})

var round = document.getElementById("border-half");
round.onclick = function() { functiounRound(), Timefunction() };

function functiounRound() {
    $("#span-delete").css({ 'display': 'none' });
    $('#border-half').css({ 'background-color': '#aaa69d' })
    $('#border-half').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction() {
    setTimeout(function() {
        var deletetag = document.getElementById("delete-time");
        var spantag = document.getElementById("block-span-tag");
        var sectionpageone = document.getElementById("page-one-section")
        sectionpageone.style.display = "block"
        deletetag.style.display = "none"
        spantag.style.display = "block"
    }, 1000)
}

var round2 = document.getElementById("border-half2");
round2.onclick = function() { functiounRound2(), Timefunction2() };

function functiounRound2() {
    $("#span-delete2").css({ 'display': 'none' });
    $('#border-half2').css({ 'background-color': '#aaa69d' })
    $('#border-half2').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction2() {
    setTimeout(function() {
        var deletetag2 = document.getElementById("delete-time2");
        var spantag2 = document.getElementById("block-span-tag2");
        var sectionpagetwo = document.getElementById("page-two-section")
        sectionpagetwo.style.display = "block"
        deletetag2.style.display = "none"
        spantag2.style.display = "block"
    }, 1000)
}
var round3 = document.getElementById("border-half3");
round3.onclick = function() { functiounRound3(), Timefunction3() };

function functiounRound3() {
    $("#span-delete3").css({ 'display': 'none' });
    $('#border-half3').css({ 'background-color': '#aaa69d' })
    $('#border-half3').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction3() {
    setTimeout(function() {
        var deletetag3 = document.getElementById("delete-time3");
        var spantag3 = document.getElementById("block-span-tag3");
        var sectionpagethree = document.getElementById("page-three-section")
        sectionpagethree.style.display = "block"
        deletetag3.style.display = "none"
        spantag3.style.display = "block"
    }, 1000)
}

var round4 = document.getElementById("border-half4");
round4.onclick = function() { functiounRound4(), Timefunction4() };

function functiounRound4() {
    $("#span-delete4").css({ 'display': 'none' });
    $('#border-half4').css({ 'background-color': '#aaa69d' })
    $('#border-half4').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction4() {
    setTimeout(function() {
        var deletetag4 = document.getElementById("delete-time4");
        var spantag4 = document.getElementById("block-span-tag4");
        var sectionpagefour = document.getElementById("page-four-section")
        sectionpagefour.style.display = "block"
        deletetag4.style.display = "none"
        spantag4.style.display = "block"
    }, 1000)
}
var round5 = document.getElementById("border-half5");
round5.onclick = function() { functiounRound5(), Timefunction5() };

function functiounRound5() {
    $("#span-delete5").css({ 'display': 'none' });
    $('#border-half5').css({ 'background-color': '#aaa69d' })
    $('#border-half5').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction5() {
    setTimeout(function() {
        var deletetag5 = document.getElementById("delete-time5");
        var spantag5 = document.getElementById("block-span-tag5");
        var sectionpagefive = document.getElementById("page-five-section")
        sectionpagefive.style.display = "block"
        deletetag5.style.display = "none"
        spantag5.style.display = "block"
    }, 1000)
}
var round6 = document.getElementById("border-half6");
round6.onclick = function() { functiounRound6(), Timefunction6() };

function functiounRound6() {
    $("#span-delete6").css({ 'display': 'none' });
    $('#border-half6').css({ 'background-color': '#aaa69d' })
    $('#border-half6').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction6() {
    setTimeout(function() {
        var deletetag6 = document.getElementById("delete-time6");
        var spantag6 = document.getElementById("block-span-tag6");
        var sectionpagesix = document.getElementById("page-six-section")
        sectionpagesix.style.display = "block"
        deletetag6.style.display = "none"
        spantag6.style.display = "block"
    }, 1000)
}
var round7 = document.getElementById("border-half7");
round7.onclick = function() { functiounRound7(), Timefunction7() };

function functiounRound7() {
    $("#span-delete7").css({ 'display': 'none' });
    $('#border-half7').css({ 'background-color': '#aaa69d' })
    $('#border-half7').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction7() {
    setTimeout(function() {
        var deletetag7 = document.getElementById("delete-time7");
        var spantag7 = document.getElementById("block-span-tag7");
        var sectionpageseven = document.getElementById("page-seven-section")
        sectionpageseven.style.display = "block"
        deletetag7.style.display = "none"
        spantag7.style.display = "block"
    }, 1000)
}
var round8 = document.getElementById("border-half8");
round8.onclick = function() { functiounRound8(), Timefunction8() };

function functiounRound8() {
    $("#span-delete8").css({ 'display': 'none' });
    $('#border-half8').css({ 'background-color': '#aaa69d' })
    $('#border-half8').animate({
        "width": "45px",
        "height": "40px",
        "border-width": "0px",
    }, 300);
}

function Timefunction8() {
    setTimeout(function() {
        var deletetag8 = document.getElementById("delete-time8");
        var spantag8 = document.getElementById("block-span-tag8");
        var sectionpageeight = document.getElementById("page-eight-section")
        sectionpageeight.style.display = "block"
        deletetag8.style.display = "none"
        spantag8.style.display = "block"
    }, 1000)
}
// var body = document.getElementById("body-id")
// body.onload = function() { FunctionFixed() }

function FunctionFixed() {
    setTimeout(function() {
        $("#fixed-menu-email").animate({ 'right': '10px' });
        $("#close-fixed").css({ 'display': 'block' });
    }, 10000)
}

function FunctionClose() {
    setTimeout(function() {
        $('#fixed-menu-email').animate({ "right": '-320px' }, 300)
        $('#close-fixed').css({ "display": 'none' })

    }, 1500);
}