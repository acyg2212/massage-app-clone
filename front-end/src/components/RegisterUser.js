import React from 'react';

const RegisterUser = () => {
    return (
        <div className="register-user-container">
            <div className="register-user-container-inner">
                <h1>Create Account</h1>
                <h3>Create a new account or <a className="register-user-container-inner__anchor" href="/login">sign in.</a></h3>
                <div className="register-user-bottome-container">
                    <div className="register-user-bottome-container__inner">
                        <div className="symbol-div">🤲</div>
                        <h2 className="register-user-bottome-container__inner__h2">Bodywork Professional</h2>
                        <p className="register-user-bottome-container__p">I want to join my peers</p>
                        <button className="register-user-bottome-container__inner__button">Create Professional Account</button>
                    </div>
                    <div className="register-user-bottome-container__inner">
                        <div className="symbol-div">💆‍♀️💆‍♂️</div>
                        <h2 className="register-user-bottome-container__inner__h2">Massage Recipient</h2>
                        <p className="register-user-bottome-container__p">I want to book massage services.</p>
                        <button className="register-user-bottome-container__inner__button">Create Public Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser;