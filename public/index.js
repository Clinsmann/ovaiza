function calculateProfit() {
  const pricePerBag = document.getElementById("pricePerBag").value;
  const walletAmount = document.getElementById("walletAmount").value;
  const profitPerBag = document.getElementById("profitPerBag").value;
  const ownersPercentage = 0.3;
  const customersPercentage = 0.7;

  const totalBagsBought =
    Math.floor(parseInt(walletAmount)) / parseInt(pricePerBag);
  const totalProfit = totalBagsBought * parseInt(profitPerBag);
  const ownersProfit = ownersPercentage * totalProfit;
  const customersProfit = customersPercentage * totalProfit;

  console.log({ ownersProfit, customersProfit });

  document.getElementById("profit").innerHTML = `&#8358; ${customersProfit}`;
}

function reset() {}

(() => {
  document.getElementById("ownersPercentage").value = '30%';
  document.getElementById("customersPercentage").value = '70%';
})();