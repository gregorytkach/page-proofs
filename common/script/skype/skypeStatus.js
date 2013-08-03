/**
 * Created with JetBrains WebStorm.
 * User: aleksandrabelyaeva
 * Date: 8/1/13
 * Time: 10:03 AM
 * To change this template use File | Settings | File Templates.
 */
/* ****************************************************************
 * @skypeId  :  skype id of the user you want to show status.
 *
 * @iconType : which type of skype status icon you want to show.
 *      balloon   - Balloon style
 *      bigclassic  - Big Classic Style
 *      smallclassic - Small Classic Style
 *      smallicon  - Small Icon (transparent background)
 *      mediumicon  - Medium Icon
 *      dropdown-white - Dropdown White Background
 *      dropdown-trans - Dropdown Transparent Background
 *
 * @skypeEvent : which event you want to call on onclick event of skype status icon
 *     caht   - Opne chat window
 *     call   - Call that user
 *     add    - Added that user to contact list
 *     userinfo  - Show user info of that user
 *     sendfile  - Send selected file to that user
 *
 * @statusShowId : id of the HTML element where you want to show the status icon
 * **********************************************************/

function getSkypeStatus(skypeId, iconType, skypeEvent, statusShowId)
{
    var image = new Image()
    $(image).attr('src', 'http://mystatus.skype.com/' + iconType + '/' + skypeId);
    var src = $(image).attr('src');
    var html = '<a href="skype:' + skypeId + '?' + skypeEvent + '" onclick="return skypeCheck();"><img src="' + src + '" border="0" style="padding-left:3px; padding-right:9px;"> </a>';
    $(statusShowId).append(html);
}


//jQuery.extend(
//    {
//        skype: function (failureFunction)
//        {
//            var result = false;
//
//            var $ = jQuery;
//
//            if ($.browser.safari || $.browser.opera)
//            {
//                result = true;
//            }
//            else if ($.browser.msie)
//            {
//                try
//                {
//                    if (new ActiveXObject("Skype.Detection"))
//                        result = true;
//                }
//                catch (e)
//                {
//                }
//            }
//            else
//            {
//                if (typeof(navigator.mimeTypes["application/x-skype"]) == "object")
//                {
//                    result = true;
//                }
//            }
//
//
//            if(!result)
//            {
//                $('a[href^="skype:"]').click(function ()
//                {
//                    failureFunction();
//                });
//            }
//
//            return result;
//        }
//    });
//
//jQuery(function ($)
//{
//    $.skype(function ()
//    {
//        // this function gets called if they don't have skype.
//        alert("Looks like you don't have skype. Bummer.");
//    });
//});