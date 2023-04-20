// ==== SHOW/HIDDEN PASSWORD ====
const showHiddenPassword = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    //  switch to text
    if (input.type === "password") {
      // switch to text
      input.type = "text";

      // change icon
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      // switch to password
      input.type = "password";
      // change icon
      iconEye.classList.add("ri-eye-off-line");
      iconEye.classList.remove("ri-eye-line");
    }
  });
};

showHiddenPassword("login-password", "login-eye");
