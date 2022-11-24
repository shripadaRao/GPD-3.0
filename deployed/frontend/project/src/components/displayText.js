/// To Display texts

import React from "react";
import { useState } from "react";
// import Clock from "./Clock";

function DisplayText() {
  const [details, setDetails] = useState({
    display_text: "",
  });
  const DBURL = "https://gpd-3-880cb-default-rtdb.firebaseio.com/.json";
  const ol_url = "https://mcs-miniproject-default-rtdb.firebaseio.com/.json";
  const PostData = async (e) => {
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

      <button className="button1" type="button" onClick={PostData}>
        Submit
      </button>
    </div>
  );
}

export default DisplayText;
