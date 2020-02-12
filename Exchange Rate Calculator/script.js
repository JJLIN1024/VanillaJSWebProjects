const currency1 = document.getElementById("currency1-select");
const currency2 = document.getElementById("currency2-select");
const currenct1_text = document.getElementById("amount-one");
const currenct2_text = document.getElementById("amount-two");
const swap_btn = document.getElementById("swap-btn");
const rateElement = document.getElementById("swap-text");

// Fetch exchange rates and update the DOM
function calculate() {

  const c1 = currency1.value;
  const c2 = currency2.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${c1}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[c2];
      rateElement.innerText = `1 ${c1} = ${rate} ${c2}`;
      currenct2_text.value = (currenct1_text.value  * rate).toFixed(2);
    });
}

currency1.addEventListener('change', calculate);
currenct1_text.addEventListener('input', calculate);
currency2.addEventListener('change', calculate);
currenct2_text.addEventListener('input', calculate);

swap_btn.addEventListener('click', () => {
  const temp = currency1.value;
  currency1.value = currency2.value;
  currency2.value = temp;
  calculate();
});

calculate();