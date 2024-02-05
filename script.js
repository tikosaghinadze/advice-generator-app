const button = document.querySelector(".svg-btn-div");
const advaice = document.querySelector("p");
const advaiceId = document.querySelector(".advice-id");

button.addEventListener("click", () => {
  randomAdvices();
});

async function fetchRandomAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
  } catch (error) {
    console.error("Error fetching advice:", error);
    return null;
  }
}

function updateDOM(advice) {
  if (advice) {
    advaice.textContent = advice.slip.advice;
    advaiceId.textContent = advice.slip.id;
  }
}

async function randomAdvices() {
  const randomAdvice = await fetchRandomAdvice();
  updateDOM(randomAdvice);
}
