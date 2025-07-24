const params = new URLSearchParams(window.location.search);
const score = sessionStorage.getItem("playerScore") || 0;
const incorrect = sessionStorage.getItem("incorrect") || 0;
const correct = sessionStorage.getItem("correct") || 0;

document.getElementById("sum-point").innerText = `Điểm: ${score}`;
document.getElementById(
  "sumAnswerCorrect"
).innerText = `Số lượng câu đúng: ${correct}`;
document.getElementById(
  "sumAnswerIncorrect"
).innerText = `Số lượng câu sai: ${incorrect}`;
