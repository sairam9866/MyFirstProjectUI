var FutureRecordsPO = require("../PO/FutureRecords_PO.js");
var HomePagePOFile = require("../PO/Homepage_PO.js");
var GridPropertiesPo = require("../PO/GridProperties_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.GridData;
var dataFutureRecord= testdata.Homepage.FutureRecord;

describe ("Future Records Tab Scenario:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();
        
    });

    afterEach(function() {
        
    });

    /* Future Records 1 Scenario*/
    it("verify Future Records tables are available", function() {

        FutureRecordsPO.isFutureRecordsTabButtonAvailable();
        FutureRecordsPO.clickFutureRecordsTab();
        browser.sleep(2000);
        FutureRecordsPO.isFutureRecordsTabPageDisplayed();

        HomePagePOFile.isNetworkHeaderAvailable();
        HomePagePOFile.isCountryCodeHeaderAvailable();
        HomePagePOFile.isPostalCodeHeaderAvailable();
        HomePagePOFile.isStateProvinceHeaderAvailable();
        HomePagePOFile.isDestinationHeaderAvailable();
        HomePagePOFile.isCreatedDateHeaderAvailable();
        
    });

    /* Future Records 2 Scenario*/
    it("verify pagination in Future Records page", function() {

        FutureRecordsPO.isFutureRecordsTabButtonAvailable();
        FutureRecordsPO.clickFutureRecordsTab();
        browser.waitForAngular();
        FutureRecordsPO.isFutureRecordsTabPageDisplayed();

        browser.sleep(3000);
        HomePagePOFile.isPageListAvailable();
        browser.sleep(3000);
        HomePagePOFile.isPaginationListAvailable();

    });

     /*Future Records 3 Scenario*/
    it("Verify Mandatory Fields Displayed ", function(){

        FutureRecordsPO.isFutureRecordsTabButtonAvailable();
        FutureRecordsPO.clickFutureRecordsTab();
        browser.waitForAngular();
        FutureRecordsPO.isFutureRecordsTabPageDisplayed();

        browser.sleep(3000);
        HomePagePOFile.isNetworkHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isCountryCodeHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isPostalCodeHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isStateProvinceHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isDestinationHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isCreatedDateHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isEffectiveDateHeaderAvailable();

    });

    /*Future Records 4 Scenario*/
    it("Verify User is able to verify Legend Section",function(){

        FutureRecordsPO.isFutureRecordsTabButtonAvailable();
        FutureRecordsPO.clickFutureRecordsTab();
        browser.waitForAngular();
        FutureRecordsPO.isFutureRecordsTabPageDisplayed();

        browser.sleep(3000);
       FutureRecordsPO.isLegendSectionAvailable();
       FutureRecordsPO.isAddAvailableinLegendSection();
       FutureRecordsPO.isModifyAvailableinLegendSection();
       FutureRecordsPO.isDeleteAvailableinLegendSection();
        
     });

     /*Future Records 5 Scenario*/
    it("Verify User is able to verify Footer",function(){

        FutureRecordsPO.isFutureRecordsTabButtonAvailable();
        FutureRecordsPO.clickFutureRecordsTab();
        browser.waitForAngular();
        FutureRecordsPO.isFutureRecordsTabPageDisplayed();

        FutureRecordsPO.isFooterSectionAvailable();
        FutureRecordsPO.isFedexCorporationTextAvailable();
        FutureRecordsPO.isVersionTextAvailable(); 
         
    });

      
});