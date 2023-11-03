import React,{useState} from 'react'


export default function TextForm(props) {
    
  const handleOnChange = (event) =>{
    setText(event.target.value);
}

  // Uppercase button 

    const handleUpClick = () =>{
        let capText = text.toUpperCase();
        setText(capText);
        props.showAlert("Converted to uppercase","success");
    } 

    // Lowercase button 

    const handleLowClick = () =>{
      let lowText = text.toLowerCase();
      setText(lowText);
      props.showAlert("Converted to lowercase","success");
  }

    // Reverse button 

    const handleReverse = () => {
      let strArr = text.split("");
      strArr = strArr.reverse();
      let newText = strArr.join("");
      setText(newText);
      props.showAlert("Text has been reversed","success");
    };

    // Speaking button 

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    // Clear All button 

    const ClearAll =() =>{
      let clear = '';
      setText(clear);
    }

    // Remove extra spaces 

    const handleSpaces = () => {
      let spaceRemoved = text.split(/[  ]+/);
      setText(spaceRemoved.join(" "));
      props.showAlert("Spaces has been removed","success");
    }

    const copyText = () => {
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text Copied!","success");
    } 

    const [text, setText]= useState('');

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#343a40'}}>
          <h1>{props.heading} </h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':"#49648b" , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"> </textarea>
      </div>

                                                {/* buttons */}

          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleReverse}>Reverse the text</button>
          <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleSpaces}>Remove extra spaces </button>
          <button disabled={text.length===0} className="btn btn-primary m-2" onClick={copyText}>Copy Text </button>
          <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={ClearAll}>Clear All</button>

      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#343a40'}}>
        
        <h2 className='my-3'>Your Text Summary</h2>
        <h5>{text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</h5>
        <h2 className='mt-4'>Preview</h2>
        <h6 className='mt-3'>{text.length>0?text:'Enter text in the box to preview'}</h6>
        
      </div>
    </>
  )
}
