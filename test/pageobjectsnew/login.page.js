import BasePage from './base.page.js';
 class LoginPage extends BasePage{

    get inputUsername () {return $('#user-name');}
    get inputPassword () {return $('#password');}
    get loginBtn () {return $('#login-button')}
    get errorMessage () {return $('h3[data-test="error"]')}
    get errorMessageContainer () {return $('div[class="error-message-container error"]')}
    get crossIconUserNameInput () {return $('#user-name > svg[class="svg-inline--fa fa-times-circle fa-w-16 error_icon"]')}
    get crossIconPasswordInput () {return $('#password > svg[class="svg-inline--fa fa-times-circle fa-w-16 error_icon"]')}
    get inputUsernameOnError () {return $('#user-name.input_error.form_input.error')}
    get inputPasswordOnError () {return $('#password.input_error.form_input.error')}
    get userNamePlaceholder () {return $('input[placeholder="Username"]')}
    get userPasswordPlaceholder () {return $('input[placeholder="Password"]')}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    open () {
        return super.open('login');
    }

}

export default new LoginPage();