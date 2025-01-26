const coinBalance = {
  BLUR: 0,
  bNEO: 0,
  BUSD: 0,
  USD: 742.34,
  ETH: 523.67,
  GMX: 0,
  stEVMOS: 0,
  LUNA: 0,
  rATOM: 0,
  STRD: 0,
  EVMOS: 0,
  IBCX: 0,
  IRIS: 0,
  ampLUNA: 0,
  KUJI: 0,
  stOSMO: 0,
  USDC: 0,
  axlUSDC: 0,
  ATOM: 298.12,
  stATOM: 0,
  OSMO: 0,
  rSWTH: 0,
  stLUNA: 0,
  LSI: 0,
  OKB: 0,
  OKT: 0,
  SWTH: 0,
  USC: 0,
  WBTC: 0,
  wstETH: 0,
  YieldUSD: 0,
  ZIL: 0,
};

coinPrice = [
  {
    currency: "BLUR",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.20811525423728813,
  },
  { currency: "bNEO", date: "2023-08-29T07:10:50.000Z", price: 7.1282679 },
  { currency: "BUSD", date: "2023-08-29T07:10:40.000Z", price: 0.999183113 },
  {
    currency: "BUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.9998782611186441,
  },
  { currency: "USD", date: "2023-08-29T07:10:30.000Z", price: 1 },
  {
    currency: "ETH",
    date: "2023-08-29T07:10:52.000Z",
    price: 1645.9337373737374,
  },
  {
    currency: "GMX",
    date: "2023-08-29T07:10:40.000Z",
    price: 36.345114372881355,
  },
  {
    currency: "stEVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.07276706779661017,
  },
  {
    currency: "LUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.40955638983050846,
  },
  {
    currency: "rATOM",
    date: "2023-08-29T07:10:40.000Z",
    price: 10.250918915254237,
  },
  {
    currency: "STRD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.7386553389830508,
  },
  {
    currency: "EVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.06246181355932203,
  },
  {
    currency: "IBCX",
    date: "2023-08-29T07:10:40.000Z",
    price: 41.26811355932203,
  },
  {
    currency: "IRIS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.0177095593220339,
  },
  {
    currency: "ampLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.49548589830508477,
  },
  { currency: "KUJI", date: "2023-08-29T07:10:45.000Z", price: 0.675 },
  { currency: "stOSMO", date: "2023-08-29T07:10:45.000Z", price: 0.431318 },
  { currency: "USDC", date: "2023-08-29T07:10:40.000Z", price: 0.989832 },
  { currency: "axlUSDC", date: "2023-08-29T07:10:40.000Z", price: 0.989832 },
  {
    currency: "ATOM",
    date: "2023-08-29T07:10:50.000Z",
    price: 7.186657333333334,
  },
  {
    currency: "stATOM",
    date: "2023-08-29T07:10:45.000Z",
    price: 8.512162050847458,
  },
  {
    currency: "OSMO",
    date: "2023-08-29T07:10:50.000Z",
    price: 0.3772974333333333,
  },
  { currency: "rSWTH", date: "2023-08-29T07:10:40.000Z", price: 0.00408771 },
  {
    currency: "stLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.44232210169491526,
  },
  {
    currency: "LSI",
    date: "2023-08-29T07:10:50.000Z",
    price: 67.69661525423729,
  },
  {
    currency: "OKB",
    date: "2023-08-29T07:10:40.000Z",
    price: 42.97562059322034,
  },
  {
    currency: "OKT",
    date: "2023-08-29T07:10:40.000Z",
    price: 13.561577966101694,
  },
  {
    currency: "SWTH",
    date: "2023-08-29T07:10:45.000Z",
    price: 0.004039850455012084,
  },
  { currency: "USC", date: "2023-08-29T07:10:40.000Z", price: 0.994 },
  { currency: "USDC", date: "2023-08-29T07:10:30.000Z", price: 1 },
  { currency: "USDC", date: "2023-08-29T07:10:30.000Z", price: 1 },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.9998782611186441,
  },
  {
    currency: "WBTC",
    date: "2023-08-29T07:10:52.000Z",
    price: 26002.82202020202,
  },
  {
    currency: "wstETH",
    date: "2023-08-29T07:10:40.000Z",
    price: 1872.2579742372882,
  },
  {
    currency: "YieldUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 1.0290847966101695,
  },
  {
    currency: "ZIL",
    date: "2023-08-29T07:10:50.000Z",
    price: 0.01651813559322034,
  },
];

// Get elements
const fromCoinButton = document.getElementById("fromCoinButton");
const toCoinButton = document.getElementById("toCoinButton");
const coinModal = document.getElementById("coinModal");
const closeModalButton = document.getElementById("closeModal");
const coinList = document.getElementById("coinList");
const searchCoin = document.getElementById("searchCoin");

const fromAmountInput = document.getElementById("fromAmount");
const toAmountInput = document.getElementById("toAmount");

