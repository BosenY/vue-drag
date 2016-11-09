;(function () {
  var vueDrag={};

  vueDrag.install=function(Vue) {

    Vue.directive('drag', {
      bind: function(el, binding, vnode) {
        var offsetX = 0;
        var offsetY = 0;
        function down(e) {
          offsetX = (e.pageX - el.offsetLeft);
          offsetY = (e.pageY - el.offsetTop);
          addEventListener('mousemove', move);
          addEventListener('mouseup', up);
        }
        function move(e) {
          el.style.left = (e.pageX - offsetX) + 'px';
          el.style.top = (e.pageY - offsetY) + 'px';
        }
        function up() {
          removeEventListener('mousemove', move);
          removeEventListener('mouseup', up);
        }
        el.addEventListener('mousedown', down)
      }
    })

  }

  if (typeof exports == "object") {
  module.exports = vueDrag;
} else if (typeof define == "function" && define.amd) {
  define([], function () {
    return vueDrag
  })
} else if (window.Vue) {
  window.vueDrag = vueDrag;
  Vue.use(vueDrag);
}
})();
