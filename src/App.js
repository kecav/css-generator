import { Fragment, useState } from "react";
import Header from "./components/header/Header";
import BoxControl from "./components/controls/BoxControl";
import BoxPreview from "./components/preview/BoxPreview";
import CodeSnippet from "./components/code/CodeSnippet";
import Footer from "./components/footer/Footer";

function App() {
    const [style, setStyle] = useState({});

    return (
        <Fragment>
            <Header />
            <div className="container">
                <BoxControl styleChange={setStyle} />
                <BoxPreview style={style} />
            </div>
            <CodeSnippet style={style} />
            <Footer />
        </Fragment>
    );
}

export default App;
