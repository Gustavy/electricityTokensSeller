import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div class="container">
      <form>
        <label>
          Meter number:
          <input type="text" name="name"/>
        </label>
        <label>
          Amount of money
          <input type="text" name="name"/>
        </label>
        <input type="submit" value="Buy electricity" />
      </form>
    </div>
  );
}

export default App;
