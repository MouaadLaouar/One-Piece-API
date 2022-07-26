// import "../style/Home.css";
import "../scss/Home.scss"
import logo from "../assets/logo1.png"
import code from "../assets/code.png"
import copy from "../assets/copy.png"
import Alert from "../components/Alert";



function Home() {

    const origin = window.location.origin;

    const copytext = (x) => {
        let text = x.target.parentNode.childNodes[0].childNodes[1].textContent;
        let textcopy = origin + text;
        navigator.clipboard.writeText(textcopy);
    }

    return (
        <div className="Home">
            <img src={ logo } alt="logo" />
            <p>Hi, { origin } is a free JSON API!! for getting information about one piece. <br /> This Documentation should supply with you all the information you need to start making your project. <br />Just when you share your project in social media use the #onepieceapi for we can see your project <p>&#128151;</p></p>
            
            <div>
                <h1>Based Url :</h1>
                <nav className="url">{ origin }/api/</nav>
            </div>

            {/* {character} */}
            <div>
                <h1 className="character">Get all characters :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        <p>/api/characters/</p> 
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="character">Get single character :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/characters/8
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>


            <div>
                <h1 className="character">Get character By Name :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/characters/ByName?name=Monkey+D.+Luffy
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>


            <div>
                <h1 className="character">Get random character :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/characters/random
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <Alert />

            <pre>
                <h1>Response:</h1>
                <div>
                    <p>&#123;</p>
                    <p className="json">"_id":"62ba022b162506171daab452", <br />"id":8,"Name":"Monkey D. Luffy",<br />"Nickname":"Lucy | Luffyland | Luffy-tarou | Luffy-no-Umi",<br />"Age":"19",<br />"Birthday":"5-05-1505",<br />"Status":"Alive",<br />"Gender":"Male",<br />"Bounty":"฿3,000,000,000",<br />"DevvilFruits":"Gomu Gomu no Mi(aka Hito Hito no Mi, Model: Nika)",<br />"DevvilFruitsClass":"Zoan (Mythical)",<br />"Haki":["Busoshoku Haki(Armament)","Kenbunshoku Haki(Observation)","Haoshoku Haki(Conqueror's)"],<br />"Img":null</p>
                    <p>&#125;</p>
                </div>
            </pre>
            

            {/* episode */}

            <div>
                <h1  className="episode">Get all Episodes :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/episodes/
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="episode">Get Single Episodes :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/episodes/1
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="episode">Get Random Episodes :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/episodes/random
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <pre>
                <h1>Response:</h1>
                <div>
                    <p>&#123;</p>
                    <p className="json">"_id":"62bb6b778e16f70a5ee07bba",<br />"id":1,"AirDate":"20 Oct 99",<br />"Titles":"I'm Luffy! The Man Who's Gonna Be King of the Pirates!"</p>
                    <p>&#125;</p>
                </div>
            </pre>

            {/* seasons */}

            <div>
                <h1 className="seasons">Get all Seasons :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/seasons/
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="seasons">Get Single Seasons :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/seasons/1
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="seasons">Get Random Seasons :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/seasons/random
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <pre>
                <h1>Response:</h1>
                <div>
                    <p>&#123;</p>
                    <p className="json">"_id":"62bb17fa9ececfea66608590",<br /> "Season":1,"No":"1-62",<br /> "StoryArc":"East Blue",<br /> "Episodes":61,<br /> "OriginallyAired":<p>&#123;</p>"FirstAired":"October 20, 1999","LastAired":"March 14, 2001 "<p>&#125;</p>,<br /> "SeriesDirection":"Kōnosuke Uda",<br /> "SeriesComposition":"Junki Takegami",<br /> "CharacterDesign":"Noboru Koizumi"</p>
                    <p>&#125;</p>
                </div>
            </pre>

            {/* quotes */}

            <div>
                <h1 className="quotes">Get all Quotes :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/quote/
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="quotes">Get Single Quotes :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/quote/1
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <div>
                <h1 className="quotes">Get Random Quotes :</h1>
                <nav className="url">
                    <nav>
                        <span>GET</span>
                        /api/quote/random
                    </nav>
                    <img src={ copy } alt="#" onClick={ (e) => { copytext(e) }}/>
                </nav>
            </div>

            <pre>
                <h1>Response:</h1>
                <div>
                    <p>&#123;</p>
                    <p className="json">"_id":"62bb49d3883c382fcac1a226",<br />"id":1,<br />"quote":"1. \"Doesn't matter who you're born to… Everyone's still a child of the sea!!\"",<br />"author":"- Whitebeard, 'One Piece'."</p>
                    <p>&#125;</p>
                </div>
            </pre>

        </div>
    )
}

export default Home;