class Signin{

constructor(page){

this.signinfield = page.locator("#email");
this.passwordfiels = page.locator("#passwordField");
this.loginbutton= page.locator("btnId");


}

async getlogin(username,password){

    await this.signinfield.type(username);
    await this.passwordfiels.type(password);
    await this.loginbutton.click();


}


}

module.exports= {Signin}