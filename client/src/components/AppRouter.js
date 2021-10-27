import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { Context } from "../index";
import { authRotes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const user = useContext(Context)

    return (
        <Switch>
            { user.user.isAuth && authRotes.map(({path,Component})=>
                <Route key = {path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component})=>
                <Route key = {path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRouter