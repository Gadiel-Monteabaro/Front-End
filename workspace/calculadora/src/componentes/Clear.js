import React from 'react';
import '../css/Clear.css';

const Clear = (props) => (
    <div
        className='boton-clear'
        onClick={props.limpiarInput}>
        {props.children}
    </div>
);

export default Clear;