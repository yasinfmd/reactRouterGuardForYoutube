import React from "react";
import {Route} from 'react-router-dom'


const PublicRoute = ({component: Component, ...rest}: any) => {
    return (
        <Route render={() => {
            return (<Component {...rest}/>)
        }}/>
    )
}
export default PublicRoute

