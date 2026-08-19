(function () {
  'use strict';

  function initNavigation() {
    var toggles = document.querySelectorAll('.nav-toggle');

    if (!toggles.length) {
      return;
    }

    toggles.forEach(function (toggle) {
      var header = toggle.closest('.masthead');

      if (!header) {
        return;
      }

      var menu = header.querySelector('.primary-nav ul');

      if (!menu) {
        return;
      }

      toggle.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('open');

        toggle.setAttribute(
          'aria-expanded',
          isOpen ? 'true' : 'false'
        );

        toggle.setAttribute(
          'aria-label',
          isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
      });

      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          menu.classList.remove('open');

          toggle.setAttribute(
            'aria-expanded',
            'false'
          );

          toggle.setAttribute(
            'aria-label',
            'Open navigation menu'
          );
        });
      });
    });
  }


  function initDate() {
    var dateElements = document.querySelectorAll(
      '[data-current-date]'
    );

    if (!dateElements.length) {
      return;
    }

    var today = new Date();

    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    var formattedDate = today.toLocaleDateString(
      'en-IN',
      options
    );

    dateElements.forEach(function (element) {
      element.textContent = formattedDate;
    });
  }


  function init() {
    initNavigation();
    initDate();
  }


  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      init,
      { once: true }
    );
  } else {
    init();
  }

})();
