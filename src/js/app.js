'use strict';

$(document).ready(function() {
    $('.toggle-section').each(function() {
        var $wrapper = $(this);
        var $rows = $wrapper.find('.toggle-section-item');
        var $toggleButton = $wrapper.find('.toggle-section-btn');
        var opened = false;

        $toggleButton.on('click', function() {
            $rows.toggleClass('active');
            opened = !opened;
            var openText = $toggleButton.data('open');
            var closeText = $toggleButton.data('close');
            $toggleButton.text(opened ? closeText : openText);
        });
        $rows.addClass('active');
    });
});
