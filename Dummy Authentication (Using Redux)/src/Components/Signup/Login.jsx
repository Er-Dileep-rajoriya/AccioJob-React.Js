import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reduxSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /// if already have token then navigate to the profile page
  useEffect(() => {
    setSuccess("");
    let token = localStorage.getItem("token");

    if (token) {
      // redirect
      navigate("/profile");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setSuccess("");
      setError("Error: All fields are required!");
      return;
    }

    // API Call
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      if (!response.ok) {
        setError("Error: Invalid credentials!");
        setSuccess("");
      } else {
        dispatch(login(email));
        setError("");
        setSuccess(
          "Success: You will be redirected to the Profile Page in 3 seconds."
        );

        setTimeout(() => {
          navigate("/profile");
        }, 3000);
      }
    } catch (err) {
      console.error("Error in authenticating user:", err);
      setError("Error: Unable to process your request. Please try again.");
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div className="signup-container">
      <form className="signup" onSubmit={handleSubmit}>
        <p>Login</p>
        <div className="input-fields">
          <input
            type="text"
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
        </div>

        <div className="error-and-success">
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
