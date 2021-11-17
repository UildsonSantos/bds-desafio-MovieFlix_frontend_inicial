import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';

const Routes = () => (
  <BrowserRouter >
    <Navbar /> 
    <Switch>
      <Route path="/">
        <Auth />
      </Route>
     
    </Switch>   
  </BrowserRouter>
);

export default Routes;
