import React, {useState} from 'react' //useState is hook

export default function TextForm(props) {

    let modeStyle;

    if(!props.mode.currentMode) {
        modeStyle = {
            css :{
                color : "white",
                backgroundColor : "#042743",
                padding : "55px",
            },
            btn : "btn btn-outline-light mx-1"
        }
    }
    else {
        modeStyle = {
            css :{
                color : "black",
                backgroundColor : "white",
                padding : "55px"
            },
            btn : "btn btn-outline-dark mx-1"
        }
    }
    const [text, setText] = useState(""); 
    // text = "New text"; This is wrong way to change the state
    //setText("New Text"); //This is the correct way to update the value
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    let wordLength = (text.trim().split(" ").length > 1) ? text.split(" ").length : 0;

    const handleLowerCase = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = (event) => {
        setText("");
    }

    const handleRead = (event) => {
        if(text === null || text === '') {
            alert("Please enter the text");
        }
        else {
            let ttsEngine = new SpeechSynthesisUtterance();
            ttsEngine.text = text;
            if ('speechSynthesis' in window) {
                window.speechSynthesis.speak(ttsEngine);
            }else{
                alert("Sorry, your browser doesn't support text to speech!😣");
            }
        }
        
    }

    return (
        <div style={modeStyle.css}>
            <h3>{props.heading} </h3>
            <div className="my-3">
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <div className="btn-group">
                    <button className={modeStyle.btn} onClick={handleUpperCase}>
                        <i className="bi bi-type"></i><i className="bi bi-chevron-up"></i>
                    </button>
                    <button className={modeStyle.btn} onClick={handleLowerCase}>
                        <i className="bi bi-type"></i><i className="bi bi-chevron-down"></i>
                        {/* <i className="bi bi-sun"></i> */}
                    </button>
                    <button className={modeStyle.btn} onClick={handleRead}>
                        <i className="bi bi-volume-up-fill"></i>
                    </button>
                    <button className={modeStyle.btn} onClick={handleClear}>
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </div>
            <div className="my-3">
                <h3>Your text summary</h3>
                <p> <strong> Words: </strong> {wordLength}</p>
                <p> <strong>  Characters </strong> : {text.length}</p>
                <p> <strong>  {wordLength * 0.008} </strong>  Minitues Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Your Text will be Appeared Here."}</p>
            </div>
        </div>
    )
}

