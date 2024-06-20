import React, { useState } from 'react';


function Text(props) {
    const [text, setText] = useState("Enter your text")
    function click() {
        return (
            setText(text.toUpperCase())
        );
    }
    const lower = () => {
        setText(text.toLowerCase())
    }
    const clear = () => {
        setText('')
    }
    const copy = () => {
        let a = document.getElementById("exampleFormControlTextarea1")
        a.select();
        navigator.clipboard.writeText(a.value)
    }
    const blank = () => {
        let b = text.split(/[ ] +/)
        setText(b.join(" "))
    }
    const onChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container">
                <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</h1>
                <div className="mb-3 my-3" style={{ color: props.mode === "dark" ? "white" : "light" }}>
                    <textarea className="form-control" style={{ backgroundColor:props.mode==="dark"?"#51829B":"white", color:props.mode==="light"?"black":"white"}} value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-dark mx-1" onClick={click} >Convert Uppercase</button>
                <button type="button" className="btn btn-dark mx-1" onClick={lower}>Convert Lowercase</button>
                <button type="button" className="btn btn-dark mx-1" onClick={clear}>Clear</button>
                <button type="button" className="btn btn-dark mx-1" onClick={copy}>Copy</button>
                <button type="button" className="btn btn-dark mx-1" onClick={blank}>Remove blank space</button>
            </div>
            <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
                <h2>Your Summary</h2>
                <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}

export default Text;