document.body.onload += function () {
  const targets = document.getElementsByClassName("bg-animated-lovelace");

  for (let i = 0; i < targets.length; i++) {
    animate(targets[i]);
  }

  function animate(target) {
    target.style.backgroundImage = "url(./imagens/background-animated.jpeg)";
    target.style.backgroundSize = "cover";
    target.style.backgroundPosition = "center top";
    target.style.backgroundRepeat = "no-repeat";

    if (target.style.transition === "") {
      target.style.transition = "background-position .8s";
    } else {
      target.style.transition += ", background-position .8s";
    }

    target.onmouseenter = function () {
      target.style.backgroundPosition = "center bottom";
    };
    target.onfocus = function () {
      target.style.backgroundPosition = "center bottom";
    };

    target.onmouseleave = function () {
      target.style.backgroundPosition = "center top";
    };
    target.onblur = function () {
      target.style.backgroundPosition = "center top";
    };
  }
};
