import "./Footer.css";
import GithubIco from '../../media/github-icon.svg'

const Footer = () => {
    return (
        <footer>
            <a
                href="https://github.com/kecav/"
                className="developer"
                rel="noreferrer"
                target="_blank"
            >
                <img src={GithubIco} className="github-icon" alt="Github icon" />
                <span>
                    Github
                </span>
            </a>
        </footer>
    );
};
export default Footer;
