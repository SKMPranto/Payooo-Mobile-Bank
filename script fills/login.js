document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const pin = getInputValueById("pin");
    if (mobileNumber.length === 11) {
      if (pin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Invalid pin");
      }
    } else {
      alert("Invalid mobile number or pin");
    }
  });
