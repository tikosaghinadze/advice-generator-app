//takes elements
const button = document.querySelector(".svg-btn-div");
const advaice = document.querySelector("p");
const advaiceId = document.querySelector(".advice-id");

//add click event
button.addEventListener("click", () => {
  randomAdvices();
});

async function randomAdvices() {
  const randomAsvaice = await fetch("https://api.adviceslip.com/advice");
  const getAdvaice = await randomAsvaice.json();
  const savedAdviceId = getAdvaice.slip.id;
  const savedAdvice = getAdvaice.slip.advice;
  advaice.textContent = savedAdvice;
  advaiceId.textContent = savedAdviceId;
}
