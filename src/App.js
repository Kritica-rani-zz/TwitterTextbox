import { useState } from "react";
import "./styles.css";

export default function App() {
  const [words, setWords] = useState("");
  const [isBoolean, setboolean] = useState(false);
  const handleChange = (event) => {
    const value = event.target.value;
    value.length > 60 ? setboolean(true) : setboolean(false);
    if (value.length <= 60) setWords(value);
  };

  return (
    <>
      {isBoolean && (
        <div style={{ fontSize: 20, backgroundColor: "red", width: 100 }}>
          Element exceed{" "}
        </div>
      )}
      <input
        type="textarea"
        required
        placeholder="Max 60 words"
        onChange={handleChange}
        value={words}
      ></input>
      <input type="submit"></input>
    </>
  );
}
