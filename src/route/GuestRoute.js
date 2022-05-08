import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie'


function GuestRoute({ component: Component, ...rest }) {
    let token = cookie.get('token');
    console.log(token);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !token ? (
                    <Component {...location} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default GuestRoute;