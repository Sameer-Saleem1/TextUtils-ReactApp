import React,{useState} from 'react'


export default function TextForm(props) {
    
  const handleOnChange = (event) =>{
    // console.log("HandleOnChange")
    setText(event.target.value);
}

  // Uppercase button 

    const handleUpClick = () =>{
        // console.log("UpperCase was clicked " + text)
        let capText = text.toUpperCase();
        setText(capText);
        props.showAlert("Converted to uppercase","success");
    } 

    // Lowercase button 

    const handleLowClick = () =>{
      // console.log("UpperCase was clicked " + text)
      let lowText = text.toLowerCase();
      setText(lowText);
      props.showAlert("Converted to lowercase","success");
  }

    // Reverse button 

    const handleReverse = () => {
      /* Convert string to array*/
      let strArr = text.split("");
      /* Reverse array*/
      strArr = strArr.reverse();
      /* Convert array to string*/
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
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied!","success");
    } 

    const [text, setText]= useState('');

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#343a40'}}>
          <h1>{props.heading} </h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"> </textarea>
      </div>

                                                {/* buttons */}

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary m-2" onClick={handleReverse}>Reverse the text</button>
          <button className="btn btn-primary m-2" onClick={handleSpaces}>Remove extra spaces </button>
          <button className="btn btn-primary m-2" onClick={copyText}>Copy Text </button>
          <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
          <button className="btn btn-danger mx-2" onClick={ClearAll}>Clear All</button>

      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#343a40'}}>
        
        <h2 className='my-3'>Your Text Summary</h2>
        <h5>{text.split(" ").length-1} words and {text.length} characters</h5>
        <h2 className='mt-4'>Preview</h2>
        <h6 className='mt-3'>{text.length>0?text:'Enter text in the box to preview'}</h6>
        
      </div>
    </>
  )
}
