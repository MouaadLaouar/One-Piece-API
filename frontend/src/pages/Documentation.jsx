import "../style/Documentation.css";
import BasicTable from "../components/Table";
import Alerts from "../components/Alert";

function createData(Attribute, Type, Description) {
    return { Attribute, Type, Description };
}
  
const characters = [
    createData('id', 'Int32', 'hello mouaad how are you today'),
    createData('Name', 'String', 'Unique Id per death'),
    createData('Nickname', 'String', 'Unique Id per death'),
    createData('Age', 'String', 'Unique Id per death'),
    createData('Birthday', 'String', 'Unique Id per death'),
    createData('Status', 'String', 'Unique Id per death'),
    createData('Gender', 'String', 'Unique Id per death'),
    createData('Bounty', 'String', 'Unique Id per death'),
    createData('DevvilFruits', 'String', 'Unique Id per death'),
    createData('DevvilFruitsClass', 'String', 'Unique Id per death'),
    createData('Mixed', 'Mixed', 'Unique Id per death'),
    createData('Img', 'String', 'Unique Id per death')
];

const episodes = [
    createData('id', 'Int32', 'Unique Id per death'),
    createData('AirDate', 'String', 'Unique Id per death'),
    createData('Titles', 'String', 'Unique Id per death')
];

const quotes = [
    createData('id', 'Int32', 'Unique Id per death'),
    createData('quote', 'String', 'Unique Id per death'),
    createData('author', 'String', 'Unique Id per death')
];

const seasons = [
    createData('id', 'Int32', 'Unique Id per death')
]


const Documentation = () => {

    const origin = window.location.origin;

    return (
        <div className="Docs">
            <div className="content">
                <Alerts/>
                <h1>Docs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae debitis eligendi alias corporis et eaque officia vel sunt consequatur id? Soluta sint commodi tenetur voluptatem?</p>

                <h1>Based Url :</h1>
                <span className="based-url">{ origin }/api/</span>

                <h1>Character Attributes</h1>

                <div className="table">
                    <BasicTable rows={ characters }/>
                </div>

                <h1>Get all characters</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/characters/</span>
                <h2>Example response:</h2>
            

                <h1>Get single character</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/characters/8</span>
                <h2>Example response:</h2>

                <h1>Get character By Name</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/characters/ByName?name=Monkey+D.+Luffy</span>
                <h2>Example response:</h2>

                <h1>Get random character</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/characters/random</span>
                <h2>Example response:</h2>

                {/* episode */}
                <hr className="hr" />

                <h1>Episodes Attributes</h1>
                <div className="table">
                    <BasicTable rows={ episodes }/>
                </div>

                <h1>Get all Episodes</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/episodes/</span>
                <h2>Example response:</h2>

                <h1>Get Single Episodes</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/episodes/1</span>
                <h2>Example response:</h2>

                <h1>Get Random Episodes</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/episodes/random</span>
                <h2>Example response:</h2>

                {/* seasons */}
                <hr className="hr" />

                <h1>Seasons Attributes</h1>
                <div className="table">
                    <BasicTable rows={ seasons }/>
                </div>

                <h1>Get all Seasons</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/seasons/</span>
                <h2>Example response:</h2>

                <h1>Get Single Seasons</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/seasons/1</span>
                <h2>Example response:</h2>

                <h1>Get Random Seasons</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/seasons/random</span>
                <h2>Example response:</h2>

                {/* quotes */}
                <hr className="hr"/>

                <h1>Seasons Attributes</h1>
                <div className="table">
                    <BasicTable rows={ quotes }/>
                </div>

                <h1>Get all Quotes</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/quote/</span>
                <h2>Example response:</h2>

                <h1>Get Single Quotes</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/quote/1</span>
                <h2>Example response:</h2>

                <h1>Get Random Quotes</h1>
                <span className="based-url"><h3>GET</h3>  { origin }/api/quote/random</span>
                <h2>Example response:</h2>

            
            </div>
        </div>
    )
}

export default Documentation;