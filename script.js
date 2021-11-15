const Buttons = document.querySelectorAll(".percent-button");
const BillNumber = document.querySelector(".bill-number");
const percentCustom = document.querySelector(".custom");
const BillError = document.querySelector(".bill-error");

Buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (BillNumber.value == "") {
      // alert("Please enter a bill number");
      BillError.style.display = "block";
    } else {
      BillError.style.display = "none";
      var percent = button.innerHTML.substring(0, button.innerHTML.length - 1);

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
