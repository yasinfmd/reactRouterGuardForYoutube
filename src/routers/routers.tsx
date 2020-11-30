import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {routeArray, RouterModel} from "./routerConst";
import ApplicationRoute from "../components/ApplicationRoute";



const Routers=()=>{
    return(
        <Router>
            <Switch>
                {routeArray.map((item:RouterModel)=>{
                    return(
                        <ApplicationRoute
                        key={item.id}
                        path={item.path}
                        importPath={item.importPath}
                        routeProtection={item.routeProtection}


                        />
                    )
                })}
            </Switch>
        </Router>
    )
}
export  default  Routers
