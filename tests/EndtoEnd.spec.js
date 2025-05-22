const {test,expect}=require('@playwright/test');
const{POmanager} = require('../pageobject/Pomanager');
const testdata = require(JSON.parse(JSON.stringify('../utills/Testdata.json')));

test('first test case',async({page})=>{

const pOmanager = new POmanager(page);
 const dashboard = pOmanager.getdashboard();
 await dashboard.goto();
 await dashboard.gotosignup();


 const signIn = pOmanager.getsignin();

 await signIn.getsignin(testdata.username,testdata.password);



})