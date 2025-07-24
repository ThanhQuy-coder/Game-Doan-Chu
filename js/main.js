function changePage(url, score = 0, correct = 0, incorrect = 0) {
  // Han che su chinh sua cua nguoi choi
  sessionStorage.setItem("playerScore", score);
  sessionStorage.setItem("incorrect", incorrect);
  sessionStorage.setItem("correct", correct);
  
  const basePath = window.location.pathname.split("/").slice(0, 2).join("/");
  window.location.href = `${basePath}/html/loading.html?next=${encodeURIComponent(
    url
  )}`;
}

var bien = true;

function handleVolume() {
  const musicOn = document.querySelector("#music-on");
  const musicOff = document.querySelector("#music-off");
  const music = document.querySelector("#music");

  if (bien === true) {
    musicOn.style.display = "none";
    musicOff.style.display = "block";
    music.pause();
    bien = false;
  } else {
    musicOn.style.display = "block";
    musicOff.style.display = "none";
    music.play();
    bien = true;
  }
}
