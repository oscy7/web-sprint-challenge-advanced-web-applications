import React from 'react';
import { Route, Redirect} from 'react-router-dom';

//The purpose of this private route is to allow us to see certain components so long as we have the token obtained via entering password and login credentials 
const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem('token')) {
            return(<Component {...props}/>)
        }else{
            return <Redirect to='/login'/>
        }
    }}/>
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute