import React, {useState} from "react";
import {Route, Redirect} from 'react-router-dom'


const ProtectedRoute = ({component: Component, ...rest}: any) => {
    const token = localStorage.getItem('token')
    const isAuth = token ? true : false
    const [auth, setAuth] = useState(isAuth)
    return (
        <>
            {auth === true ? <Route render={() => {
                return (<Component {...rest}/>)
            }}/> : <Redirect to={"/login"}/>}
        </>
    )
}
export default ProtectedRoute

