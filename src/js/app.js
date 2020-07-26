const btn = document.getElementById('convert');
const upVal = document.getElementById('getValue');
const input = document.getElementById('numberTemp');
const invertBtn = document.getElementById('invert');
const convertedNumb = document.getElementById('convertedNumb');
const toConv = document.getElementById('unit');
const fromConv = document.getElementById('from');
const afterDot = 1;
const errorMsg = 'you cannot convert by the same base unita';

window.addEventListener('load', () => {
  input.value = '';
});

const neo = () => {
  let n = parseFloat(input.value, 10.0123);

  switch (toConv.value) {
    case 'fahrenheit':
      switch (fromConv.value) {
        //from celsius to fahrenheit
        case 'celsius':
          (function farToCel() {
            console.log('from celsius to fahrenheit');
            let f = (n * 9) / 5 + 32;
            convertedNumb.innerHTML = f.toFixed(afterDot);
          })();
          break;

        //kelvin to fahrenheit
        case 'kelvin':
          (function farToKel() {
            console.log('from kelvin to fahrenheit');
            let g = n + 459.67;
            let f = (g * 5) / 9;
            convertedNumb.innerHTML = f.toFixed(afterDot);
          })();
          break;

        //fahrenheit to fahrenheit result in error
        case 'fahrenheit':
          alert(errorMsg);
          break;
      }
      break;

    case 'celsius':
      switch (fromConv.value) {
        case 'kelvin':
          (function celToKel() {
            let f = n - 273.15;
            convertedNumb.innerHTML = f.toFixed(afterDot);
          })();
          break;

        case 'fahrenheit':
          (function fahToCel() {
            let a = n - 32;
            let f = (a * 5) / 9;
            // console.log('from fahrenheit to celsius');
            convertedNumb.innerHTML = f.toFixed(afterDot);
          })();
          break;

        case 'celsius':
          alert(errorMsg);
          break;
      }
      break;

    case 'kelvin':
      switch (fromConv.value) {
        //fahrenheit to kelvin
        case 'fahrenheit':
          (function kelToFah() {
            let k = n + 459.67;
            k = (k * 5) / 9;
            convertedNumb.innerHTML = k.toFixed(afterDot);
          })();
          break;

        case 'kelvin':
          alert(errorMsg);
          break;

        // celsius to kelvin
        case 'celsius':
          (function kelToCel() {
            let k = n + 273.15;
            convertedNumb.innerHTML = k.toFixed(afterDot);
          })();
          break;
      }
      break;
  }
};

btn.addEventListener('click', () => {
  neo();
});

input.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    neo();
  }
});

upVal.addEventListener('click', () => {
  const n = document.getElementById('convertedNumb');
  input.value = n.innerHTML;
  document.getElementById('convertedNumb').innerHTML = 0;
});

const invertOp = () => {
  let opIn = document.getElementById('from');
  let opTo = document.getElementById('unit');

  let temp = opIn.value;
  opIn.value = opTo.value;
  opTo.value = temp;
};

invertBtn.addEventListener('click', () => {
  invertOp();
});

window.addEventListener('keypress', () => {
  if (event.keyCode === 32) {
    invertOp();
  }
});
