/**
 * Created with JetBrains WebStorm.
 * User: gregorytkach
 * Date: 8/2/13
 * Time: 10:09 AM
 * To change this template use File | Settings | File Templates.
 */

function onLoad()
{
    getSkypeStatus('alexyanovskyschool', 'smallicon', 'call', '#skype_icon');

    startCountDown();

    setTimeout(loadAssetsAsync, 1000);
}


function getImageNames()
{
    return         [
        '../assets/section0/button_registration_hover.png',
        '../assets/section3/section_3_button_hover.png',
        '../assets/section8/section8_button_hover.png'
    ];
}


function startCountDown()
{
    var austDay = new Date();
    austDay = new Date(2013 , 9, 9);

    $('#counter_countdown').countdown({until: austDay});

}