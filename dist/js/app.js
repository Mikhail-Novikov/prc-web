'use strict';

$(document).ready(function() {
    $('.toggle-section').each(function() {
        var $wrapper = $(this);
        var $rows = $wrapper.find('.toggle-section-item');
        var $toggleButton = $wrapper.find('.js-toggle-btn');
        var opened = false;

        $toggleButton.on('click', function() {
            var openText = $toggleButton.data('open');
            var closeText = $toggleButton.data('close');

            $rows.toggleClass('hidden');
            opened = !opened;
            $toggleButton
                .text(opened ? closeText : openText)
                .toggleClass('opened');
        });

        $rows.addClass('hidden')
    });
});
