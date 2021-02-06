import {Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Quizz = () => {
    return ( 
       <>
            <Navbar/>
            <h2> Quizz Shingeki no Kyojin </h2>
            <Link to="/question/1" >
                Commencer 
            </Link> 

            <h2> Quizz Kimetsu no Yaiba </h2> 
            <Link to="/question/2">
                Commencer 
            </Link>

            <h2> Quizz Dragon Ball Z</h2> 
            <Link to="/question/3">
               Commencer 
            </Link > 

            <h2> Quizz Naruto </h2> 
            <Link to="/question/4"> 
                 Commencer 
            </Link> 
        </>
        
    )
}
export default Quizz;