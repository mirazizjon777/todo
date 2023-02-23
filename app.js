const input = document.querySelector("input");

const ok = document.querySelector(".ok");
const no = document.querySelector(".no");
const x = document.querySelector(".x");
const text = document.querySelector(".text");
// const text = document.getElementById("text");
const submit = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const completed = document.querySelector(".completed");
const footer = document.querySelector(".footer");

const ss = [];
// Ok No
function ad() {
  ok.addEventListener("click", () => {
    text.classList.toggle("line");
  });
}
ad();

// no.addEventListener('click', () => {
//     x.remove()
// })
function box() {
  const x = document.querySelector(".x");
  x.remove();
}

// ADD REMOVE
submit.addEventListener("click", () => {
  let inputVal = input.value;
  if (inputVal != "") {
    let title = `<div class="x">
  <h2 class="text">${input.value}</h2>
  <div class="ok-no">
    <a class="a ok" href="#">✔</a>
    <button class="a no" href="#" onclick="box()">✖</button>
  </div>`;
    footer.innerHTML += title;
  } else {
    alert("so'z kiriting!");
  }
  input.value = "";
});
// ALL
clear.addEventListener("click", () => {
  footer.innerHTML = "";
});

completed.addEventListener("click", () => {});
// ALL end
