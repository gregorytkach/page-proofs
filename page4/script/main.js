/**
 * Created with JetBrains WebStorm.
 * User: aleksandrabelyaeva
 * Date: 9/8/13
 * Time: 10:28 PM
 * To change this template use File | Settings | File Templates.
 */
function onLoad()
{
    getSkypeStatus('alexyanovskyschool', 'smallicon', 'call', '#skype_icon');

    startCountDown0();
    startCountDown1();

    setTimeout(loadAssetsAsync, 1000);
}


function getImageNames()
{
    return [
        'assets/body/section1_button_hover.png',
        'assets/body/section13_button_hover.png',
        'assets/body/section20_button_hover.png',
        'assets/body/section25_button_hover.png'

    ];
}


function startCountDown0()
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

function startCountDown1()
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