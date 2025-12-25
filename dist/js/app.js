'use strict';

$(document).ready(function() {
    // Для каждой таблицы ищем свою кнопку и строки
    $('.toggle-table').each(function() {
        var $wrapper = $(this);
        console.log($wrapper);
        var $rows = $wrapper.find('.toggle-table-item.active');
        var $toggleButton = $wrapper.find('.toggle-table-btn');
        var opened = false;

        $toggleButton.on('click', function() {
            $rows.toggleClass('hidden');
            opened = !opened;
            // Меняем текст кнопки в зависимости от состояния
            var openText = $toggleButton.data('open');
            var closeText = $toggleButton.data('close');
            $toggleButton.text(opened ? closeText : openText);
        });
        // По умолчанию скрываем строки
        $rows.addClass('hidden');
    });
});
