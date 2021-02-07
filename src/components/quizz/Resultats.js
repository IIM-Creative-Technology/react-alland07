import { Link } from "react-router-dom"

const Resultat = ({score}) =>{
return(
    <>
      <p>Vous avez terminé le quizz avec un score de: {score} </p>
      <Link to="/quizz">Retour à la page Quizz</Link>
    </>
)
}
export default Resultat