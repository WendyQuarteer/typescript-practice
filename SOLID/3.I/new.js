"use strict";
class User {
    constructor() {
        this._password = 'user';
        this._facebookToken = '';
        this._googleToken = '';
    }
    checkGoogleLogin(token) {
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
//admin cannot use google or facebook token
class Admin {
    constructor() {
        this._password = 'admin';
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
// class GoogleBot implements UserAuth {}
class GoogleBot {
    constructor() {
        this._googleToken = '';
    }
    checkGoogleLogin(token) {
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
}
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
const loginFormElement = document.querySelector('#login-form');
const loginGoogleElement = document.querySelector('#loginAsGoogleBot');
let guest = new User();
let admin = new Admin();
let bot = new GoogleBot();
loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    //debugger;
    let user = (loginAsAdminElement.checked) ? admin : (loginGoogleElement.checked) ? bot : guest;
    console.log(user);
    if (user === guest) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    else if (user === bot) {
        user.setGoogleToken('secret_token_google');
    }
    let auth = false;
    if (typePasswordElement.checked && user != bot) {
        auth = user.checkPassword(passwordElement.value);
    }
    else if (typeGoogleElement.checked && user != admin) {
        auth = user.checkGoogleLogin('secret_token_google');
    }
    else if (typeFacebookElement.checked && user === guest) {
        auth = user.getFacebookLogin('secret_token_fb');
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();
    let user = (loginAsAdminElement.checked) ? admin : guest;
    user.resetPassword();
});
