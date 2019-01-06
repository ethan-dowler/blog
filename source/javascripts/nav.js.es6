;(function() {
  const open = 'menu-open',
    dataToggle = '[data-toggle-menu]',
    navClass = '.Nav'

  var menuIsOpen = () => document.body.classList.contains(open)

  var openMenu = () => document.body.classList.add(open)

  var closeMenu = () => document.body.classList.remove(open)

  var toggleMenu = () => {
    if (menuIsOpen()) closeMenu()
    else openMenu()
  }

  var clickingToggle = target => !!target.closest(dataToggle)

  var clickingOutsideNav = target => !target.closest(navClass)

  var onClick = e => {
    if (clickingToggle(e.target)) toggleMenu()
    else if (clickingOutsideNav(e.target)) closeMenu()
  }

  document.addEventListener('click', onClick)
})()
