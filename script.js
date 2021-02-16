window.addEventListener("DOMContentLoaded", () => {
  let d, h, m, s, animation;

  function init() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    clock();
  }

  function clock() {
    s++;
    if (s == 60) {
      s = 0;
      m++;
      if (m == 60) {
        m = 0;
        h++;
        if (h == 24) {
          h = 0;
        }
      }
    }
    $("seconds", s);
    $("minutes", m);
    $("hours", h);
    animation = setTimeout(clock, 1000);
  }

  function $(id, num) {
    if (num < 10) {
      num = "0" + num;
    }
    document.getElementById(id).innerHTML = num;
  }
  window.onload = init;
});
