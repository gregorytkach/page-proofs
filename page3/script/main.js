/**
 * Created with JetBrains WebStorm.
 * User: gregorytkach
 * Date: 8/8/13
 * Time: 10:29 AM
 * To change this template use File | Settings | File Templates.
 */
function onLoad()
{
    createPopup();

    startCountDown();

    setTimeout(loadAssetsAsync, 1000);
}


function getImageNames()
{
    return         [
        'assets/section_left/button_hover.png',
        'assets/popup/button_hover.png'
    ];
}


function startCountDown()
{
    var ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;

    $('#countdown').countdown(
        {
            timestamp: ts,
            callback: function (days, hours, minutes, seconds)
            {
                var message = "";

                message += "Дней: " + days + ", ";
                message += "часов: " + hours + ", ";
                message += "минут: " + minutes + " и ";
                message += "секунд: " + seconds + " <br/>";
            }
        });
}