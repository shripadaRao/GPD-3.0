/// To Display texts

import React from "react";
import { useState } from "react";
// import Clock from "./Clock";
// import {useState} from "react";

// function parsePassCode(message) {
//   if (message === "pass") {
//     return true;
//   } else {
//     return false;
//   }
// }

function DisplayText() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("value is:", event.target.value);
  };

  const [details, setDetails] = useState({
    display_text: "",
  });
  const DBURL = "https://gpd-3-880cb-default-rtdb.firebaseio.com/.json";
  // const ol_url = "https://mcs-miniproject-default-rtdb.firebaseio.com/.json";

  const PostData = async (e) => {
    if (message === "pass") {
      e.preventDefault();
      const { display_text } = details;

      await fetch(DBURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          display_text,
        }),
      });
      alert("response submitted!");
    } else {
      alert("wrong passcode!");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="content"
        id="content"
        placeholder="Enter Text here"
        onChange={(e) =>
          setDetails({
            ...details,
            display_text: e.target.value,
          })
        }
      />
      <div>
        <div style={{ paddingTop: "10px" }} />
        <input
          type="text"
          id="message"
          name="message"
          placeholder="PassCode"
          onChange={handleChange}
          value={message}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2em ",
        }}
      >
        <button className="button1" type="button" onClick={PostData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default DisplayText;
