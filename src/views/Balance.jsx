import React, {FormEvent, useState} from "react";
import Header from "../components/Header";

export default function Balance(){
    const [values, setvalues] = useState({
        meter: "",
});

return(
    <form onSubmit={handleSubmit}>
        <div className="py-2">
            <label htmlFor="">
                Meter Number
            </label>
            <input required type="number" placeholder="Meter Number"  value={values.meter} />
        </div>
        <div className="py-4">
            <button type="submit">Check Balance</button>
        </div>
    </form>
)
}