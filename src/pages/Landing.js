import { Link } from "react-router-dom";
import Meteo from "../components/Meteo";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Quizz Animes</h1>
        <h2>Presentation du quizz</h2>
        <p>
          Ce quizz mettra à l'epreuve vos connaissances en animes Japonais à
          travers des questions sur ces oeuvres cultes
        </p>
        <Link to="/quizz">
          <button>Commencer</button>
        </Link>
      </div>
      <Meteo />
    </>
  );
};
export default Landing;
