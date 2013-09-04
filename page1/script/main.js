/**
 * Created with JetBrains WebStorm.
 * User: aleksandrabelyaeva
 * Date: 8/1/13
 * Time: 9:36 AM
 * To change this template use File | Settings | File Templates.
 */
function onLoad()
{
    getSkypeStatus('alexyanovskyschool', 'smallicon', 'call', '#skype_icon');

    //async load
    setTimeout(loadAssetsAsync, 1000);
}

function getImageNames()
{
    return         [
        '../assets/header/buttons/order/button_order_152x56_clicked.png',
        '../assets/header/buttons/details/button_details_left_clicked.png',
        '../assets/header/buttons/details/button_details_right_clicked.png',

        '../assets/header/buttons/order/button_order_212x80_clicked.png',
        '../assets/header/buttons/details/button_details_center_clicked.png',

        '../assets/page0/buttons/button_order_202x68_clicked.png'
    ];
}