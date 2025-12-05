import { useMemo, useState } from "react";

const calculation = (count) => {
  console.log("running");
  for (let i = 0; i < 1000000000; i++) {}
  return count * 2;
};

const CheckCount = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const doubleValue = useMemo(() => {
    return calculation(count);
  }, [count])


  return (
    <div>
      <h3>Use Memo</h3>
      <label>Album Id</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>

      <br />
      <br />
      <h4>Calculated result: {doubleValue}</h4>
    </div>
  );
};

export default CheckCount;
