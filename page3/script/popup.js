/**
 * Created with JetBrains WebStorm.
 * User: gregorytkach
 * Date: 8/8/13
 * Time: 11:45 AM
 * To change this template use File | Settings | File Templates.
 */


function createPopup()
{
    //select all the a tag with name equal to modal
    $('.section_left_7_button').click(onButtonPopupClicked);

    //if close button is clicked
    $('.window .popup_button_exit').click(onCloseButtonClicked);

    //if mask is clicked
    $('#mask').click(onMaskClicked);

    $(window).resize(onWindowResize);
}

function onWindowResize()
{
    var maskHeight =$(document).height();
    var maskWidth = $(window).width();

    $('#mask').css({'width': maskWidth, 'height': maskHeight});
}

function onButtonPopupClicked(e)
{
    //Cancel the link behavior
    e.preventDefault();
    //Get the A tag
    var id = $('.window');

    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    var maskObj = $('#mask');

    //Set height and width to mask to fill up the whole screen
    maskObj.css({'width': maskWidth, 'height': maskHeight});

    //transition effect
    maskObj.fadeIn(1000);
    maskObj.fadeTo("slow", 0.8);

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    //Set the popup window to center
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);

    //transition effect
    $(id).fadeIn(2000);
}

function onCloseButtonClicked(e)
{
    //Cancel the link behavior
    e.preventDefault();
    $('#mask, .window').hide();
}

function onMaskClicked()
{
    $(this).hide();
    $('.window').hide();
}


