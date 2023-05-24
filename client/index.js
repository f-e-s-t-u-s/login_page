const wholeForm = document.querySelector("form");
const emailErr = document.querySelector(".email_error");
const passwordErr = document.querySelector(".pass_error");
// console.log(formDetails)

const validate_email = (email) => {
  // if(email === ''){
  //     const invalid_email = 'Email cannot be blank'
  //     return emailErr.innerHTML = invalid_email
  // }

  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(mailformat)) {
    const valid_email = "Valid email address";
    emailErr.textContent = valid_email;
    emailErr.classList.add("valid");
    emailErr.classList.remove("invalid");
  } else {
    const invalid_email = "Invalid Email address";
    emailErr.textContent = invalid_email;
    emailErr.classList.add("invalid");
    emailErr.classList.remove("valid");
  }
};

const validate_pass = (password) => {
  const passFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password.match(passFormat)) {
    const valid_pass = "Valid Password";
    // passwordErr.classList.toggle('col')
    passwordErr.textContent = valid_pass;
    passwordErr.classList.add("valid");
    passwordErr.classList.remove("invalid");
  } else {
    const invalid_pass =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character.";
    passwordErr.textContent = invalid_pass; // Update the error message
    passwordErr.classList.add("invalid");
    passwordErr.classList.remove("valid");
  }
};

wholeForm.onsubmit = (e) => {
  e.preventDefault();

  const formDetails = new FormData(wholeForm);
  const email = formDetails.get("user_email");
  const password = formDetails.get("password");

  const data = {
    password: password,
    email: email,
  };

  validate_email(email);
  validate_pass(password);
};
