// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
if (mobile_sidebar_menus) {
  var menus_item_child = mobile_sidebar_menus.getElementsByClassName("group");
  for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].className = "site-page group hide";
  }
}

// hacked text effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let hackDom = document.getElementById("hack-text");
if (hackDom)
  hackDom.onmouseover = (event) => {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration - 10) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration - 10 >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 50);
  };
