import React, {useState} from 'react';
// import PropTypes from 'prop-types';


export default function TextForm(props) {
  const handelUpClick=()=>{
    //console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handelLowClick=()=>{
    //console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handelOnChange=(event)=>{
    //console.log("OnChanged was clicked");
    setText(event.target.value);
  }

  const [text,setText]=useState("");
  //setText("New Text Here ");
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <br></br>
        <div className="mb-3">
            <textarea className="form-control" onChange={handelOnChange} id="myBox" rows="8" value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert To LowerCase</button>
      </div>
      <div className="container mb-3">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{text}</p>
      </div>
    </>
  );
}


