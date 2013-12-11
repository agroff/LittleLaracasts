(function () {
    var plusIcon                  = '<i class="icon-plus-circle"></i>',
        minusIcon                 = '<i class="icon-minus-circle"></i>',
        littleLaracastsContainer  = $("<li></li>"),

        switchFunction            = function () {
            var $body = $("body"),
                $switch = $(this),
                bodyClass = "littleMode";

            if ($body.hasClass(bodyClass)) {
                $switch.html(plusIcon);
                $body.removeClass(bodyClass);
            }
            else {
                location.href = "#laracast";
                $switch.html(minusIcon);
                $body.addClass(bodyClass);
            }
        },

        littleLaracastSwitch = $("<a id=\"littleLaracastsSwitch\">" + plusIcon + "</a>").click(switchFunction);

    littleLaracastsContainer.append(littleLaracastSwitch);

    $("ul.video-extras").append(littleLaracastsContainer);

})();