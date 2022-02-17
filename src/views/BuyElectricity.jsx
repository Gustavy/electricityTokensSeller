import react from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import reactDom from "react-dom";

export default function BuyElectricity() {
  const [meter, setMeter] = useState({
      meterNumber: "",
      amount: 0,
  });
}

// const handleSubmit =(e: React.FormEvent<HTMLFormElement>) =>{
//     e.preventDefault();
// }

return (
  <form onSubmit={handleSubmit}>
    <div className="py-2">
      <label htmlFor="">Meter Number</label>
      <input type="number" required placeholder="Meter Number" />
    </div>

    <div className="py-2">
      <label htmlFor="">Amount of Money</label>
      <input type="number" required placeholder="Amount" />
    </div>

    <div className="py-4">
        <button type="submit">Buy Electricity</button>
    </div>
  </form>
);
