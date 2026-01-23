$(document).ready(function () {

  let isExpanded = false;
  const rows = document.querySelectorAll('.compare-table__row--collapsible, .collapsible-row');
  const btn = document.querySelector('.js-toggle-btn');
  const btnText = document.querySelector('.btn-text');
  rows.forEach(row => {
    if (isExpanded) {
      row.classList.remove('is-hidden');
    } else {
      row.classList.add('is-hidden');
    }
  });

  function toggleTable() {
      isExpanded = !isExpanded;

        rows.forEach(row => {
          if (isExpanded) {
            row.classList.remove('is-hidden');
          } else {
            row.classList.add('is-hidden');
          }
        });

      if (isExpanded) {
          btnText.textContent = 'Свернуть таблицу';
          btn.classList.add('expanded');
      } else {
          btnText.textContent = 'Развернуть таблицу';
          btn.classList.remove('expanded');
      }
  }

  $(".js-toggle-btn").click(function() {
      toggleTable();
  });

  // Скрипт раскрытия элементов по кнопке(to do - анимация?)
  if (!$(".toggle-section").length == 0 && $(".toggle-section").length > 0) {
    $(".toggle-section").each(function () {
      var $wrapper = $(this);
      var $rows = $wrapper.find(".toggle-section-item");
      var $toggleButton = $wrapper.find(".js-toggle-btn");
      var opened = false;

      var $borderElement = $rows
        .filter(":not(.hidden)")
        .first()
        .prev()
        .addClass("visible-border");

      function updateVisibleBorder() {
        $borderElement.toggleClass(
          "visible-border",
          $borderElement.next(".toggle-section-item.hidden").length > 0
        );
      }

      $toggleButton.on("click", function () {
        var openText = $toggleButton.data("open");
        var closeText = $toggleButton.data("close");

        $rows.toggleClass("hidden");
        opened = !opened;
        $toggleButton.text(opened ? closeText : openText).toggleClass("opened");
        updateVisibleBorder();
      });

      $rows.addClass("hidden");
      updateVisibleBorder();
    });
  }

  // scroll to anchors
  const btn_anchors = document.querySelectorAll(".anchor-target");
  btn_anchors.forEach((anc) => {
    anc.addEventListener("click", (ev) => {
      ev.preventDefault();
      header_height = document
        .querySelector("header")
        .getBoundingClientRect().height;

      let element = document.querySelector(anc.getAttribute("href"));

      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + document.documentElement.scrollTop;
      $("html, body").animate(
        {
          scrollTop: offsetPosition,
        },
        500
      );
    });
  });

  // scroll to up
  $(".btn-up").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
