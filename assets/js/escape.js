$(document).ready(function () {
    //loading gif
    $(window).load(function () { $(".custom-loading-gif").fadeOut("slow") });
    //scrollTop

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

//weather api
var city = "Sile";
var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
  //change city variable dynamically as required
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
   console.log(data);   
   $('.resort-temperature').html(data.query.results.channel.item.condition.temp).append('<span>°C</span>');
   $( '.wi' ).addClass( 'wi-yahoo-' + data.query.results.channel.item.condition.code );
});

  var wd = function () {
    $('.resort-town').text('Ağva');
    $('.resort-country').text('Türkiye');

};
setInterval(wd, 3000);
    //Rezervasyon inputları için placeholder hazırlama
    var ph = function () {
        var defaultVal = "GİRİŞ";
        $("#tmpCheckInDate2").val(defaultVal).on("focus", function () {
            if ($(this).val() == defaultVal) {
                $(this).val("");
            }
        }).on("blur", function () {
            if ($(this).val() == "") {
                $(this).val(defaultVal);
            }
        });
    };

    var ph2 = function () {
        var defaultVal = "ÇIKIŞ";
        $("#tmpCheckOutDate2").val(defaultVal).on("focus", function () {
            if ($(this).val() == defaultVal) {
                $(this).val("");
            }
        }).on("blur", function () {
            if ($(this).val() == "") {
                $(this).val(defaultVal);
            }
        });
    };

    var ph3 = function () {
        $('#tmp_numAdults_0').prepend($('<option>', {
            text: 'YETİŞKİN',
            selected: 'selected',
            disabled: 'disabled'
        }));
    };

    setTimeout(function () {

        var ic1 = $("#td_res_checkin").html($("#td_res_checkin").find("input, div, a"));
        var ic2 = $("#td_res_checkout").html($("#td_res_checkout").find("input, div, a"));
        var ic3 = $("#td_res_adult").html($("#td_res_adult").find("select, div, a"));
        var ic4 = $('#td_res_button').html($("#td_res_button").find("input, div, a"));
        ic1.replaceWith('<div class="col-md-3 col-sm-6"><div class="arrival">' + ic1.html() + '</div>');
        ic2.replaceWith('<div class="col-md-3 col-sm-6"><div class="arrival">' + ic2.html() + '</div></div>');
        ic3.replaceWith('<div class="col-md-3 col-sm-6"><div class="arrival te-select">' + ic3.html() + '</div></div>');
        ic4.replaceWith('<div class="col-md-3 col-sm-6"><div class="arrival te-btn-wrap">' + ic4.html() + '</div></div>');


        $('#anchorA img').replaceWith('<i class="fa fa-calendar"></i>');
        $('#anchorB img').replaceWith('<i class="fa fa-calendar"></i>');
    }, 1000);
    setTimeout(ph3, 1000);
    setTimeout(ph2, 1000);
    setTimeout(ph, 1000);
    $('.social-icons').html('<li><a target=_blank href=https://www.facebook.com/theescapehotel class=custom-social-icon><span class=facebook></span></a></li><li><a target=_blank href=https://twitter.com/theescapehotel class=custom-social-icon><span class=twitter></span></a></li><li><a target=_blank href=https://www.instagram.com/theescapehotel/ class=custom-social-icon><span class=instagram></span></a></li><li><a target=_blank href=https://www.linkedin.com/company/the-escape-hotel class=custom-social-icon><span class=linkedin></span></a></li><li><a target=_blank href=https://www.tripadvisor.com.tr/Hotel_Review-g3218897-d10826565-Reviews-The_Escape_Hotel-Agva_Istanbul_Province.html class=custom-social-icon><span class=tripadvisor></span></a></li><li><a target=_blank href=http://www.theescapehotel.com/tr/feed/ class=custom-social-icon><span class=rss></span></a></li>');   

    

});