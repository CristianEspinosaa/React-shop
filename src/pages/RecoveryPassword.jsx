import React from 'react';
import '../styles/RecoveryPassword.scss';


const RecoveryPassword = () => {
  return <div>
            <div className="email-succes">
        <div className="container">
            <img src="../resorce/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
            <div className="container-image">
                <img src="../resorce/icons/email.svg" alt="email" className="email-image" />
            </div>
            <button type="button" className="primary-button email-login">Login</button>
            <p className="text">Didn't receive the email? <a href="/">Resend</a></p>
        </div>
    </div>
        </div>;
};

export default RecoveryPassword;
