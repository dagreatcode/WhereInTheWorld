import React, {useContext} from "react";
import {Route, Navigate} from "react-router-dom"
import AuthContext from "../../utils/ContextAPI/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const {jwt} = useContext(AuthContext);
    return (
        <Route {...rest} render={
            (props) =>  {
                if (jwt) {
                    return <Component {...rest} {...props} />;
                }else{
                    return (
                        < Navigate 
                            to={{
                            pathname: "/login",
                            state: {
                                from: props.location,
                            }
                          }}
                        />
                    )
                }
            }
        } />
    );
};

export default ProtectedRoute;