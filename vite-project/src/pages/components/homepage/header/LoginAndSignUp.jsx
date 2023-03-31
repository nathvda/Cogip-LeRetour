import React from 'react';

const LoginAndSignUp = () => {
    const open = (arg) => {
        document.getElementById(arg).style.display = "flex";
    }

    const close = (arg) => {
        document.getElementById(arg).style.display = "none";
    }

    return (
        <div className="homepage__login">
            <button id="signup" className="button button--primary" onClick={() => open("signupModal")}>Sign up</button>
            <div id="signupModal" className="modal">
                <div className="modal-content"> 
                    <button className="close-modal" onClick={() => close("signupModal")}>X</button>
                    <form method="post" action="">
                        <h3>Sign up</h3>
                    <div className="form__field">
                        <label htmlFor="email">email address</label>
                        <input type="text" id="email" name="email"/>  
                    </div>
                    <div className="form__field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" name="password"/>  
                    </div>
                    <div className="form__field">
                        <label htmlFor="password-confirm">password</label>
                        <input type="password" id="password-confirm" name="password-confirm"/>  
                    </div>
                    <button className="button button--submit" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
            <button id="login" className="button" onClick={() => open("loginModal")}>Login</button>
            <div id="loginModal" className="modal">
                <div className="modal-content"> 
                    <button className="close-modal" onClick={() => close("loginModal")}>X</button>
                    <form method="post" action="">
                        <h3>Log in</h3>
                    <div className="form__field">
                        <label htmlFor="email">email address</label>
                        <input type="text" id="email" name="email"/>  
                    </div>
                    <div className="form__field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" name="password"/>  
                    </div>
                    <button className="button button--submit" type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignUp;