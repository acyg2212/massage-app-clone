import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const enterEmail = e => {
        setEmail(e.target.value)
    }

    const enterPassword = e => {
        setPassword(e.target.password)
    }

    const buttonClicked = async (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className="login-container">
            <h1>Create a Free Account</h1>
            <h3>Let's get started building a simpler to manage, more profitable
            practice.
            </h3>
            <form className="login-form" onSubmit={buttonClicked}>
                <div className="login-input">
                    <label for="email-address">Email</label>
                    <input type="email" name="email-address" value={email} onChange={enterEmail} placeholder="Email" />
                </div>
                <div className="login-input">
                    <label for='password'>Password</label>
                    <input type="password" name="password" value={password} onChange={enterPassword} placeholder="Password" />
                </div>
                <button className="login-button" type='submit'>Let's Get Started</button>
            </form>
        </div>
    )
}
export default Login;