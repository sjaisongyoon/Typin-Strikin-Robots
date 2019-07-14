import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import MainPage from './main/main_page';
import MultiGameContainer from './multi_game/multi_game_container';
import SingleGameContainer from './single_game/single_game_container';

const App = () => (
    <div>
        <HeaderContainer />
        <div className="main__container">
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/single" component={SingleGameContainer} />
                <Route exact path="/multi" component={MultiGameContainer} />
            </Switch>
        </div>
    </div>
);

export default App;