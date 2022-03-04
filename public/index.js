let errors;
let inputs;
const requiredText = "This field is required";
const shouldBeANumberText = "Please input a number";

(() => {
  document.getElementById("customersPercentage").value = "70%";
  inputs = {
    pricePerBag: document.getElementById("pricePerBag"),
    walletAmount: document.getElementById("walletAmount"),
    profitPerBag: document.getElementById("profitPerBag"),
  };
  errors = {
    pricePerBagError: document.getElementById("pricePerBagError"),
    walletAmountError: document.getElementById("walletAmountError"),
    profitPerBagError: document.getElementById("profitPerBagError"),
  };
})();

const isNumber = (value) => !isNaN(parseInt(value));

const formatNumber = (number) =>
  `₦${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const validateField = (val, element) => {
  let value = cleanValue(val);
  if (!value) element.innerHTML = requiredText;
  if (!isNumber(value)) element.innerHTML = shouldBeANumberText;
};

const doValidation = () =>
  Object.values(inputs).forEach(({ value }, index) =>
    validateField(value, Object.values(errors)[index])
  );

const cleanValue = (val) => {
  let value = val.replace(/ /g, "");
  value = value.replace(/₦/g, "");
  value = value.replace(/,/g, "");
  return value;
};

const reset = () => {
  document.getElementById("profit").innerHTML = '';
  Object.values(inputs).forEach((input) => (input.value = ""));
  Object.values(errors).forEach((input) => (input.innerHTML = ""));
};

const calculateProfit = () => {
  doValidation();
  const customersPercentage = 0.7;
  const amountInWallet = Math.floor(cleanValue(inputs.walletAmount.value));
  const profitPerBag = Math.floor(cleanValue(inputs.profitPerBag.value));
  const pricePerBag = Math.floor(cleanValue(inputs.pricePerBag.value));
  const totalBagsBought = Math.floor(amountInWallet/pricePerBag);
  const totalProfit = totalBagsBought * profitPerBag;
  const customersProfit = customersPercentage * totalProfit;

  if (isNaN(customersProfit)) return;

  document.getElementById("totalBags").innerHTML = totalBagsBought.toLocaleString();
  document.getElementById("profit").innerHTML = formatNumber(customersProfit);
};

Object.values(inputs).forEach((element) => {
  element.addEventListener("keyup", function () {
    let value = cleanValue(this.value);
    if (isNumber(value)) this.value = formatNumber(value);
  });
});
