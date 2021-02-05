import {Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Quizz = () => {
    return ( 
        <>
            <Navbar/>
            <h2 > Quizz Shingeki no Kyojin </h2>
            <Link to="/quizz/1" >
                <button> Commencer </button>
            </Link> 

            <h2> Quizz Kimetsu no Yaiba </h2> 
            <Link to="/quizz/2" >
                <button > Commencer </button> </Link>

            <h2> Quizz Dragon Ball Z
            </h2> 
            <Link to="/quizz/3">
                <button > Commencer </button>
            </Link > 

            <h2> Quizz Naruto </h2> 
            <Link to="/quizz/4"> 
                <button> Commencer </button> 
            </Link> 
        </>
        
    )
}
export default Quizz;