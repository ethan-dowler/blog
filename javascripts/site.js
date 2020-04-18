// .closest polyfill from MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
"use strict";

if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
};
'use strict';

;(function () {
  'use strict';

  var open = 'menu-open',
      dataToggle = '[data-toggle-menu]',
      navClass = '.Nav';

  var menuIsOpen = function menuIsOpen() {
    return document.body.classList.contains(open);
  };

  var openMenu = function openMenu() {
    return document.body.classList.add(open);
  };

  var closeMenu = function closeMenu() {
    return document.body.classList.remove(open);
  };

  var toggleMenu = function toggleMenu() {
    if (menuIsOpen()) closeMenu();else openMenu();
  };

  var clickingToggle = function clickingToggle(target) {
    return !!target.closest(dataToggle);
  };

  var clickingOutsideNav = function clickingOutsideNav(target) {
    return !target.closest(navClass);
  };

  var onClick = function onClick(e) {
    if (clickingToggle(e.target)) toggleMenu();else if (clickingOutsideNav(e.target)) closeMenu();
  };

  document.addEventListener('click', onClick);
})();


