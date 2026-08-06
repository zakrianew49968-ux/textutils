import React, {useState} from 'react'
export default function TextForm(props) {
     const handelOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handelOnClickLower = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");

    }
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClearAll=() => {
        let newText ='';
        setText(newText)
        props.showAlert("Cleared all text ", "success");

    }
    const handleCopyAllText=() => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied ", "success");
    }
   const handleRemoveAllExtraSpaces=() => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed ", "success");
   }
    const[text, setText] = useState('');
  return (
    <div>
       <div className='container my-3'>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <textarea value={text} placeholder='Enter Text here ...' onChange={handelOnChange} style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'grey':'white'}} className='form-control' id='myBox' rows={5} />
       
       <div className='btn-group my-2'>
           <button className="btn btn-primary" onClick={handelOnClick} >Convert to UpperCase</button>
           <button className="btn btn-primary" onClick={handelOnClickLower}>Convert to LowerCase</button>
           <button className="btn btn-primary" onClick={handleClearAll}>Clear all</button>
           <button className="btn btn-primary" onClick={handleCopyAllText}>Copy all</button>
           <button className="btn btn-primary" onClick={handleRemoveAllExtraSpaces}>Remove all spaces</button>
        </div>
        </div>

        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'black'}}>
           <h1>Your Text Summery</h1>
           <p>{text.split(" ").length -1} Words and {text.length} characters</p>
           <p>Needs {0.008 * text.split(" ").length} Minutes to read</p>
           <h2>Preview</h2>
           <p>{text}</p>
        </div>
    </div>
  )
}
