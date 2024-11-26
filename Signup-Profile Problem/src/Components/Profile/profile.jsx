import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // redirect if not signup || no token found in local storage
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }

    // if token found the show the profile of user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email == token);

    if (user) {
      setEmail(user.email);
      setName(user.name);
      setPassword(user.password);
    }
  }, []);

  function logoutUser() {
    // delete the token and redirect to the signup page
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="profile">
      <ul>
        <li id="profile">Profile</li>
        <li>Full Name : {name}</li>
        <li>Email : {email}</li>
        <li>Password : {password}</li>
        <li>
          <button onClick={logoutUser}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
