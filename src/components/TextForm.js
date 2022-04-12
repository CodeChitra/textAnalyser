import React, { useState } from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState("") // Hooks--> used to create state variables


  // Clear Screen 
  const HandleClearClick = () => {
    setText("");
  }

  // Convert Text To Uppercase
  const HandleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  }

  //Convert Text To Lowercase
  const HandleDownClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success")

  }


  const HandleOnChange = (event) => {
    setText(event.target.value)
  }

  //Copy Funtion
  var textBlock = document.getElementById('exampleFormControlTextarea1');
  const HandleCopyClick = (event) => {
    textBlock.select();
    textBlock.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBlock.value);
    props.showAlert("Text Copied", "success")

  }

  // Email Extracter
  const HandleEmailClick = () => {
    let newText = Text.toLowerCase();
    let emailArr = [];
    let i = 0;
    let wordsArr = newText.split(" ");
    wordsArr.forEach(element => {
      if (element.includes("@gmail.com")) {
        emailArr[i] = element;
        i++;
      }
      if (emailArr.length > 0)
        setText(emailArr.toString());
    });
    props.showAlert("All emails are extracted", "success")

  }

  const HandleSpaceClick = () => {
    let newText = Text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("All extra spaces are deleted", "success")
  }



  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#22577E', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control" value={Text} id="exampleFormControlTextarea1" rows="8" onChange={HandleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={HandleClearClick}>Clear</button>
        <button className='btn btn-primary mx-1 my-1' onClick={HandleUpClick}>Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={HandleDownClick}>Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={HandleCopyClick}>Copy</button>
        <button className='btn btn-primary mx-1 my-1' onClick={HandleEmailClick}>Extract Email</button>
        <button className='btn btn-primary mx-1 my-1' onClick={HandleSpaceClick}>Delete Extra Spaces</button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p id='counter'>Words are {Text.split(" ").filter((element) => { return element.length !== 0 }).length} and Characters are {Text.length} </p>
        <p>You can read it in {Text.split(" ").length * 0.008} minutes</p>
        <h2>Your Text Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter something in above box to preview it"}</p>
      </div>

    </>
  )
}
