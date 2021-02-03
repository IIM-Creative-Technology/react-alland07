import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from '../pages/Landing';
import Quizz from '../pages/Quizz';

const Routeur = () =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = "/" component={Landing}/>
                    <Route path="/quizz" component={Quizz}/>
                </Switch>
            </Router>
        </>
    )
    
};

export default Routeur