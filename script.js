function start() {

  const name = "Ayat";

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const title = document.getElementById("title");

  // cinematic transition
  intro.style.transition = "all 1.2s ease";
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.1)";

  setTimeout(() => {
    intro.classList.add("hidden");
    main.classList.remove("hidden");

    typeText(`To ${name} ❤️`, title);

    createHearts();
  }, 1200);
}


// ✨ typing effect
function typeText(text, element) {
  element.innerText = "";
  let i = 0;

  const typing = setInterval(() => {
    element.innerText += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(typing);
      glowEffect(element);
    }
  }, 120);
}


// 💖 glow effect after typing
function glowEffect(element) {
  element.style.textShadow = "0 0 15px #ff4d6d, 0 0 30px #ff4d6d";
  element.style.transition = "1s";
}


// ❤️ floating hearts animation
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "80%";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }, 250);
}


// 🎵 music control
function playMusic() {
  const music = document.getElementById("music");
  music.volume = 0.6;
  music.play();
}