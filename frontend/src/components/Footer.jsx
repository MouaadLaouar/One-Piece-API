import "../scss/Footer.scss";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <footer>
            <h1>who am i ?</h1>
            <p>Hi, I'm Laouar Mohamed Mouaad, I am A Software Engineer Studient at Université Badji Mokhtar Annaba, Algeria. <br />One Piece is my favorite manga series, so i made this API for fun. <br />I hope you will enjoy with it, check out my portfolio <a href="https://mouaad.dev/">mouaad.dev</a></p>
            <br />
            <h1>Issues</h1>
            <p>If you find  any issues please contribute by creating an issue or a pull request on <a href="https://github.com/MouaadLaouar/One-Piece-API">GITHUB</a>, I will correct it as soon as possible.</p>
            <br />
            <h1>Contact</h1>
            <p>if you would like to talk about a project, or do a collaboration you can go to my portfolio and contact me form any of my social media. </p>
            <br />
            <h1>Copyright</h1>
            <p>The majority of this data collected was from a <a href="https://www.wikipedia.org/">Wikipedia.com</a> and <a href="https://www.fandom.com/">fandom.com</a></p>
            <p>This site is licensed under the "BSD 3-Clause License"</p>
        </footer>
    )
}

export default Footer;