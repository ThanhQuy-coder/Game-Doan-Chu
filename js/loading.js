const params = new URLSearchParams(window.location.search);
const nextPage = params.get("next");

setTimeout(() => {
  if (nextPage === "index.html") {
    window.location.pathname = "/Game-Doan-Chu";
    window.location.href;
    return;
  }
  if (nextPage) {
    window.location.href = decodeURIComponent(nextPage);
    return;
  }
}, 2000);
