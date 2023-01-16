import { useState } from "react";
import "./App.css";

function App() {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ** Sending the payload to server

    const payload = {
      formula: formula,
    };

    try {
      const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setResult(data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div>
        <h1 className="text-5xl font-bold">
          Send the Values to Api to perse the formula
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center my-12"
        >
          <input
            onBlur={(e) => setFormula(e.target.value)}
            name="formulaarray"
            type="text"
            placeholder="Enter the formula array here 2-D"
            className="input input-bordered w-full max-w-xs input-lg"
          />
          <button className="btn btn-info ml-2">Excel 2D Array Send</button>
        </form>
        <div className="text-center font-bold">
          <h1 className="text-3xl">Results Output</h1>
          {result && <p className="text-lg text-blue-500">{result}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
