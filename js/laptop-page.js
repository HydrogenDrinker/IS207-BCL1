// js/laptop-page.js
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".products");
  productContainer.innerHTML = ""; // Xóa demo cũ

  // Duyệt qua danh sách sản phẩm từ PRODUCTS
  for (const [id, product] of Object.entries(PRODUCTS)) {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <div class="image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <p class="new">Mới</p>
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="buy">Mua ngay</button>
      <a href="chi-tiet-laptop.html?id=${id}" class="details">Tìm hiểu thêm</a>
    `;

    // Thêm sự kiện cho nút "Mua ngay"
    div.querySelector(".buy").addEventListener("click", () => {
      alert(`🛒 Đã thêm "${product.name}" vào giỏ hàng!`);
    });

    productContainer.appendChild(div);
  }

  // (Tuỳ chọn) — Có thể thêm hiệu ứng hoặc lọc/sắp xếp ở đây
});
