const Buttons = document.querySelectorAll(".percent-button");
const BillNumber = document.querySelector(".bill-number");
const percentCustom = document.querySelector(".custom");

Buttons.forEach((button) => {
  button.addEventListener("click", function () {
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
  });
});

percentCustom.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
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
});
