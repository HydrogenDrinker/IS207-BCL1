const accountBtn = document.getElementById("account-info-btn");
const orderBtn = document.getElementById("order-history-btn");
const accountInfo = document.getElementById("account-info");
const orderHistory = document.getElementById("order-history");

accountBtn.addEventListener("click", () => {
  accountInfo.classList.remove("hidden");
  orderHistory.classList.add("hidden");
  accountBtn.classList.add("active");
  orderBtn.classList.remove("active");
});

orderBtn.addEventListener("click", () => {
  orderHistory.classList.remove("hidden");
  accountInfo.classList.add("hidden");
  orderBtn.classList.add("active");
  accountBtn.classList.remove("active");
});
