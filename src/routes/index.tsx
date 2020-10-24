import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Teste1 from '../pages/Teste1';
import Teste2 from '../pages/Teste2';
import Teste3 from '../pages/Teste3';

const Routes: React.FC = () => {

    return (
            <Switch>
                <Route path="/" exact component={Teste1} />
                <Route path="/teste2" exact component={Teste2} />
                <Route path="/teste3" exact component={Teste3} />
            </Switch>
    )
};

export default Routes;