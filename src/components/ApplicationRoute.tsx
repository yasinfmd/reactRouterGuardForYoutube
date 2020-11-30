import React from "react";

import {Route} from 'react-router-dom'
import ProtectedRouted from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";


const ApplicationRoute = ({component: Component, ...rest}: any) => {
    return (

        <Route exact render={() => {
            return (
                <>
                    {rest.routeProtection === false ? <PublicRoute component={rest.importPath}/> :
                        <ProtectedRouted component={rest.importPath}/>}
                </>
            )
        }}/>

    )
}
export default ApplicationRoute
