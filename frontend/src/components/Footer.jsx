import "../style/Footer.css";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="Footer">
            <hr />
            <div>
                <p>Copyright © | 2022</p>

                <Link to="">
                    <img className="github" src={ github } alt="github" />
                </Link>
                
            </div>
        </div>
    )
}

export default Footer;