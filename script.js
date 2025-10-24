document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email");
        return;
      }

      // Save login session
      localStorage.setItem("loggedInUser", email);

      // Redirect to templates page
      window.location.href = "templates.html";
    });
  }
});
