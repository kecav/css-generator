import "./Header.css";

const Header = () => {
    
    // Custom Console
    const consoleStyle = "color:#FFF; background-color: #3f51b5; padding: 0.5rem 10rem; text-align: center";
    console.log("%c FOLLOW ME ON GITHUB !", consoleStyle);

    return (
        <header>
            <h1 className="page-title">CSS Generator</h1>
            <nav>
                <button className="nav-button">BOX SHADOW</button>
            </nav>
        </header>
    );
};

export default Header;
