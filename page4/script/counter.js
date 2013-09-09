/**
 * @name        jQuery Countdown Plugin
 * @author        Martin Angelov
 * @version    1.0
 * @url            http://tutorialzine.com/2011/12/countdown-jquery/
 * @license        MIT License
 */

(function ($)
{

    // Количество секунд в каждом временном отрезке
    var days = 24 * 60 * 60,
        hours = 60 * 60,
        minutes = 60;

    // Создаем плагин
    $.fn.countdown = function (prop)
    {
        var counterNumber = prop.hasOwnProperty("counterNumber") ? prop.counterNumber : "";

        var options = $.extend(
            {
                callback: function ()
                {
                },
                timestamp: 0
            }, prop);

        var left, d, h, m, s, positions;

        // инициализируем плагин
        init(this, options);

        var positionName = '.position' + counterNumber;

        positions = this.find(positionName);

        (function tick()
        {

            // Осталось времени
            left = Math.floor((options.timestamp - (new Date())) / 1000);

            if (left < 0)
            {
                left = 0;
            }

            // Осталось дней
            d = 1;//Math.floor(left / days);
            updateDuo(0, 1, d);
            left -= d * days;

            // Осталось часов
            h = Math.floor(left / hours);
            updateDuo(2, 3, h);
            left -= h * hours;

            // Осталось минут
            m = Math.floor(left / minutes);
            updateDuo(4, 5, m);
            left -= m * minutes;

            // Осталось секунд
            s = left;
            updateDuo(6, 7, s);

            // Вызываем возвратную функцию пользователя
            options.callback(d, h, m, s);

            // Планируем следующий вызов данной функции через 1 секунду
            setTimeout(tick, 1000);
        })();

        // Данная функция обновляет две цифоровые позиции за один раз
        function updateDuo(minor, major, value)
        {

            switchDigit(counterNumber, positions.eq(minor), Math.floor(value / 10) % 10);
            switchDigit(counterNumber, positions.eq(major), value % 10);
        }

        return this;
    };


    function init(elem, options)
    {
        var counterNumber = options.hasOwnProperty("counterNumber") ? options.counterNumber : "";

        var countdownHolderName = 'countdownHolder' + counterNumber;
        elem.addClass(countdownHolderName);

        // Создаем разметку внутри контейнера
        $.each(['Days', 'Hours', 'Minutes', 'Seconds'], function (i)
        {
            var spanCountObj = '<span class="count' + this + counterNumber + '">';

            var spanDigitObj = '<span class="digit' + counterNumber + '">0</span>';
            var spanPositionObj = '<span class="position' + counterNumber + '">' + spanDigitObj + '</span>';

            $(spanCountObj).html(spanPositionObj + spanPositionObj).appendTo(elem);

            if (this != "Seconds")
            {
                elem.append('<span class="countDiv countDiv' + i + '"></span>');
            }
        });

    }


    // Создаем анимированный переход между двумя цифрами
    function switchDigit(counterNumber, position, number)
    {
        var digitName = 'digit' + counterNumber;

        var digit = position.find('.' + digitName)

        if (digit.is(':animated'))
        {
            return false;
        }

        if (position.data(digitName) == number)
        {
            // Мы уже вывели данную цифру
            return false;
        }

        position.data(digitName, number);

        var replacement = $('<span>', {
            'class': digitName,
            css: {
                top: '-2.1em',
                opacity: 0
            },
            html: number
        });

        // Класс .static добавляется, когда завершается анимация.
        // Выполнение идет более плавно.

        digit
            .before(replacement)
            .animate({top: '2.5em', opacity: 0}, 'fast', function ()
            {
                digit.remove();
            })

        replacement
            .delay(100)
            .animate({top: 0, opacity: 1}, 'fast', function ()
            {
            });
    }
})(jQuery);
/**
 * Created with JetBrains WebStorm.
 * User: aleksandrabelyaeva
 * Date: 9/8/13
 * Time: 11:39 PM
 * To change this template use File | Settings | File Templates.
 */
