import { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reduxSlice";
import { useDispatch } from "react-redux";

function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // fetch the token from the local storage and set the local state from the api call
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      const token = localStorage.getItem("token");

      let u = data.users.find((d) => d.username == token);

      if (u) {
        setUser(u);
      } else {
        // redirect to the login page
        navigate("/");
      }
    }

    fetchData();
  }, []);

  // function to logout user
  function logOutUser() {
    dispatch(logout());

    // navigate to the login page
    navigate("/");
  }

  return (
    <div className="profile">
      <ul>
        <li id="profile">Profile</li>
        <li>
          Full Name : {user.firstName} {user.lastName}
        </li>
        <li>Email : {user.username}</li>
        <li>Password : {user.password}</li>
        <li>
          <button onClick={logOutUser}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
