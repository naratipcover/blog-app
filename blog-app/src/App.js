import React,{ Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Reset } from 'styled-reset';
import withHelmet from "./utils/withHelmet";
import routes from "./config/routes"
import NavBar from "./components/NavBar"
import GlobalStyle from "./components/GlobalStyle"



function App () {
  return ( 
    <>
    <GlobalStyle/>
          <Reset />
            <Router> 
              <Suspense fallback='...loading'>  
                <NavBar/>
                <Switch>
                
                  {Object.keys(routes).map(routeKey => (
                    <Route key={routeKey} {...routes[routeKey]} />
                  ))}       
                  </Switch>
            </Suspense>
          </Router>
    </>
  );
}

export default withHelmet('Naratip | Blog App')(App);
