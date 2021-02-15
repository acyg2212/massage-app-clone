import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const enterEmail = e => {
        setEmail(e.target.value)
    }

    const enterPassword = e => {
        setPassword(e.target.value)
    }

    const buttonClicked = async (e) => {
        e.preventDefault();
        async function signupUser() {
            console.log(password)
            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors)
            } else {
                console.log(responseData.current_user, responseData.current_user_id)
            }
        }
        signupUser();
    }

    return (
        <div className="login-container">
            <h1>Create a Free Account</h1>
            <h3>Let's get started building a simpler to manage, more profitable
            practice.
            </h3>
            <form className="login-form" onSubmit={buttonClicked}>
                {errors.length ? errors.map(err => <li key={err}>{err}</li>) : ''}
                <div className="login-input">
                    <label htmlFor="email-address">Email</label>
                    <input className="input" type="email" name="email-address" value={email} onChange={enterEmail} placeholder="Email" />
                </div>
                <div className="login-input">
                    <label htmlFor='password'>Password</label>
                    <input className="input" type="password" name="password" value={password} onChange={enterPassword} placeholder="Password" />
                </div>
                <button className="login-button" type='submit'>Let's Get Started</button>
            </form>
            <a className="login-form__a" href='/login'>Already have an account? Sign in</a>
        </div>
    )
}
export default Login;