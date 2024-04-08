function onCreate() {
  create();
}

let spin = document.querySelector('.iLoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('iHideLoader');
  setTimeout(() => {
    spin.remove();
  }, 10000);
});

let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'assets/stylesheet/style.css';
head.appendChild(link);

function load() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() { 
    x.className = x.className.replace("show", ""); 
    window.open('https://github.com/Lodingglue/Eclipse/releases/download/Ecl1.0/app_public_release_universal.apk', '_blank')
  }, 6000);
}

function loadString(a, b) {
  document.getElementById(a).innerHTML = b;
}

function snack(msg) {
  var x = document.getElementById("custom");
  x.innerHTML = msg;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 6000);
}

function manga() {
  snack('<i class="fa-solid fa-info"></i> Coming soon');
}

function share() {
document.getElementById('share').addEventListener('click', function () {
  let urlToShare = window.location.href;
  let textToShare = "Eclipse is a alternative to crunchy roll and funimation but for free and it uses servers from all the popular free Anime websites to stream it. You can change it from settings.";

  if (navigator.share) {
    navigator.share({
        title: document.title,
        text: textToShare,
        url: urlToShare,
      })
      .then(() => {
        snack('<i class="fa-solid fa-check"></i> Shared successfully');
      })
      .catch((error) => {
        snack('<i class="fa-solid fa-xmark"></i> ' + error);
      });
  } else {
    snack('<i class="fa-solid fa-xmark"></i> Web Share API not supported');
  }
});
}

function github() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() { 
    x.className = x.className.replace("show", ""); 
    window.open('https://github.com/Lodingglue/Eclipse/', '_blank')
  }, 6000);
}

function discord() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() { 
    x.className = x.className.replace("show", ""); 
    window.open('https://discord.com/invite/JgMahzEvrC', '_blank')
  }, 6000);
}

var body = document.querySelector('body');
var isBlack = false;

function change() {
  snack('<i class="fa-solid fa-house"></i> Theme Changed');
  if (isBlack) {
    body.style.setProperty('background', 'url("assets/stylesheet/bg.webp")');
  } else {
    body.style.setProperty('background', '#000');
  }
  isBlack = !isBlack;
}
