class dashboard{

constructor(page){

        this.page=page;
        this.line = page.locator(".lines");
        this.loginbutton = page.locator("#menu-item-26698");
        this.signupbutton = page.locator("[class*='mt-3']").nth(1);


}

async goto(){

await this.page.goto("https://trezi.com/");

}

async gotosignup(){

await this.line.click();
await this.loginbutton.click();
//await this.page.waitforloadstate('networkidle');
//await this.signupbutton.nth(1);

}






}

module.exports={dashboard};
