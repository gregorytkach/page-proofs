/**
 * Created with JetBrains WebStorm.
 * User: gregorytkach
 * Date: 7/28/13
 * Time: 11:56 PM
 * To change this template use File | Settings | File Templates.
 */

function onLoadStart()
{
}

function onLoad()
{
    $('.sidebar').fadeOut(0);

    //async load
    setTimeout(loadAssetsAsync, 1000);

    startCountDown();

    registerEventHandlers();
}

function getImageNames()
{
    return         [
        '../assets/section0/button_clicked.jpg'
    ];
}

function registerEventHandlers()
{
    $('.button_sidebar_page1').click(didButtonPage1Clicked);

    $('.button_sidebar_page2').click(didButtonPage2Clicked);

    $('.button_sidebar_page3').click(didButtonPage3Clicked);

    $('.button_sidebar_page4').click(didButtonPage4Clicked);

    $(window).scroll(didWindowScroll);

    $(window).resize(didWindowScroll);

//    updateElementsSizes();
}

function didWindowResize()
{
    if ($(window).width() < 1300 || $(window).height() < 650)
    {
        sidebar.fadeOut();
    }


}

function didWindowScroll()
{
    var sidebar = $('.sidebar');

    if ($(window).width() < 1300)
    {
        sidebar.fadeOut();
    }
    else
    {
        var scrolltoppx = $(this).scrollTop();

        scrolltoppx > 500 && scrolltoppx < ($('body.default').height() - 500 - $(window).height()) ? sidebar.fadeIn() : sidebar.fadeOut();
    }

//    updateElementsSizes();
}

function updateElementsSizes()
{
    var widthString = $(window).width().toString() + 'px';

    $('body').css('width', widthString);
    $('.page_strip').css('width', widthString);

    $('.page0_shadow_bottom').css('width', widthString);

    $('.page1_shadow_bottom').css('width', widthString);
    $('.page1_shadow_top').css('width', widthString);

    $('.page2_shadow_bottom').css('width', widthString);
    $('.page2_shadow_top').css('width', widthString);

    $('.page3_shadow_bottom').css('width', widthString);
    $('.page3_shadow_top').css('width', widthString);

    $('.page4_shadow_bottom').css('width', widthString);
    $('.page4_shadow_top').css('width', widthString);

    $('.page5_shadow_top').css('width', widthString);

    $('.footer_shadow').css('width', widthString);
}

function didButtonPage1Clicked()
{
    $.scrollTo("#page1", 1500);
    return false;
}

function didButtonPage2Clicked()
{
    $.scrollTo("#page2", 1500);
    return false;
}

function didButtonPage3Clicked()
{
    $.scrollTo("#page3", 1500);
    return false;
}

function didButtonPage4Clicked()
{
    $.scrollTo("#page4", 1500);
    return false;
}

function startCountDown()
{
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);

    $('#counter_countdown').countdown({until: austDay});

}
