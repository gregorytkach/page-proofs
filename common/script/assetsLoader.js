/**
 * Created with JetBrains WebStorm.
 * User: gregorytkach
 * Date: 8/1/13
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */
    //for internal use
//TODO: make imageNames[] param
function loadAssetsAsync()
{
    //please implement this function in your project
    var images = getImageNames();

    for (var imageIndex = 0; imageIndex < images.length; imageIndex++)
    {
        // preload image
        new Image().src = images[imageIndex];
    }

    // XHR to request a JS and a CSS
//    var xhr = new XMLHttpRequest();

//    xhr.open('GET', 'http://domain.tld/preload.js');
//    xhr.send('');
//    xhr = new XMLHttpRequest();
//    xhr.open('GET', 'http://domain.tld/preload.css');
//    xhr.send('');
}

