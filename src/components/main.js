import React from 'react'
import Home from '../views/home'
import Analysis from '../views/analysis'
import Recipes from '../views/recipes'
import Login from '../views/login'
import {Route} from 'react-router-dom';

export default function main() {
    return (
        <main>
           <Route path="/" component={Home} exact/>
           <Route path="/analysis" component={Analysis} />
           <Route path="/recipes" component={Recipes} />
        <Route path="/login" component={Login} />

        </main>
    )
}
