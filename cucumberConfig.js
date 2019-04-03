/*Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

const path = require('path');
exports.config = {

  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  baseUrl: 'https://angularjs.org/',

  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    './features/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['./steps/*.ts'],  // require step definition files before executing features
    // tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    format: 'json:.tmp/results.json'
    // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    // 'dry-run': false,              // <boolean> invoke formatters without executing steps
    // compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  plugins: [{
    path: './node_modules/protractor-multiple-cucumber-html-reporter-plugin',
    options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
}],

 onPrepare: function () {
  require('ts-node').register({
    project: './tsconfig.json'
  });
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
}