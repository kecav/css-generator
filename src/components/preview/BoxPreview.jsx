
import './BoxPreview.css';

const BoxPreview = (props) => {
    const styleObj = props.style;
    
    const code = {
        height: "200px",
        width: "200px",
        borderRadius: `${styleObj.borderRadius}px`,
        boxShadow: `${styleObj.shadowX} ${styleObj.shadowY} ${styleObj.blur} ${styleObj.spread} ${styleObj.color}`,
        backgroundColor: `${styleObj.backgroundColor}`
    }

    return(
        <div className="preview-box">
            <div className="demo-box" style={code}></div>
        </div>
    )
}

export default BoxPreview;