import {Link} from 'react-router-dom';

const Container = () =>{
    return(
        <div className="container">
            <h1>Bienvenue sur notre site</h1>
            <br/>
            <h2>Nous vous proposons 4 quizz de 10 questions</h2>
            <br/>
            <p>
                Ce quizz mettra à l'epreuve vos connaissances en animes Japonais à
                travers des questions sur ces 4 oeuvres cultes. Pour avoir plus d'informations
                sur les 4 animés que nous avons choisi, vous pouvez scroller !
            </p>
            <Link to="/quizz">
                <button>Commencer</button>
            </Link>
        </div>
    )
}
export default Container