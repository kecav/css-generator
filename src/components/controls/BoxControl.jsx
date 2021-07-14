import { useState, useEffect } from "react";
import "./BoxControl.css";

const BoxControl = (props) => {
    const [value, setValue] = useState({
        shadowX: "5px",
        shadowY: "10px",
        blur: "20px",
        spread: "0px",
        color: "#dedede",
        borderRadius: "0",
        backgroundColor: "#ffffff",
    });

    const shadowXChangeHandler = (e) => {
        const { value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            shadowX: value + "px",
        }));
        // console.log(value);
    };

    const shadowYChangeHandler = (e) => {
        const { value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            shadowY: value + "px",
        }));
        // console.log(value);
    };

    const blurChangeHandler = (e) => {
        const { value } = e.target;
        setValue((prevState) => ({
            ...prevState,
            blur: value + "px",
        }));
        // console.log(value);
    };

    const spreadChangeHandler = (e) => {
        const { value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            spread: value + "px",
        }));
        // console.log(value);
    };

    const colorChangeHandler = (e) => {
        const { value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            color: value,
        }));
        // console.log(value);
    };

    const borderRadiusChangeHandler = (e) => {
        const { value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            borderRadius: value,
        }));
        // console.log(value);
    };

    const backgroundChangeHandler = (e) => {
        const { value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            backgroundColor: value,
        }));
    };

    // Side Effect to changing current state (Passing the value to parent component)
    useEffect(() => {
        props.styleChange(value);
    }, [value, props]);

    return (
        <form action="" className="control-form">
            <div className="input-section">
                <label htmlFor="shadowX">Shadow X</label>
                <div className="input-bar">
                    <span className="limits">0px</span>
                    <input
                        onChange={shadowXChangeHandler}
                        type="range"
                        name="shadowX"
                        min="0"
                        max="100"
                        title={value.shadowX}
                    />
                    <span className="limits">100px</span>
                </div>
            </div>
            <div className="input-section">
                <label htmlFor="shaodwY">Shadow Y</label>
                <div className="input-bar">
                    <span className="limits">0px</span>
                    <input
                        onChange={shadowYChangeHandler}
                        type="range"
                        name="shaodwY"
                        min="0"
                        max="100"
                        title={value.shadowY}
                    />
                    <span className="limits">100px</span>
                </div>
            </div>
            <div className="input-section">
                <label htmlFor="blur">Blur</label>
                <div className="input-bar">
                    <span className="limits">0px</span>
                    <input
                        onChange={blurChangeHandler}
                        type="range"
                        name="blur"
                        min="0"
                        max="200"
                        title={value.blur}
                    />
                    <span className="limits">200px</span>
                </div>
            </div>
            <div className="input-section">
                <label htmlFor="spread">Spread</label>
                <div className="input-bar">
                    <span className="limits">0px</span>
                    <input
                        onChange={spreadChangeHandler}
                        type="range"
                        name="spread"
                        min="0"
                        max="200"
                        title={value.spread}
                    />
                    <span className="limits">200px</span>
                </div>
            </div>
            <div className="input-section">
                <label htmlFor="border-radius">Border Radius</label>
                <div className="input-bar">
                    <span className="limits">0px</span>
                    <input
                        onChange={borderRadiusChangeHandler}
                        type="range"
                        name="border-radius"
                        min="0"
                        max="100"
                        title={value.borderRadius}
                        value={value.borderRadius}
                    />
                    <span className="limits">100px</span>
                </div>
            </div>
            <div className="input-section">
                <label htmlFor="shadow-color">Shadow Color</label>
                <div className="input-bar">
                    <input
                        onChange={colorChangeHandler}
                        type="color"
                        name="shadow-color"
                        value={value.color}
                    />
                </div>
            </div>
            <div className="input-section">
                <label htmlFor="background-color">Box Background Color</label>
                <div className="input-bar">
                    <input
                        onChange={backgroundChangeHandler}
                        type="color"
                        name="background-color"
                        value={value.backgroundColor}
                    />
                </div>
            </div>
        </form>
    );
};

export default BoxControl;
