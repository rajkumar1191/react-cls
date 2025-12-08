import React, { useState, useCallback } from "react";
import CallBackChild from "./CallBackChild";

function CallBackParent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button inside child clicked");
  },[]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parent Component</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      <CallBackChild onClick={handleClick} count={count} />
    </div>
  );
}

export default CallBackParent;
