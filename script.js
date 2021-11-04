const BillInput = document.querySelector(".bill-number");
const NumberOfPeopleInput = document.querySelector(".numberofpeople");
const CustomTipInput = document.querySelector("#custom");
const Form = document.querySelector(".left-section");
const Buttons = document.querySelectorAll(".percent-button");

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(BillInput.value);
  console.log(NumberOfPeopleInput.value);
  console.log(CustomTipInput.value);
  Buttons.forEach((Buttons) => {
    // button.classList.add("selected");
    log('button');
    // console.log(Buttons);
  });
});

// Buttons.addEventListener("click", () => {
//   console.log(Button.value);
// e.preventDefault();
// Buttons.forEach(button => {
//     button.classList.add("selected");
// });
// });


// hhrhtrhgjhfdscffhguiiiijjujjj