function changeQty(button, change) {
  const qtySpan = button.parentElement.querySelector(".qty");
  let qty = parseInt(qtySpan.textContent) + change;
  if (qty < 1) qty = 1;
  qtySpan.textContent = qty;

  // Cập nhật tổng sản phẩm
  updateTotalItems();
}

function updateTotalItems() {
  const qtys = document.querySelectorAll(".qty");
  let total = 0;
  qtys.forEach(q => total += parseInt(q.textContent));
  document.getElementById("total-items").textContent = total;
}
