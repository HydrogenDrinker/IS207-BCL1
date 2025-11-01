// Dữ liệu sản phẩm mẫu (có thể sau này thay bằng API hoặc JSON)
const products = {
  "macbook-air-m3": {
    name: "MacBook Air M3 2024",
    price: "28.990.000₫",
    image: "https://cdn.tgdd.vn/Products/Images/44/324787/apple-macbook-air-13-inch-m3-2024-xanh-thumb-600x600.jpg",
    storage: ["256GB", "512GB"],
    color: "Xanh",
    specs: {
      "Loại card đồ họa": "Apple M3 GPU 8 nhân",
      "Dung lượng RAM": "8GB",
      "Ổ cứng": "512GB SSD",
      "Kích thước màn hình": "13.6 inch Retina",
      "Hệ điều hành": "macOS Sequoia",
      "Pin": "18 giờ lướt web",
      "Cổng kết nối": "2x Thunderbolt 4, MagSafe 3"
    }
  },
  "macbook-pro-m3": {
    name: "MacBook Pro M3 2024",
    price: "45.990.000₫",
    image: "https://cdn.tgdd.vn/Products/Images/44/324793/apple-macbook-pro-14-inch-m3-2024-den-thumb-600x600.jpg",
    storage: ["512GB", "1TB"],
    color: "Đen",
    specs: {
      "Loại card đồ họa": "Apple M3 Pro GPU 12 nhân",
      "Dung lượng RAM": "16GB",
      "Ổ cứng": "1TB SSD",
      "Kích thước màn hình": "14 inch Retina XDR",
      "Hệ điều hành": "macOS Sequoia",
      "Pin": "20 giờ xem phim",
      "Cổng kết nối": "HDMI, SDXC, MagSafe, 3x Thunderbolt 4"
    }
  }
};

// Khi người dùng bấm vào ô sản phẩm
function openProduct(element) {
  const productId = element.getAttribute("data-id");
  const product = products[productId];

  if (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
  }
}
