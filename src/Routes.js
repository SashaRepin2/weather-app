import { React } from 'react'

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import App from './App'

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/weather" >
                    <App />
                </Route>
                <Redirect to="/weather" />
            </Switch>
        </BrowserRouter>
    )
}