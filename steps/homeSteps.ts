import { browser } from "protractor";
import { Given,Then } from "cucumber";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given(/^I go to "(.*?)"$/,async (text) => {
    if(text === 'Angular'){
        await browser.get('https://angularjs.org/');        
    }else if(text === 'Google'){
        browser.waitForAngularEnabled(false);
        await browser.get('https://google.com/');        
        await expect(browser.getTitle()).to.eventually.equal("Google");
    }
});

Then(/^I click on google logo$/, async () => {

    await expect(browser.getTitle()).to.eventually.equal("AngularJS — Superheroic JavaScript MVW Framework");
});

