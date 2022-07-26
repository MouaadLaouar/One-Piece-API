// import "../style/Home.css";
import "../scss/Home.scss"
import logo from "../assets/logo1.png"
import code from "../assets/code.png"

import Alert from "../components/Alert";



function Home() {

    const origin = window.location.origin

    return (
        <div className="Home">
            <img src={ logo } alt="logo" />
            <Alert />
            <p>Hello and Welcom to the one pice API is a free API, I make it for fun i hope you will enjoy with it and  </p>
            
            <div>
                <h1>Based Url :</h1>
                <nav className="url">{ origin }/api/</nav>
            </div>

            {/* {character} */}
            <div>
                <h1 className="character">Get all characters :</h1>
                <nav className="url"><span>GET</span>/api/characters/</nav>
            </div>

            <div>
                <h1 className="character">Get single character :</h1>
                <nav className="url"><span>GET</span>/api/characters/8</nav>
            </div>

            <div>
                <h1 className="character">Get character By Name :</h1>
                <nav className="url"><span>GET</span>/api/characters/ByName?name=Monkey+D.+Luffy</nav>
            </div>

            <div>
                <h1 className="character">Get random character :</h1>
                <nav className="url"><span>GET</span>/api/characters/random</nav>
            </div>

            <img src={ code } alt="#" />
            

            {/* episode */}

            <div>
                <h1  className="episode">Get all Episodes :</h1>
                <nav className="url"><span>GET</span>/api/episodes/</nav>
            </div>

            <div>
                <h1 className="episode">Get Single Episodes :</h1>
                <nav className="url"><span>GET</span>/api/episodes/1</nav>
            </div>

            <div>
                <h1 className="episode">Get Random Episodes :</h1>
                <nav className="url"><span>GET</span>/api/episodes/random</nav>
            </div>

            {/* seasons */}

            <div>
                <h1 className="seasons">Get all Seasons :</h1>
                <nav className="url"><span>GET</span>/api/seasons/</nav>
            </div>

            <div>
                <h1 className="seasons">Get Single Seasons :</h1>
                <nav className="url"><span>GET</span>/api/seasons/1</nav>
            </div>

            <div>
                <h1 className="seasons">Get Random Seasons :</h1>
                <nav className="url"><span>GET</span>/api/seasons/random</nav>
            </div>

            {/* quotes */}

            <div>
                <h1 className="quotes">Get all Quotes :</h1>
                <nav className="url"><span>GET</span>/api/quote/</nav>
            </div>

            <div>
                <h1 className="quotes">Get Single Quotes :</h1>
                <nav className="url"><span>GET</span>/api/quote/1</nav>
            </div>

            <div>
                <h1 className="quotes">Get Random Quotes :</h1>
                <nav className="url"><span>GET</span>/api/quote/random</nav>
            </div>

        </div>
    )
}

export default Home;