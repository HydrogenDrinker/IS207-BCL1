// js/chi-tiet-laptop.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. Lấy product id từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // 2. Kiểm tra có dữ liệu sản phẩm không
  const product = PRODUCTS[productId];
  if (!product) {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Sản phẩm không tồn tại!</h2>";
    return;
  }

  // 3. Hiển thị thông tin sản phẩm
  document.querySelector(".product-info h1").textContent = product.name;
  document.querySelector(".product-info .price").textContent = product.price;
  document.querySelector(".product-images .main-img").innerHTML = `<img src="${product.images[0]}" alt="${product.name}" />`;

  // 4. Tạo thumbnail
  const thumbsContainer = document.querySelector(".product-images .thumbs");
  thumbsContainer.innerHTML = "";
  product.images.forEach((img, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${img}" alt="thumb ${i}" />`;
    div.addEventListener("click", () => {
      document.querySelector(".main-img").innerHTML = `<img src="${img}" alt="${product.name}" />`;
    });
    thumbsContainer.appendChild(div);
  });

  // 5. Hiển thị thông số kỹ thuật
  const table = document.querySelector(".specs table");
  table.innerHTML = "";
  for (const [key, value] of Object.entries(product.specs)) {
    const row = `<tr><th>${key}</th><td>${value}</td></tr>`;
    table.insertAdjacentHTML("beforeend", row);
  }

  // 6. Thêm sự kiện nút "Thêm vào giỏ hàng"
  document.querySelector(".cart-btn").addEventListener("click", () => {
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
  });

  // 7. Thêm sự kiện nút "Mua ngay"
  document.querySelector(".buy-btn").addEventListener("click", () => {
    alert(`🛒 Bạn đang mua: ${product.name}`);
    window.location.href = "gio-hang.html";
  });
});
