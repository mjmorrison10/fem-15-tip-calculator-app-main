const Buttons = document.querySelectorAll(".percent-button"); // Get all the buttons
const BillNumber = document.querySelector(".bill-number"); // bill number input
const percentCustom = document.querySelector(".custom"); //custom percent
const BillError = document.querySelector(".bill-error"); // Error message for bill number

Buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (BillNumber.value == "") {
      BillError.style.display = "block"; // show error message
    } else {
      BillError.style.display = "none"; // hide error message
      var percent = button.innerHTML.substring(0, button.innerHTML.length - 1); // get percent from button

      var bill = BillNumber.value; // get bill value
      var tip = (bill * percent) / 100; // calculate tip

      var numberOfPeople = document.querySelector(".numberofpeople").value; // get number of people
      var total = parseInt(bill) + parseInt(tip); // calculate total

      var tipDisplay = document.querySelector(".tip-amount-cash"); // get tip display
      var totalDisplay = document.querySelector(".tip-total-cash"); // get total display

      if (numberOfPeople !== "") {
        tip = tip / numberOfPeople; // calculate tip per person
        total = total / numberOfPeople; // calculate total per person
      }

      tipDisplay.innerHTML = tip.toFixed(2); // display tip
      totalDisplay.innerHTML = total; // display total
    }
  });
});

percentCustom.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    if (BillNumber.value == "") {
      BillError.style.display = "block";
    } else {
      BillError.style.display = "none";

      console.log(percentCustom.value);

      var percent = percentCustom.value;

      var bill = BillNumber.value;
      var tip = (bill * percent) / 100;

      var numberOfPeople = document.querySelector(".numberofpeople").value;
      var total = parseInt(bill) + parseInt(tip);
      var tipDisplay = document.querySelector(".tip-amount-cash");
      var totalDisplay = document.querySelector(".tip-total-cash");

      if (numberOfPeople !== "") {
        console.log(numberOfPeople);
        tip = tip / numberOfPeople;
        total = total / numberOfPeople;
      }

      tipDisplay.innerHTML = tip.toFixed(2);
      totalDisplay.innerHTML = total;
    }
  }
});
