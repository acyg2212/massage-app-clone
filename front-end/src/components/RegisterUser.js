import { React, useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';

const RegisterUser = () => {

    const [show, setShow] = useState(false)

    const customStyles = {
        content: {
            border: '0',
            borderRadius: "15px",
            bottom: 'auto',
            minHeight: '10rem',
            left: '50%',
            position: 'fixed',
            right: 'auto',
            transform: 'translate(-50%,-50%)',
            minWidth: '20rem',
            width: '60%',
            padding: `10px`,
            top: `55%`,
            background: `rgb(255, 255, 255)`,
            width: `60%`,
            height: `60%`,
            display: `flex`,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center"
            // height: `fit-content`
        },
        overlay: {
            backgroundColor: `rgb(46 42 42 / 0.66)`
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setShow(true);
    }

    const handleClose = () => {
        setShow(false)
    }

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
                        <button onClick={handleClick} className="register-user-bottome-container__inner__button">Create Professional Account</button>
                    </div>
                    <div className="register-user-bottome-container__inner">
                        <div className="symbol-div">💆‍♀️💆‍♂️</div>
                        <h2 className="register-user-bottome-container__inner__h2">Massage Recipient</h2>
                        <p className="register-user-bottome-container__p">I want to book massage services.</p>
                        <button className="register-user-bottome-container__inner__button">Create Public Account</button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Modal'>
                <Login />
            </Modal>
        </div>
    )
}

export default RegisterUser;