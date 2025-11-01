// Ẩn/hiện mật khẩu
function togglePassword(id, element) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    element.textContent = "🙈";
  } else {
    input.type = "password";
    element.textContent = "👁️";
  }
}

// Xử lý xác nhận mật khẩu
document.getElementById("changeBtn").addEventListener("click", () => {
  const newPass = document.getElementById("new-password").value.trim();
  const confirmPass = document.getElementById("confirm-password").value.trim();

  if (!newPass || !confirmPass) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (newPass.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Mật khẩu nhập lại không khớp.");
    return;
  }

  alert("Mật khẩu đã được thay đổi thành công!");
  window.location.href = "login.html"; // chuyển về trang đăng nhập
});
