;(function() {
  'use strict'

  var toggle = e => {
    var toggleTarget =
      e.target.dataset.toggle ||
      e.target.parentElement.dataset.toggle ||
      e.target.parentElement.parentElement.dataset.toggle
    if (!toggleTarget) return

    var target = document.querySelector(`[data-target="${toggleTarget}"]`)
    var baseClass = target.dataset.baseClass

    if (target.className.indexOf('open') > -1) {
      target.className = baseClass
    } else {
      target.className += ' open'
    }
  }

  document.addEventListener('click', toggle)
})()
