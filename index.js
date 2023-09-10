const folder = document.querySelector(".folder");
generateBtn = document.querySelector(".form button");
qrInput = document.querySelector(".form input");
qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;

  if (!qrValue) {
    window.alert("Please paste a URL or enter text");
  } else {
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
      folder.classList.add("active");
      generateBtn.innerText = "Generate QR Code";
    });
  }
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    folder.classList.remove("active");
  }
});
