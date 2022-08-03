interface UserAuth {
    checkPassword(password: string) : boolean;
    resetPassword(): void;
}
interface FacebookAuth {
    setFacebookToken(token : string) : void;
    getFacebookLogin(token : string) : boolean;
}
interface GoogleAuth {
    setGoogleToken(token : string) : void;
    checkGoogleLogin(token : string) : boolean;
}
class User implements UserAuth, FacebookAuth, GoogleAuth {
    private _password : string = 'user';
    private _facebookToken : string = '';
    private _googleToken : string = '';

    checkGoogleLogin(token : string) {

        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token : string) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')!;
    }
}

//admin cannot use google or facebook token
class Admin implements UserAuth {
    private _password : string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')!;
    }
}

// class GoogleBot implements UserAuth {}
class GoogleBot implements GoogleAuth {
    private _googleToken : string = '';

    checkGoogleLogin(token : string) {

        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');
const loginFormElement = <HTMLFormElement>document.querySelector('#login-form');
const loginGoogleElement = <HTMLInputElement>document.querySelector('#loginAsGoogleBot')
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
    } else if (user === bot) {
        user.setGoogleToken('secret_token_google');
    }

    let auth = false;
    if (typePasswordElement.checked && user != bot) {
            auth = user.checkPassword(passwordElement.value);
        } else if (typeGoogleElement.checked && user != admin) {
                auth = user.checkGoogleLogin('secret_token_google');
        } else if (typeFacebookElement.checked && user === guest) {
        auth = user.getFacebookLogin('secret_token_fb');
    }
    
    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
   event.preventDefault();

   let user = (loginAsAdminElement.checked) ? admin : guest;
   user.resetPassword();
});

