import React from 'react';

<<<<<<< HEAD
const Colors = ({colorObj, toggle}) =>{
    const{ color, lock} = colorObj;
    return (
        <div style={{backgroundColor:color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{color}</h1>
            <button className="btn btn-dark" onClick={toggle}>{lock ? 'UNLOCK': 'LOCK'}</button>
=======
// const Colors = (props) =>{
const Colors = ({colorObj , toggle}) =>{
    
    // Below I took that colorObj from props that alreadys holds what you need from when you passed it through in App,js
    const { color, lock } = colorObj; 
    return (
        <div style={{backgroundColor: color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
            {/* <h1>{props.hex}</h1> */}
            <h1>{ color }</h1>
            <button onClick={toggle} className={lock ? 'btn btn-dark' : 'btn btn-outline-dark'}>{lock ? 'UNLOCK': 'LOCK'}</button>
>>>>>>> deb97316a92dc9fbf8b6cb956a8679c996ee408a
        </div>
    )
}





export default Colors;




