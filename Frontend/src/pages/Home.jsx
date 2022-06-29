import "../style/Home.css";
import icon from "../assets/logo.png";
import { Link } from "react-router-dom";
import arrow from "../assets/angle-droit.png";



function Home() {

    return (
        <div className="Home">
            <section className="Hero">
                
            </section>

            <section className="Content">
                <h1>THE ONE PIECE API<img className="icon" src={ icon } alt="" /></h1>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi distinctio dignissimos, cum reprehenderit temporibus voluptatum nemo, qui quos sunt repellendus blanditiis veniam quibusdam aut!
                </p>

                <button>
                    <Link to='/Docs'>Get started <img className="arrow" src={ arrow } alt="icon" /></Link>
                </button>
            </section>
        </div>
    )
}

export default Home;