import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPwdError, setConfirmPwdError] = useState("");

  useEffect(() => {
    setEmailError("Invalid Email Format");
    setPasswordError("Password must be at least 8 characters");
    setConfirmPwdError("Passwords do not match.");
  }, []);

  // function to check the email is valid email or not using regular expression
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // function to check the password is valid passowrd or not(must be at least 8 character long)
  const isValidPassword = (password) => {
    const passwordRegex = /^.{7,}$/;
    return passwordRegex.test(password);
  };

  // function for handling the form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!emailError && !passwordError && !confirmPwdError) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }

    // reset the input fields, when form is submitted
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  // function for validate the email field and setting the email
  function handleEmailValidation(e) {
    setEmail(e.target.value);

    if (!isValidEmail(email)) {
      setEmailError("Invalid Email Format");
      // console.log(emailError);
    } else {
      setEmailError("");
    }
  }

  // function to set the password and validate the password field
  function handlePasswordValidation(e) {
    setPassword(e.target.value);

    if (!isValidPassword(password)) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  }

  // function to set the cofirm password and check the equality of password and confirm password
  function confirmPasswordValidate(e) {
    setConfirmPassword(e.target.value);

    if (password !== confirmPassword) {
      setConfirmPwdError("Passwords do not match.");
    } else if (password === confirmPassword) {
      setConfirmPwdError("");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Form</h1>

      <div>
        <label for="email">Email</label>
        <input
          type="email"
          onChange={handleEmailValidation}
          placeholder="abc@gmail.com"
          id="email"
          style={{
            border: `2px solid ${emailError ? "red" : "green"}`,
          }}
        />
        <span
          style={{
            color: "red",
          }}
        >
          {emailError}
        </span>
      </div>

      <div>
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="*******"
          id="password"
          onChange={handlePasswordValidation}
          style={{
            border: `2px solid ${passwordError ? "red" : "green"}`,
          }}
        />
        <span
          style={{
            color: "red",
          }}
        >
          {passwordError}
        </span>
      </div>

      <div>
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          onChange={confirmPasswordValidate}
          style={{
            border: `2px solid ${confirmPwdError ? "red" : "green"}`,
          }}
          placeholder="********"
          id="confirm-password"
        />
        <span
          style={{
            color: "red",
          }}
        >
          {confirmPwdError}
        </span>
      </div>

      <div className="btn-container">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
