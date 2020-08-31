import React from 'react'
import TextField from '@material-ui/core/TextField';
import LoginButton from '../components/loginButton'

export default function login() {
    return (
        <div className="loginPage">
            <div className="login">
                <div className="">
                    <TextField required id="standard-required" label="Required" defaultValue="" />
                </div>
                <div>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password" />
                </div>
                <LoginButton/>
            </div>
        </div>
    )
}
