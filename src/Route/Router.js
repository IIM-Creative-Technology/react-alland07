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
    
                    <Route path="/question/1">
                        <Question data={data[0].snk}/>
                    </Route>

                    <Route path="/question/2" component={Question}/>
                    <Route path="/question/3" component={Question}/>
                    <Route path="/question/4" component={Question}/>
                        
                </Switch>
            </Router>
        </>
    )
    
};

export default Routeur