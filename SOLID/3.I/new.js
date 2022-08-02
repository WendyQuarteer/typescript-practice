"use strict";
///-----USER-----///
class User {
    constructor() {
        this._password = 'user';
        this._facebookToken = '';
        this._googleToken = '';
    }
    //Interesting detail here: while I did not define a return type or param type,
    // any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }
    setFacebookToken(token) {
        this._facebookToken = token;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
///-----ADMIN-----///
class Admin {
    constructor() {
        this._password = 'admin';
    }
    //METHODS:
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
///-----GOOGLEBOT-----///
class GoogleBot {
    //METHODS:
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
}
///-----MAIN-----///
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const loginAsGoogleBotElement = document.querySelector('#loginAsGoogleBot');
const resetPasswordElement = document.querySelector('#resetPassword');
const loginElement = document.querySelector('#login-form');
let guest = new User();
let admin = new Admin();
let googleBot = new GoogleBot();
loginElement.addEventListener('submit', (event) => {
    console.log('piep');
    event.preventDefault();
    //debugger;
    const choosePassword = typePasswordElement.checked;
    const chooseFacebook = typeFacebookElement.checked;
    const chooseGoogle = typeGoogleElement.checked;
    let user = (loginAsAdminElement.checked) ? admin : (loginAsGoogleBotElement.checked) ? googleBot : guest;
    function adminLogIn() {
        if (user === admin && choosePassword) {
            user.checkPassword(passwordElement.value);
        }
        else if (user === admin && chooseGoogle || chooseFacebook) {
            alert("Admin can only sign it with password!");
        }
    }
    function googleBotLogIn() {
        if (user === googleBot && chooseGoogle) {
            user.checkGoogleLogin('secret_token_google');
        }
        else if (user === googleBot && chooseFacebook || choosePassword) {
            alert("GoogleBot can only sign it with Google!");
        }
    }
    function guestLogIN() {
        if (user === guest && choosePassword) {
            user.checkPassword(passwordElement.value);
        }
        else if (user === guest && chooseGoogle) {
            user.checkGoogleLogin('secret_token_google');
        }
        else if (user === guest && choosePassword) {
            user.checkGoogleLogin('secret_token_fb');
        }
    }
    if (user) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
    resetPasswordElement.addEventListener('click', (event) => {
        event.preventDefault();
        let user = loginAsAdminElement.checked ? admin : guest;
        user.resetPassword();
    });
});
