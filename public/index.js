(() => {
  document.getElementById("ownersPercentage").value = '30%';
  document.getElementById("customersPercentage").value = '70%';
})();

let errors;
let inputs;
const isNumber = (value) => !isNaN(parseInt(value));

function prepareElements() {
  inputs = {
    pricePerBag: document.getElementById("pricePerBag"),
    walletAmount: document.getElementById("walletAmount"),
    profitPerBag: document.getElementById("profitPerBag"),
  };
  errors = {
    pricePerBagError: document.getElementById("pricePerBagError"),
    walletAmountError: document.getElementById("walletAmountError"),
    profitPerBagError: document.getElementById("profitPerBagError"),
  }
};

function validateField(value, element) {
  const requiredText = "This field is required";
  const shouldBeANumberText = "Please input a number";
  if(!value) element.innerHTML = requiredText;
  if(!isNumber(value)) element.innerHTML = shouldBeANumberText;
}

function doValidation() { 
  Object.values(inputs).forEach(({value}, index) => validateField(value, Object.values(errors)[index]));
}

function calculateProfit() {
  prepareElements();
  doValidation();
  const ownersPercentage = 0.3;
  const customersPercentage = 0.7;
  const totalBagsBought = Math.floor(parseInt(inputs.walletAmount.value)) / parseInt(inputs.pricePerBag.value);
  const totalProfit = totalBagsBought * parseInt(inputs.profitPerBag.value);
  const ownersProfit = ownersPercentage * totalProfit;
  const customersProfit = customersPercentage * totalProfit;
  if(isNaN(customersProfit)) return;
  document.getElementById("profit").innerHTML = `&#8358; ${customersProfit}`;
}

function reset() {
  console.log({inputs, errors});
  Object.values(inputs).forEach(input => input.value = "");
  Object.values(errors).forEach(input => input.innerHTML = "");
}