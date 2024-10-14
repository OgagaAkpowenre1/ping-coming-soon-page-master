const input = document.getElementById("email");
const emailBtn = document.getElementById("email-btn");
const inputContainer = document.getElementById("email-input");

emailBtn.addEventListener("click", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let prevError = document.querySelector(".error-paragraph");

  if (!emailPattern.test(input.value.trim())) {
    if (!prevError) {
      const errorParagraph = document.createElement("p");
      errorParagraph.innerText = "Please provide a valid email address";
      errorParagraph.classList.add("error-paragraph");
      inputContainer.insertAdjacentElement("afterend", errorParagraph);
    }
  } else {
    if(prevError){
        prevError.remove()
    }
  }
});
