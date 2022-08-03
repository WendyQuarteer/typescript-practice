# Interface segregation principle
"Many client-specific interfaces are better than one general-purpose interface."

Interfaces are really good, but like with everything that is good you can go overboard. It is really important that 
when we create interfaces that are precise and modular. 
Almost all languages support adding multiple interfaces to the same class, this in contrast to extending a class, where 
only a few languages (eg. c++) allow multiple inheritance.
This allows us to create a lot of small, granular interfaces that then allows us to reuse interfaces to multiple 
different classes.

As a rule of thumb, here is an easy rule: 
**If at any point you are writing 'this function is not supported' 
in a class to adhere to an interface, your interface is too big.**

The problem of these big interfaces is sometimes called a **Fat Interface*. A fat interface violates Single 
Responsibility Principle too as it’s handling more than one responsibility at a time.

Let us think of an example, for example, let us think back of an animal example, look at the following code:

```typescript
interface BirdInterface {
    laysEgg();
    makeSound();
    fly();
    getFlySpeed();
}
class Parrot implements BirdInterface {}
```

This works great, but what happens when we want to make a penguin? Those cute creatures cannot fly! So let us move the *fly()* to a separate interface:

```typescript
interface BirdInterface {
    laysEgg();
    makeSound();
}
interface CanFly {
    fly();
    getFlySpeed();
}
```

### Exercise: step 1
Go into [old.ts](old.ts) and look at the 2 different users. They have a couple of authentication methods but like you 
can see, Admin users can only login with a password, not with facebook or google because of security reasons.
Refactor the current fat interface so each auth method has each own interface.

As an extra difficulty, there is a feature request for a google bot to be able to login on the site, he can only use 
the google option to log in. Can you make this extra class?

### Exercise: Step 2 (Optional)
You might notice that both the Google and Facebook code is almost identical, could you maybe refactor this code to 
small, separate dependencies?

## MY PREPARATION
- Read and try to understand the provided links regarding this exercise ISP (Interface Segregation Principle).
* THE USER OF THE INTERFACE SHOULD NOT BE FORCED TO RELY ON METHODS HE DOES NOT USE.  It is in line with the 
single responsibility principle.
![img.png](img.png)https://accesto.com/blog/solid-php-solid-principles-in-php/

## THE ACTUAL EXERCISE:
10 errors to begin with.  I need to ged rid of them asap, or they will keep following me!
#### Fixing errors:
- TS2531: Object is possibly 'null':  solved with a cast.
```typescript
const loginFormElement = <HTMLFormElement>document.querySelector('#login-form');
```
- TS7010: 'resetPassword', which lacks return-type annotation, implicitly has an 'any' return type.: solvable with a return type. Solved by adding a type.
```typescript
setGoogleToken(token : string) : void;
```
TS7006: Parameter 'token' implicitly has an 'any' type.: solved by adding a type.
```typescript
getFacebookLogin(token : string);
```
TS2564: Property '_googleToken' has no initializer and is not definitely assigned in the constructor. Solved by assiging an empty string.
```typescript
private _googleToken : string = '';
```
2 more errors to deal with.  They are pointing to the resetPassword().
- TS2322: Type 'string | null' is not assignable to type 'string'.<br/>Type 'null' is not assignable to type 'string'.
I simply added an exclamation mark. Needed to do some Googe-ling for that.  The exclamation mark is the non-null 
assertion operator in TypeScript.  It removes null and undefined from a type without doing any explicit type checking.
I basically tell TypeScript that this value will never be null or undefined. 
```typescript
resetPassword() {
        this._password = prompt('What is your new password?')!;
    }
```
Error free wiiiiiiiiiiiii... (for now).


### STEP 1:
2 Different users: User & Admin and a 3th one on its way: GoogleBot.  They don't use the same methods, 
so 1 interface for all, can't be the way to. We shouldn't force our interface implementations to implement methods 
they don't use.
1. Make one interface for User only, containing purely methods for the password.  Implemented by User, Admin
2. Make one interface for Google only, containing purely methods for Google.  Implemented by User, GoogleBot
3. Make one interface for Facebook only, containing purely methods for the password.   Implemented by User
4. Now I can remove the methods that the Admin was forced upon (Google & Facebook).
5. Create a new class called GoogleBot and make sure it implements the Google-interface only. Instantiate it.
6. Add an html checkbox for googleBot to log-in.
7. Add a constant with the new html-element as value.


### STEP 2: