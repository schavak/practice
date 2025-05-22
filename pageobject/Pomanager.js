const {dashboard} =require('./dashboard');
const {signin} = require('./Signin');


class POmanager{

constructor(page){
this.page = page;

this.dashboard = new dashboard(this.page);
this.signin = new Signin(this.signin);



}

getdashboard(){


    return this.dashboard;
}

getsignin(){

    return this.signin;
}





}

module.exports = {POmanager}