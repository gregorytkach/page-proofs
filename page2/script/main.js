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

    setTimeout(loadAssetsAsync, 1000);
}


function getImageNames()
{
    return         [
        '../assets/section0/button_registration_hover.png',
        '../assets/section3/section_3_button_hover.png'
    ];
}