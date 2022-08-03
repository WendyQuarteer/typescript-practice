interface Password {
    checkPassword(password: string): boolean;

    resetPassword():void;
}

interface Google {
    setGoogleToken(token: string): void;

    checkGoogleLogin(token: string): boolean;
}

interface Facebook {
    setFacebookToken(token: string): void;

    getFacebookLogin(token: string): boolean;
}

///-----USER-----///
class User implements Password, Google, Facebook {
    private _password: string = 'user';
    private _facebookToken: string = '';
    private _googleToken: string = '';

//Interesting detail here: while I did not define a return type or param type,
    // any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

    getFacebookLogin(token: string) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token: string) {
        this._facebookToken = token;
    }

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')!;
    }
}

///-----ADMIN-----///
class Admin implements Password {
    private _password: string = 'admin';

//METHODS:
    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')!;
    }
}

///-----GOOGLEBOT-----///
class GoogleBot implements Google {
    private _googleToken: string = "";

//METHODS:
    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }
}

///-----MAIN-----///
const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const loginAsGoogleBotElement = <HTMLInputElement>document.querySelector('#loginAsGoogleBot');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');
const loginElement = <HTMLFormElement>document.querySelector('#login-form');
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
adminLogIn()
    googleBotLogIn()
    guestLogIN()

    function adminLogIn() {
        if (user === admin && choosePassword) {
            user.checkPassword(passwordElement.value);
        } else if (user === admin && chooseGoogle || chooseFacebook) {
            alert("Admin can only sign it with password!");
        }
    }

    function googleBotLogIn() {
        if (user === googleBot && chooseGoogle) {
            user.checkGoogleLogin('secret_token_google');
        } else if (user === googleBot && chooseFacebook || choosePassword) {
            alert("GoogleBot can only sign it with Google!");
        }
    }

    function guestLogIN() {
        if (user === guest && choosePassword) {
            user.checkPassword(passwordElement.value);
        } else if (user === guest && chooseGoogle) {
            user.checkGoogleLogin('secret_token_google');
        } else if (user === guest && choosePassword) {
            user.checkGoogleLogin('secret_token_fb');
        }
    }

    if (user) {
        alert('login success');
    } else {
        alert('login failed');
    }


    resetPasswordElement.addEventListener('click', (event) => {
            event.preventDefault();
            let user = loginAsAdminElement.checked ? admin : guest;
            user.resetPassword();
        }
    )
});
