import React from "react";

function CallBackChild({ onClick, count }) {
  console.log("Child component rendered");

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Child Component</h3>
      <h5>{count}</h5>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}

export default React.memo(CallBackChild);
// export default CallBackChild;
