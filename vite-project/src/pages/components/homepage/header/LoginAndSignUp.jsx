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
            <button id="signup" class="button button--primary" onClick={() => open("signupModal")}>Sign up</button>
            <div id="signupModal" class="modal">
                <div class="modal-content"> 
                    <button class="close-modal" onClick={() => close("signupModal")}>X</button>
                    <form method="post" action="">
                        <h3>Sign up</h3>
                    <div class="form__field">
                        <label for="email">email address</label>
                        <input type="text" id="email" name="email"/>  
                    </div>
                    <div class="form__field">
                        <label for="password">password</label>
                        <input type="password" id="password" name="password"/>  
                    </div>
                    <div class="form__field">
                        <label for="password-confirm">password</label>
                        <input type="password" id="password-confirm" name="password-confirm"/>  
                    </div>
                    <button class="button button--submit" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
            <button id="login" class="button" onClick={() => open("loginModal")}>Login</button>
            <div id="loginModal" class="modal">
                <div class="modal-content"> 
                    <button class="close-modal" onClick={() => close("loginModal")}>X</button>
                    <form method="post" action="">
                        <h3>Log in</h3>
                    <div class="form__field">
                        <label for="email">email address</label>
                        <input type="text" id="email" name="email"/>  
                    </div>
                    <div class="form__field">
                        <label for="password">password</label>
                        <input type="password" id="password" name="password"/>  
                    </div>
                    <button class="button button--submit" type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignUp;