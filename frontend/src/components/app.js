import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';


import HeaderMenuContainer from './header/header_menu_container';
import HeaderGameplayContainer from './header/header_gameplay_container';
import HeaderLandingContainer from './header/header_landing_container';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './login/signup_form_container';
import GameSelectContainer from './game_select/game_select_container';
import MultiGameContainer from './multi_game/multi_game_container';
import SingleGameContainer from './single_game/single_game_container';
import SingleOptionsContainer from './single_options/single_options_container';
import MultiOptionsContainer from './multi_options/multi_options_container';
import LeaderboardIndexContainer from './leaderboard/leaderboard_index_container';
import Modal from './modal/modal';

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const App = () => (
    <div>
      <Modal />
        {/* <HeaderMenuContainer /> */}
        <Switch>
          <Route exact path="/login" component={HeaderLandingContainer} />
          <Route exact path="/signup" component={HeaderLandingContainer} />
          <Route path="/games" component={HeaderGameplayContainer} />
          <Route path="/" component={HeaderMenuContainer} />
        </Switch>
      <div className="main__container">
        <Switch>
            {/* <AuthRoute exact path="/" component={MainPage} /> */}
            <Route exact path="/" render={() => (
              <Redirect to="/login" />
            )} />
            <Route exact path="/login" component={LoginFormContainer}/>
            <Route exact path="/signup" component={SignupFormContainer}/>
            <Route path="/leaderboard/:type" component={LeaderboardIndexContainer} />
            <ProtectedRoute exact path="/select" component={GameSelectContainer}/>
            <Route exact path="/games/single" component={SingleGameContainer} />
            <Route exact path="/games/multi" component={MultiGameContainer} />
            <Route exact path="/options/single" component={SingleOptionsContainer} />
            <Route exact path="/options/multi" component={MultiOptionsContainer} />
        </Switch>
      </div>
    </div>

);

export default App;