const fromBalanceSpan = document.getElementById("fromBalance");
const exchangeRateInfo = document.querySelector(".exchange-rate span");
const transferButton = document.querySelector(".transfer-button");
const previewButton = document.querySelector(".preview-button");
const swapFooter = document.querySelector(".swap-footer");
const detailsContainer = document.getElementById("detailsContainer");
const confirmPriceSpan = document.getElementById("confirm-price-span");
const confirmButton = document.querySelector(".confirm-button");


// success modal
const swapConfirmation = document.getElementById("swapConfirmationContainer");
const successMessage = document.getElementById('successMessage');
const confirmationContent = document.querySelector(".confirmation-content");
const loadingContainer = document.getElementById('loadingContainer');

// Modal elements - confirmation
const modalFromCoinIcon = document.getElementById("modal-from-coin-icon");
const modalFromCoinAmount = document.getElementById("modal-from-coin-amount");
const modalFromCoinName = document.getElementById("modal-from-coin-name");
const modalToCoinIcon = document.getElementById("modal-to-coin-icon");
const modalToCoinAmount = document.getElementById("modal-to-coin-amount");
const modalToCoinName = document.getElementById("modal-to-coin-name");

let activeButton = null; // To track which button triggered the modal

// Dynamically populate coin list in the modal
function populateCoinList(coins, showBalance) {
  const coinList = document.getElementById("coinList");
  coinList.innerHTML = ""; // Clear the list

  for (const currency in coins) {
    const balance = coins[currency];

    const listItem = document.createElement("li");

    const iconUrl = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg`;

    listItem.dataset.currency = currency;
    listItem.innerHTML = `
          <div class="coin-container">
              <img src="${iconUrl}" alt="${currency} Icon" class="coin-icon-2" />
              <span>${currency}</span>
          </div>
          ${
            showBalance
              ? `<span style="color: gray;">${balance.toFixed(2)}</span>`
              : ""
          }
        `;
    listItem.classList.add("coin-item");
    coinList.appendChild(listItem);
  }
}

// Open modal on button click
fromCoinButton.addEventListener("click", () => {
  populateCoinList(coinBalance, true);
  activeButton = fromCoinButton;
  coinModal.style.display = "flex";
});

toCoinButton.addEventListener("click", () => {
  populateCoinList(coinBalance, false);
  activeButton = toCoinButton;
  coinModal.style.display = "flex";
});

// Close modal
closeModalButton.addEventListener("click", () => {
  coinModal.style.display = "none";
});

// Filter coins based on search
searchCoin.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const coins = coinList.querySelectorAll("li");
  coins.forEach((coin) => {
    if (coin.textContent.toLowerCase().includes(searchValue)) {
      coin.style.display = "flex";
    } else {
      coin.style.display = "none";
    }
  });
});

// Update the exchange rate span
function updateExchangeRateAndBalance() {
  const fromCoin = document
    .getElementById("fromCoinButton")
    .querySelector("span").textContent;
  const toCoin = document
    .getElementById("toCoinButton")
    .querySelector("span").textContent;

  const fromPrice = priceMap[fromCoin] || 1;
  const toPrice = priceMap[toCoin] || 1;

  const exchangeRate = fromPrice / toPrice;

  // Update the exchange rate span
  exchangeRateInfo.textContent = `1 ${fromCoin} = ${exchangeRate.toFixed(
    6
  )} ${toCoin}`;

  const balance = coinBalance[fromCoin] || 0; // Get balance or default to 0
  fromBalanceSpan.textContent = `${balance.toFixed(2)} ${fromCoin}`;
}

// Select coin from the modal
coinList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const selectedCoin = e.target.dataset.currency;
    const iconUrl = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${selectedCoin}.svg`;

    // Update the active button with the selected coin
    if (activeButton) {
      activeButton.innerHTML = `
        <img class="coin-icon" src="${iconUrl}" alt="${selectedCoin} Icon"/>
        <span>${selectedCoin}</span>
      `;
    }

    updateExchangeRateAndBalance();

    // Close modal
    coinModal.style.display = "none";
  }
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === coinModal) {
    coinModal.style.display = "none";
  }
});

// ============================
// exchange rate function

// Create a price map for quick lookups
const priceMap = coinPrice.reduce((acc, coin) => {
  acc[coin.currency] = coin.price;
  return acc;
}, {});

// Update the exchange rate and calculate the "To Amount"
function calculateConversion() {
  const fromCurrency = fromCoinButton.querySelector("span").textContent;
  const toCurrency = toCoinButton.querySelector("span").textContent;

  const fromPrice = priceMap[fromCurrency] || 1;
  const toPrice = priceMap[toCurrency] || 1;
  const exchangeRate = fromPrice / toPrice;

  // Update the exchange rate info
  exchangeRateInfo.textContent = `1 ${fromCurrency} = ${exchangeRate.toFixed(
    6
  )} ${toCurrency}`;

  // Calculate "To Amount" dynamically
  const fromAmount = parseFloat(fromAmountInput.value) || 0;
  const toAmount = (fromAmount * fromPrice) / toPrice;

  // Update the "To Amount" input field and grey it out if the value is 0
  toAmountInput.value = toAmount.toFixed(2);
  if (toAmount === 0) {
    toAmountInput.classList.add("disabled");
  } else {
    toAmountInput.classList.remove("disabled");
  }
}

