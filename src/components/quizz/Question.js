import Navbar from '../Navbar';
import Rep from './Reponses';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Resultat from './Resultats';

const Question = ({ data }) => {

    const [questionData, setQuestionData] = useState(data);
    const randomIndex = [0, 1, 2, 3];
    const [score, setScore] = useState(0);
    const [nbQuestion, setNbQuestion] = useState(0);


    let shuffle = (randomIndex) => {
        randomIndex.sort(() => Math.random() - 0.5);
      };

    for(let i = randomIndex.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = randomIndex[i]
        randomIndex[i] = randomIndex[j]
        randomIndex[j] = temp
      };

    useEffect(()=>{
        document.title = `Question numéro ${nbQuestion +1}.`;
    },)
    function HandleAnswer(){
        if (nbQuestion <= 8){
            setNbQuestion(nbQuestion +1)
        }else{
            setNbQuestion(nbQuestion);
        }

    }

    return(
        <>
            <Navbar/>
            <br/><br/>
            <h2>Voici le quizz</h2>
            <h3>Question: {questionData && questionData[nbQuestion].titre} ?</h3>
            <div className="answer">
                {questionData[nbQuestion].reponse.map((rep,i)=>( 
                    <button key={i} onClick={()=>HandleAnswer()}>
                        <Rep answers={rep}/>
                    </button>
                ))}
                {/* <Rep answers={Object.values(questionData[nbQuestion].reponse)[randomIndex[0]]} onClick={()=>setNbQuestion(nbQuestion +=1)}/> */}
            {nbQuestion >= 9? (
            <Resultat score={score}/>
            ):
            (<p>Question n°{nbQuestion +1}</p>
            )}
            </div>        
        </>
    );
};

export default Question;

// à chaque changement du state, le useEffect va retirer un nombre.
