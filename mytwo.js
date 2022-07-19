var container = document.querySelector(".inner-slide-container");
var tst = document.querySelectorAll(".text_box");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var textslide = document.querySelectorAll(".textslide");
var imgbox = document.querySelectorAll(".imgbox");
var textslide = document.querySelectorAll(".textslide");
var menu = document.querySelector("#menubtn")
var navber = document.querySelector("nav ul ")
var count = 0;
var textslideCount = 0;

function changebg() {
  const images = [
    'url("img/one.jpg")',
    'url("img/two.jpg")',
    'url("img/three.jpg")',
    'url("img/four.jpg")',
  ];

  count++;
  if (count >= images.length) {
    count = 0;
    container.style.backgroundImage = images[count];
  } else {
    container.style.backgroundImage = images[count];
  }
}

setInterval(changebg, 3000);
const bgimg = [
  'url("img/bg1.jpg")',
  'url("img/bg2.jpg")',
  'url("img/bg3.jpg")',
  'url("img/bg4.jpg")',
  'url("img/bg5.jpg")',
  'url("img/bg7.png")',
];

function changebg2() {
  imgbox[0].style.backgroundImage = bgimg[0];
  imgbox[1].style.backgroundImage = bgimg[1];
  imgbox[2].style.backgroundImage = bgimg[2];
  imgbox[3].style.backgroundImage = bgimg[3];
  imgbox[4].style.backgroundImage = bgimg[4];
  imgbox[5].style.backgroundImage = bgimg[5];
  
}

function hideAllTextSlide(slides) {
  slides.forEach((itm) => {
    itm["style"]["display"] = `none`;
  });
}


function display() {
  right.onclick = function () {
    if (textslideCount > 1) {
      textslideCount = -1;
    }

    textslideCount++;

    hideAllTextSlide(textslide);

    textslide[textslideCount - 1] &&
      (textslide[textslideCount - 1].style.display = "none");

    textslide[textslideCount] &&
      (textslide[textslideCount].style.display = "block");
  };
}

menu.onclick = () =>{
  menu.classList.toggle('fa-times')
  navber.classList.toggle("show")
}


changebg2();
display();
