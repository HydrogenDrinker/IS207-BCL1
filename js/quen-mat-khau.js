// Xử lý di chuyển tự động giữa các ô OTP
const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

// Đếm ngược 60s cho nút Gửi lại mã
let timeLeft = 60;
const timer = document.getElementById("timer");
const resendLink = document.getElementById("resendLink");

let countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    resendLink.style.pointerEvents = "auto";
    resendLink.style.color = "#007bff";
  } else {
    resendLink.style.pointerEvents = "none";
    resendLink.style.color = "#aaa";
  }
}, 1000);

resendLink.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Mã OTP mới đã được gửi!");
  timeLeft = 60;
  timer.textContent = timeLeft;
  resendLink.style.pointerEvents = "none";
  resendLink.style.color = "#aaa";

  countdown = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      resendLink.style.pointerEvents = "auto";
      resendLink.style.color = "#007bff";
    }
  }, 1000);
});

// Nút đặt lại mật khẩu
document.getElementById("resetBtn").addEventListener("click", () => {
  const otp = Array.from(otpInputs).map(i => i.value).join("");
  if (otp.length !== 6) {
    alert("Vui lòng nhập đầy đủ mã OTP!");
  } else {
    alert("Mã OTP hợp lệ! Chuyển đến trang đặt lại mật khẩu.");
  }
});