fromAmountInput.addEventListener("input", calculateConversion);

// ============================
// Swap Function
transferButton.addEventListener("click", () => {
  // Swap the currencies
  const fromCoinHTML = fromCoinButton.innerHTML;
  const toCoinHTML = toCoinButton.innerHTML;

  fromCoinButton.innerHTML = toCoinHTML;
  toCoinButton.innerHTML = fromCoinHTML;

  // Get the current currencies
  const fromCoin = fromCoinButton.querySelector("span").textContent;
  const toCoin = toCoinButton.querySelector("span").textContent;

  // Update balances
  const fromBalance = coinBalance[fromCoin]?.balance || 0;
  fromBalanceSpan.textContent = `${fromBalance.toFixed(2)} ${fromCoin}`;

  updateExchangeRateAndBalance();
  const tempValue = fromAmountInput.value;

  // Swap the values
  fromAmountInput.value = parseFloat(toAmountInput.value) == 0 ? "" : toAmountInput.value;
  toAmountInput.value = tempValue;

  validateAmount(fromAmountInput, fromBalanceSpan);
});

// Function to validate input and compare it with balance
function validateAmount(inputElement, balanceElement) {
  const value = inputElement.value;

  if(value == "" || parseFloat(value) == '0') {
    // Disable the "Preview Swap" button
    previewButton.disabled = true;
    previewButton.classList.add("disabled-button");
    return;
  }

  // Remove any characters that are not digits or a decimal point
  inputElement.value = value.replace(/[^0-9.]/g, "");

  // Ensure there's only one decimal point
  if ((value.match(/\./g) || []).length > 1) {
    inputElement.value = value.substring(0, value.length - 1);
  }

  // Extract the balance value from the balance span
  const balance = parseFloat(
    balanceElement.textContent.split(" ")[0].replace(",", "")
  );
  const inputAmount = parseFloat(inputElement.value) || 0;

  if (inputAmount > balance) {
    // Change text color to red
    inputElement.style.color = "red";
    balanceElement.style.color = "red";

    // Disable the "Preview Swap" button
    previewButton.disabled = true;
    previewButton.classList.add("disabled-button");
  } 
  else {
    // Reset text color to default
    inputElement.style.color = "";
    balanceElement.style.color = "";

    previewButton.disabled = false;
    previewButton.classList.remove("disabled-button");
  }
}

// Assign the function to input events
fromAmountInput.addEventListener("input", () =>
  validateAmount(fromAmountInput, fromBalanceSpan)
);

previewButton.addEventListener("click", () => {
  detailsContainer.style.display = "flex";
  swapFooter.style.display = "none";

  confirmPriceSpan.textContent = exchangeRateInfo.textContent;
  transferButton.disabled = true;
  fromAmountInput.setAttribute("readonly", true);
});

// =====================
// confirmation modal
// Function to open and populate the modal
function openSwapConfirmation(fromCoin, fromAmount, toCoin, toAmount) {
  // Update modal content dynamically
  modalFromCoinIcon.src = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${fromCoin}.svg`;
  modalFromCoinAmount.textContent = fromAmount.toFixed(2);
  modalFromCoinName.textContent = fromCoin;

  modalToCoinIcon.src = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${toCoin}.svg`;
  modalToCoinAmount.textContent = toAmount.toFixed(2);
  modalToCoinName.textContent = toCoin;

  // Show the modal
  successMessage.style.display = "none";
  confirmationContent.style.display = "flex";
  swapConfirmation.style.display = "flex";

  // Simulate the swapping process
  setTimeout(() => {
    confirmationContent.style.display = "none"
    successMessage.style.display = "flex";
  }, 3000);
}

// Event listener for Confirm Swap button
confirmButton.addEventListener("click", () => {
  // Replace these values with actual form data or calculations
  console.log(fromAmountInput.value);
  const fromCoin = fromCoinButton.querySelector("span").textContent;
  const toCoin = toCoinButton.querySelector("span").textContent;

  const fromAmount = parseFloat(fromAmountInput.value);
  const toAmount = parseFloat(toAmountInput.value);

  // Open the confirmation modal with the given values
  openSwapConfirmation(fromCoin, fromAmount, toCoin, toAmount);
});

window.addEventListener("load", () => {
  fromAmountInput.value = "";
  toAmountInput.value = "0.00";
  previewButton.disabled = true;
  previewButton.classList.add("disabled-button");
});

// Run once when loaded
updateExchangeRateAndBalance();
validateAmount(fromAmountInput, fromBalanceSpan);
