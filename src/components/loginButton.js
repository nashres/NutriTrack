import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return (
        <div className="loginButton">
            <Button variant="contained" color="secondary" className="loginButton" onClick={()=>loginWithRedirect()}>
                Login
            </Button>
        </div>
    )
}

export default LoginButton
