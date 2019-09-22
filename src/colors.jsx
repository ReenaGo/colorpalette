import React from 'react';

const Colors = ({colorObj, toggle}) =>{
    const{ color, lock} = colorObj;
    return (
        <div style={{backgroundColor:color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{color}</h1>
            <button className="btn btn-dark" onClick={toggle}>{lock ? 'UNLOCK': 'LOCK'}</button>

        </div>
    )
}





export default Colors;




