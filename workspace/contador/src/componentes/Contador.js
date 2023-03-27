import React from "react";
import '../css/Contador.css'

function Contador({ clicks }) {
    return (
        <div className="contador">
            {clicks}
        </div>
    )
}

export default Contador;