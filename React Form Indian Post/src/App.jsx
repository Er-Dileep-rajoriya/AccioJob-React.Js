import { useState } from "react";
import "./App.css";
import LookupForm from "./Components/LookupForm/LookupForm";
import LookupInfo from "./Components/LookupInfo/LookupInfo";

function App() {
  const [postInfo, setPostInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchPosts(pincode) {
    setLoading(true); // Start loading

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      if (!response.ok) {
        setError("Couldn’t find the postal data you’re looking for…");
        return;
      }

      // If the response is successful, parse the data
      const data = await response.json();

      if (data[0]?.PostOffice) {
        setPostInfo(data[0].PostOffice); // Update state with the post office data
      } else {
        setError("Couldn’t find the postal data you’re looking for…");
        setPostInfo([]); // If no data is found, reset postInfo to an empty array
      }

      console.log(data[0].PostOffice); // This will log the post office data
    } catch (err) {
      setError("Couldn’t find the postal data you’re looking for…");
      console.log("Error in Fetching data (API) :", err);
      setPostInfo([]); // Reset postInfo in case of error
    } finally {
      setLoading(false); // Hide loading
    }
  }

  return (
    <>
      {postInfo.length > 0 ? (
        <LookupInfo postInfo={postInfo} />
      ) : (
        <LookupForm fetchPosts={fetchPosts} error={error} />
      )}
    </>
  );
}

export default App;
