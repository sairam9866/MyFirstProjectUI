//var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

  specs: [

    './Test/spec/AddForm_spec.js',
    /*'./Test/spec/GridProperties_spec.js',   
     './Test/spec/Homepage_spec.js',
    './Test/spec/HistoricalRecords_spec.js',
     
    './Test/spec/ModifyForm_spec.js',
    './Test/spec/DeleteForm_spec.js',
    './Test/spec/CancelForm_spec.js',    
    './Test/spec/StateList_spec.js',
    './Test/spec/Userguide_spec.js',
    './Test/spec/FutureRecords_spec.js',
*/
  ],

  capabilities: {
    'browserName': 'chrome',
  },

  directConnect: true,
  
  params: {
  baseUrl: 'http://localhost:4200',
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 9000000,
  },

  /*onPrepare() {
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './report/screenshots',preserveDirectory: false , 
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
   }).getJasmine2Reporter());
  }*/

  onPrepare() {
    browser.waitForAngularEnabled(false);
  }

};