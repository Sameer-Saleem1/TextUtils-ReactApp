import React from 'react'

export default function About(props) {

    let myStyle ={
        color: props.mode === 'dark'? 'white': 'black',
        backgroundColor: props.mode === 'dark' ? "#49648b":'white',
        // "#4c5483"
    }

  return (
    <div>
        <div className="container my-4" style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body " style={myStyle}>
                    Discover word and character counts, assess readability, correct grammar and spelling errors, gauge sentiment, and explore keyword density. Dive deeper with thematic analysis and language translation. Ensure academic integrity with citation and plagiarism checks, all while customizing settings to fit your specific needs. Elevate your writing and communication to new heights with our comprehensive analysis tool. Try it today and witness the transformation of your text!
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    No subscriptions, no hidden fees – just a wide array of analysis tools at your fingertips. Enhance your text, improve your writing, and unlock the full potential of your content, all without breaking the bank. Join our community of writers, students, and professionals who benefit from our free and user-friendly app. Start analyzing your text today and experience the incredible value of our no-cost service. Your words, your way, with no price attached.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Whether you prefer Chrome, Firefox, Safari, or any other popular browser, you can count on a smooth and consistent experience. There's no need to worry about compatibility issues; we've got you covered. Analyze your text with ease, on your preferred browser, and enjoy a hassle-free user experience. Explore the power of our app without any constraints, regardless of your browser choice. Your convenience and accessibility are our priorities.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
