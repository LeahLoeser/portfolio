document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("bar-col");
  const menu = document.getElementById("menu");

  const topBar = document.querySelector(".bar-con .top");
  const bottomBar = document.querySelector(".bar-con .bottom");
  const middleBar = document.querySelector(".bar-con .middle");

  const slashOne = document.querySelector(".slash-con .one");
  const slashTwo = document.querySelector(".slash-con .two");

  const home = document.getElementById("home");
  const work = document.getElementById("work");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");

  let isMenuActive = true;

  //var for translating middle bar
  let middleBarY;

  //get name of page
  //That's how we know how far down middle bar goes
  const path = window.location.pathname;
  const page = path.split("/").pop();

  //check which page we're in and based on that, we change the amount
  //that middle bar is translated down
  if (page == "index.html") {
    middleBarY = "translateY(44px)";
    home.style.opacity = "0";
  } else if (page == "work.html") {
    middleBarY = "translateY(83px)";
    work.style.opacity = "0";
  } else if (page == "about.html") {
    middleBarY = "translateY(120px)";
    about.style.opacity = "0";
  } else if (page == "contact.html") {
    middleBarY = "translateY(158px)";
    contact.style.opacity = "0";
  }
  //put middle bar in right place on page load
  middleBar.style.transform = middleBarY;

  menuBtn.addEventListener("click", function () {
    isMenuActive = !isMenuActive;
    menu.classList.toggle("active", isMenuActive);
    updateBarsState(isMenuActive);
  });

  function updateBarsState(isActive) {
    if (isActive) {
      topBar.style.transform = "translateY(6px) rotateZ(47deg)";
      bottomBar.style.transform = "translateY(-7px) rotateZ(-47deg)";
      middleBar.style.transform = middleBarY;
      slashOne.style.transform =
        "translateY(7.5px) translateX(-1px) rotateZ(-69deg)";
      slashTwo.style.transform =
        "translateY(1.5px) translateX(4px) rotateZ(-69deg)";
    } else {
      topBar.style.transform = "translateY(0px) rotateZ(0deg)";
      bottomBar.style.transform = "translateY(0px) rotateZ(0deg)";
      middleBar.style.transform = "translateY(0px)";
      slashOne.style.transform =
        "translateY(7.5px) translateX(1.5px) rotateZ(-47deg)";
      slashTwo.style.transform =
        "translateY(1.5px) translateX(1.5px) rotateZ(-135deg)"; //47
    }
  }

  //this function is here to make the bar not slide in on page load
  //but every time it's interacted with after page load it should have
  //smooooooooth transitions
  setTimeout(function () {
    middleBar.style.setProperty(
      "-webkit-transition",
      "all .7s cubic-bezier(0.19, 1, 0.22, 1)"
    );
    middleBar.style.setProperty(
      "-moz-transition",
      "all .7s cubic-bezier(0.19, 1, 0.22, 1)"
    );
    middleBar.style.setProperty(
      "-ms-transition",
      "all .7s cubic-bezier(0.19, 1, 0.22, 1)"
    );
    middleBar.style.setProperty(
      "-o-transition",
      "all .7s cubic-bezier(0.19, 1, 0.22, 1)"
    );
    middleBar.style.setProperty(
      "transition",
      "all .7s cubic-bezier(0.19, 1, 0.22, 1)"
    );
    middleBar.style.setProperty("opacity", "100%");
  }, 10);

  const copyBtn = document.getElementById("link-copy");
  const stringText = "leahloeser@newschool.edu";

  copyBtn.addEventListener("click", function () {
    copyText();
  });

  function copyText() {
    navigator.clipboard.writeText(stringText);
    alert("Copied to clipboard: " + stringText);
  }
});
