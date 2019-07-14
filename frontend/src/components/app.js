import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './login/signup_form_container';
import GameSelectContainer from './game_select/game_select_container';


const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute path ="/login" component={LoginFormContainer}/>
        <AuthRoute path ="/signup" component={SignupFormContainer}/>
        <ProtectedRoute path="/games" component={GameSelectContainer}/>
        
    </Switch>
);

export default App;