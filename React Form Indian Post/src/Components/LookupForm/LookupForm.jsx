import { useState } from "react";
import "./LookupForm.css";

function LookupForm({ fetchPosts, error }) {
  const [pincode, setPincode] = useState("");
  const [LocalError, setLocalError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // pincode should be digit not an alphabet
    if (pincode.length !== 6) {
      setLocalError("Pincode Must be at least 6 Digits!");
      return;
    }

    for (let i = 0; i < pincode.length; i++) {
      let char = pincode[i];

      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        setLocalError("Pincode Must be Digit(0-9)!");
        return;
      }

      // everything is ok, set the main state
      setLocalError("");
      fetchPosts(pincode);
    }

    console.log(pincode);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="pincode">Enter Pincode</label>
      <input
        type="text"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        maxLength={6}
        placeholder="Pincode"
      />

      <button>Lookup</button>
      <span className="error">{LocalError || error}</span>
    </form>
  );
}

export default LookupForm;
