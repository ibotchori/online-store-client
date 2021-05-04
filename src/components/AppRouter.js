import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'


function AppRouter() {
    const isAuth = true
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) => // iterate over authRoute Array, get from there path & Component. Show this routes if isAuth = true
            <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />
            )} 
            <Redirect to={SHOP_ROUTE}/> {/* if neither path will be active redirect to Shop component */}
        </Switch> 
    )
}

export default AppRouter
