import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from '../pages/Landing';
import Quizz from '../pages/Quizz';
import Question from '../components/quizz/Question';
import data from '../Data/QuizzData.json';

//data={data[0].snk}
const Routeur = () =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = "/" component={Landing}/>
                    <Route path="/quizz" component={Quizz}/>
                    <Route path="/quizz/1" component={Question} />

                    <Route path="/quizz/2" component={Question}/>
                    <Route path="/quizz/3" component={Question}/>
                    <Route path="/quizz/4"/>
                        
                </Switch>
            </Router>
        </>
    )
    
};

export default Routeur