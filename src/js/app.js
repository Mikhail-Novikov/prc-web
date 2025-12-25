'use strict';

$(document).ready(function() {
    $('.toggle-table').each(function() {
        var $wrapper = $(this);
        var $rows = $wrapper.find('.toggle-table-item.active');
        var $toggleButton = $wrapper.find('.toggle-table-btn');
        var opened = false;

        $toggleButton.on('click', function() {
            $rows.toggleClass('hidden');
            opened = !opened;
            var openText = $toggleButton.data('open');
            var closeText = $toggleButton.data('close');
            $toggleButton.text(opened ? closeText : openText);
        });
        $rows.addClass('hidden');
    });
});
