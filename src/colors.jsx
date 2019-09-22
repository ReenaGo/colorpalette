import React from 'react';

const Colors = (props) =>{
    return (
        <div style={{backgroundColor: props.color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{props.hex}</h1>
            <button className="btn btn-dark" onClick={props.toggle}>{props.lock ? 'UNLOCK': 'LOCK'}</button>
        </div>
    )
}





export default Colors;




