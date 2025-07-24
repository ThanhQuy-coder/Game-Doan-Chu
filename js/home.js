window.onload = function () {
  nextImage();
  updateScore();
  startTimer();
};
/* KHAI BAO BIEN */
const imageList = [
  {
    src: "../images/questions/bahoa.png",
    answer: "ba hoa",
    suggest: "Hãy để ý số lượng hoa",
  },
  {
    src: "../images/questions/baocao.png",
    answer: "báo cáo",
    suggest: "Hãy đọc tên của chúng",
  },
  {
    src: "../images/questions/hocduong.png",
    answer: "học đường",
    suggest: "Người đàn ông đang học",
  },
  {
    src: "../images/questions/kichdong.png",
    answer: "kích động",
    suggest: "vũ khí trên hình gọi chung là thương 'kích'",
  },
  {
    src: "../images/questions/nanglong.png",
    answer: "nặng lòng",
    suggest: "Cái cân bị nghiêng về một bên do quá 'nặng'",
  },
  {
    src: "../images/questions/noigian.png",
    answer: "nội gián",
    suggest: "Bên ngoài còn được gọi là 'ngoại'",
  },
  {
    src: "../images/questions/xemtuong.png",
    answer: "xem tướng",
    suggest: "Hình được treo là một vị tướng",
  },
];

// index hien tai khi bat dau
var currentIndex = -1;

// diem
var score = 0;
var correct = 0;
var incorrect = 0;

// thoi gian
var timer;
const maxTime = 60;
var currentTime = 0;

/* CAC HAM CHUC NANG */
// Ham chuyen anh
function nextImage() {
  const input = document.getElementById("answer-input");
  input.value = "";

  var newIndex;
  do {
    newIndex = Math.floor(Math.random() * imageList.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;

  const img = document.getElementById("question-image");
  img.src = imageList[currentIndex].src;
}

// Ham kiem tra dap an
function checkAnswer() {
  // noi dung tra loi
  const input = document.getElementById("answer-input");
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = imageList[currentIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score += 100;
    ++correct;
    updateScore();
    showFlash("Đáp án chính xác, nhận 100", "success");
  } else {
    ++incorrect;
    if (score === 0) {
      showFlash("Đáp án không chính xác", "error");
    } else {
      score -= 100;
      updateScore();
      showFlash("Đáp án không chính xác, trừ 100", "error");
    }
  }
  nextImage();
}

// Ham hien thi tin nhan ket qua dung/sai
function showFlash(message, type = "success", time = 2500) {
  const setTime = time;
  const flash = document.getElementById("flashMessage");
  const text = document.getElementById("flashText");

  text.innerText = message;
  flash.className = `flash-message ${type}`;
  flash.classList.remove("hidden");

  setTimeout(() => {
    flash.classList.add("hidden");
  }, setTime);
}

// cập nhật điểm
function updateScore() {
  const scoreElement = document.getElementById("point");
  scoreElement.innerHTML = `Điểm: ${score}`;
}

// Ham bat dau thoi gian
function startTimer() {
  const timeBar = document.getElementById("timeBar");
  const timeText = document.getElementById("timeText");
  currentTime = 0;

  // Reset
  timeBar.style.width = "0%";
  timeBar.style.backgroundColor = "#4caf50"; // reset xanh
  timeText.innerText = maxTime;

  timer = setInterval(() => {
    currentTime++;
    const remainingTime = maxTime - currentTime;
    const percent = (currentTime / maxTime) * 100;
    timeBar.style.width = `${percent}%`;
    timeText.innerText = remainingTime;

    // Doi mau theo thoi gian
    if (remainingTime <= 10) {
      timeBar.style.backgroundColor = "#e74c3c"; // đỏ
    } else if (remainingTime <= 20) {
      timeBar.style.backgroundColor = "#f39c12"; // cam
    } else {
      timeBar.style.backgroundColor = "#4caf50"; // xanh
    }

    if (currentTime >= maxTime) {
      clearInterval(timer);
      timeText.innerText = "0";
      changePage("end.html", score, correct, incorrect);
    }
  }, 1000);
}

// Ham ky nang
function skills(choice) {
  const option = choice;
  switch (option) {
    case 1:
      nextImage();
      const skillFreeOneTime = document.getElementById("free-one-time");
      skillFreeOneTime.style.display = "none";
      break;
    case 2:
      const suggest = imageList[currentIndex].suggest;
      showFlash(suggest, "success", 4000);
      const skillSuggestion = document.getElementById("suggestion");
      skillSuggestion.style.display = "none";
      break;
    case 3:
      currentTime = Math.max(0, currentTime - 10);
      showFlash("Đã thêm 10 giây!", "success");
      const skillAddTime = document.getElementById("add-time");
      skillAddTime.style.display = "none";
      break;
  }
}
