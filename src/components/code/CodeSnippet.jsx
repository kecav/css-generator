import { useState, useRef } from "react";
import "./CodeSnippet.css";
import clipboard from "./clipboard.svg";

const CodeSnippet = (props) => {
    const styleObj = props.style;
    const codeRef = useRef("");
    const [feedback, setFeedback] = useState(false); 
    const [codeStyle, setCodeStyle] = useState({
        color: "",
        backgroundColor: ""
    });

    const copyToClipboard = () => {
        // Copying to clipboard
        navigator.clipboard.writeText(codeRef.current.innerHTML);
        setCodeStyle((prevState) => ({
            ...prevState,
            color: "#000",
            backgroundColor: "#dedede"
        }));
        setFeedback(true);
        setTimeout(() => {
            setCodeStyle((prevState) => ({
                ...prevState,
                color: "",
                backgroundColor: ""
            }));
            setFeedback(false);
        }, 2000);
    };
    
    return (
        <div className="code-section">
            <pre className="code-snippet">
                <code ref={codeRef} style={codeStyle}>
                    background-color : {styleObj.backgroundColor};{`\n`}
                    border-radius : {styleObj.borderRadius}px;{`\n`}
                    box-shadow : {styleObj.shadowX} {styleObj.shadowY}{" "}
                                    {styleObj.blur} {styleObj.spread} {styleObj.color};{"\n"}
                </code>
            </pre>
            <button onClick={copyToClipboard} className="copy-btn">
                <img
                    src={clipboard}
                    className="clipboard-icon"
                    alt="clipboard-icon"
                />
                COPY
            </button>
            {feedback && <span className="feedback-message">COPIED !</span>}
        </div>
    );
};

export default CodeSnippet;
