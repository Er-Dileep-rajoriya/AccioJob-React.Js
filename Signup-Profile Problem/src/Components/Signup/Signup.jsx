import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/reduxSlice";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // if already have token the redirect to the profile page
  useEffect(() => {
    // check for token
    let token = localStorage.getItem("token");

    if (token) navigate("/profile");
  }, []);

  // redirect using react-router-dom
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted.");

    // if any field is empty then show the errors and return
    if (!name || !email || !password || !confirmPassword) {
      setSuccess("");
      setError("All The Fields are Mandatory.");
    } else {
      // check if password and confirm passwords are equal or not
      if (password && confirmPassword && password === confirmPassword) {
        // dispatch the action to the redux
        const data = { name, email, password };

        // check if user already signed up
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find((u) => u.email == email);

        if (user) {
          setSuccess("");
          setError("User(Email) Already Exist.");
          return;
        } else {
          dispatch(signup(data));

          // generate a random token and set the token

          const token = email;
          localStorage.setItem("token", token);

          // redirect to the profile page alfter 3 sec
          setTimeout(() => {
            navigate("/profile");
          }, 3000);
        }

        setError("");
        setSuccess("Successfully Signed Up! (You will be redirected in 3 sec)");

        // reset input field after submit the form
        setEmail("");
        setPassword("");
        setName("");
        setConfirmPassword("");
      } else {
        setSuccess("");
        setError("Password and Confirm Password must be Equal.");
      }
    }
  }

  return (
    <div className="signup-container">
      <form className="signup" onSubmit={handleSubmit}>
        <p>Signup</p>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="error-and-success">
          <p className="error">{error}</p>
          <p className="success">{success}</p>
        </div>

        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
