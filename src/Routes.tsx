import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';

const Routes = () => (
  <BrowserRouter >
    <Navbar /> 
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/movies" >
        <Movies />
      </Route>
    </Switch>   
  </BrowserRouter>
);

export default Routes;
