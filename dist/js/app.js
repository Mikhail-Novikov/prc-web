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

    // scroll to anchors
    const btn_anchors=document.querySelectorAll('.anchor-target');
    btn_anchors.forEach(anc=>{
        anc.addEventListener('click', (ev)=>{
            ev.preventDefault();
            header_height=document.querySelector('header').getBoundingClientRect().height;

            let element=document.querySelector(anc.getAttribute('href'));
            console.log(anc.getAttribute('href'));
            console.log(element);
            let elementPosition = element.getBoundingClientRect().top;
            let offsetPosition = elementPosition + document.documentElement.scrollTop;
            $("html, body").animate({
                scrollTop: offsetPosition
            }, 500);
        });
    });

    // scroll to up
    $('.btn-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});

