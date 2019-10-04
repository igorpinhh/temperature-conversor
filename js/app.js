const btn = document.querySelector("#convert");
const upVal = document.getElementById("getValue");
const postNumber = 1;
const errorMsg = "you cannot convert by the same base unit";
const input = document.getElementById("numberTemp");
const invertBtn = document.getElementById("invert");

window.onload = function() {
  input.value = '0';
  input.focus();
};

const neo = () => {
  let n = parseInt(document.querySelector("#numberTemp").value, 10);
  const toConv = document.getElementById("unity");
  const i = document.querySelector("#convertedNumb");
  const fromConv = document.getElementById("from");

  switch (toConv.value) {
    case "fahrenheit":
      switch (fromConv.value) {
        //from celsius to fahrenheit
        case "celsius":
          (function farToCel() {
            console.log("from celsius to fahrenheit");
            let f = (n * 9) / 5 + 32;
            i.innerHTML = f.toFixed(postNumber);
          })();
          break;

        //kelvin to fahrenheit
        case "kelvin":
          (function farToKel() {
            let g = n + 459.67;
            let f = (g * 5) / 9;
            i.innerHTML = f.toFixed(postNumber);
          })();
          break;

        //fahrenheit to fahrenheit result in error
        case "fahrenheit":
          alert(errorMsg);
          break;
      }
      break;

    case "celsius":
      switch (fromConv.value) {
        case "kelvin":
          (function celToKel() {
            let f = n - 273.15;
            i.innerHTML = f.toFixed(postNumber);
          })();
          break;

        case "fahrenheit":
          (function fahToCel() {
            let a = n - 32;
            let f = (a * 5) / 9;
            console.log("from fahrenheit to celsius");
            i.innerHTML = f.toFixed(postNumber);
          })();
          break;

        case "celsius":
          alert(errorMsg);
          break;
      }
      break;

    case "kelvin":
      switch (fromConv.value) {
        //fahrenheit to kelvin
        case "fahrenheit":
          (function kelToFah() {
            let k = n + 459.67;
            k = (k * 5) / 9;
            i.innerHTML = k.toFixed(postNumber);
          })();
          break;

        case "kelvin":
          alert(errorMsg);
          break;

        // celsius to kelvin
        case "celsius":
          (function kelToCel() {
            let k = n + 273.15;
            i.innerHTML = k.toFixed(postNumber);
          })();
          break;
      }
      break;
  }
};

btn.addEventListener("click", () => {
  neo();
  input.focus();
});

input.addEventListener("keypress", () => {
  if (event.keyCode === 13) {
    neo();
    input.focus();
  }
});

upVal.addEventListener("click", () => {
  const n = document.getElementById("convertedNumb");
  const destin = document.getElementById("numberTemp");
  destin.value = n.innerHTML;
  document.getElementById("convertedNumb").innerHTML = "0";
});

const invertOp = () => {
  let opIn = document.getElementById("from");
  let opTo = document.getElementById("unity");

  let temp = opIn.value;
  opIn.value = opTo.value;
  opTo.value = temp;
};

invertBtn.addEventListener("click", () => {
  invertOp();
});
