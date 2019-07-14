import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';


import HeaderContainer from './header/header_container';
import MainPage from './main/main_page';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './login/signup_form_container';
import GameSelectContainer from './game_select/game_select_container';
import MultiGameContainer from './multi_game/multi_game_container';
import SingleGameContainer from './single_game/single_game_container';

const App = () => (
    <div>
      <HeaderContainer />
      <div className="main__container">
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path ="/login" component={LoginFormContainer}/>
            <AuthRoute exact path ="/signup" component={SignupFormContainer}/>
            <ProtectedRoute exact path="/games" component={GameSelectContainer}/>
            <Route exact path="/single" component={SingleGameContainer} />
            <Route exact path="/multi" component={MultiGameContainer} />

        </Switch>
      </div>
    </div>

);

export default App;