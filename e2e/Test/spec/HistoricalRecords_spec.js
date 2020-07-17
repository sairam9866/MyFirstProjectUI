var HistoricalRecordTabPO = require("../PO/HistoricalRecords_PO.js");
var HomePagePOFile = require("../PO/Homepage_PO.js");
var GridPropertiesPo = require("../PO/GridProperties_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.GridData;
var dataFutureRecord= testdata.Homepage.HistoricalRecord;

describe ("Historical Records Tab Scenario:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();
        
    });

    afterEach(function() {
        
    });

    /* Historical Records 1 Scenario*/
    it("verify Historical Records tables are available", function() {

        HistoricalRecordTabPO.isHistoricalRecordsTabButtonAvailable();
        HistoricalRecordTabPO.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HistoricalRecordTabPO.isHistoricalRecordsTabPageDisplayed();

        browser.sleep(2000);
        HomePagePOFile.isNetworkHeaderAvailable();
        browser.sleep(2000);
        HomePagePOFile.isCountryCodeHeaderAvailable();
        HomePagePOFile.isPostalCodeHeaderAvailable();
        HomePagePOFile.isStateProvinceHeaderAvailable();
        HomePagePOFile.isDestinationHeaderAvailable();
        HomePagePOFile.isCreatedDateHeaderAvailable();
        
    });

    /* Historical Records 2 Scenario*/
    it("verify pagination in Future Records page", function() {

        HistoricalRecordTabPO.isHistoricalRecordsTabButtonAvailable();
        HistoricalRecordTabPO.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HistoricalRecordTabPO.isHistoricalRecordsTabPageDisplayed();

        browser.sleep(3000);
        HomePagePOFile.isPageListAvailable();
        browser.sleep(3000);
        HomePagePOFile.isPaginationListAvailable();

    });


    /* Historical Records 3 Scenario*/
    it("Verify All Fields in GridProperties", function(){

        HistoricalRecordTabPO.isHistoricalRecordsTabButtonAvailable();
        HistoricalRecordTabPO.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HistoricalRecordTabPO.isHistoricalRecordsTabPageDisplayed();

        browser.sleep(2000);
        GridPropertiesPo.isGridPropertiesTextAvailable();
        browser.sleep(2000);
        GridPropertiesPo.isAdjustColumnsTextAvailable();
        browser.sleep(2000);
        GridPropertiesPo.isShowCloumnsTextAvailable();
        browser.sleep(2000);
        GridPropertiesPo.isFitInTableRadioButtonAvailable();
        browser.sleep(2000);
        GridPropertiesPo.isAutoFitRadioButtonAvailable();
        browser.sleep(2000);
        GridPropertiesPo.isNetworkCheckBoxAvailable();
        GridPropertiesPo.isZipPostalCodeCheckBoxAvailable();
        GridPropertiesPo.isDestinationCheckBoxAvailable();
        GridPropertiesPo.isEffectiveDateCheckBoxAvailable();
        GridPropertiesPo.isCurrentCheckBoxAvailable();
        GridPropertiesPo.isCancelCheckBoxAvailable();
        GridPropertiesPo.isCancelUserCheckBoxAvailable();
        GridPropertiesPo.isCountryCodeCheckBoxAvailable();
        GridPropertiesPo.isStateProvienceCheckBoxAvailable();
        GridPropertiesPo.isCreationDateCheckBoxAvailable();
        GridPropertiesPo.isCreatedByCheckBoxAvailable();
        GridPropertiesPo.isProcessedCheckBoxAvailable();
        GridPropertiesPo.isTransacationTypeCheckBoxAvailable();

    });

     /*Historical Records 4 Scenario*/
    it("Verify Mandatory Fields Displayed ", function(){

        HistoricalRecordTabPO.isHistoricalRecordsTabButtonAvailable();
        HistoricalRecordTabPO.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HistoricalRecordTabPO.isHistoricalRecordsTabPageDisplayed();

        browser.sleep(2000);
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

    /*Historical Records 5 Scenario*/
    it("Verify User is able to verify Legend Section",function(){

        HistoricalRecordTabPO.isHistoricalRecordsTabButtonAvailable();
        HistoricalRecordTabPO.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HistoricalRecordTabPO.isHistoricalRecordsTabPageDisplayed();

        browser.sleep(2000);
        HistoricalRecordTabPO.isLegendSectionAvailable();
        HistoricalRecordTabPO.isAddAvailableinLegendSection();
        HistoricalRecordTabPO.isModifyAvailableinLegendSection();
        HistoricalRecordTabPO.isDeleteAvailableinLegendSection();
        
     });

     /*Historical Records 6 Scenario*/
    it("Verify User is able to verify Footer",function(){

        HistoricalRecordTabPO.isHistoricalRecordsTabButtonAvailable();
        HistoricalRecordTabPO.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HistoricalRecordTabPO.isHistoricalRecordsTabPageDisplayed();

        HistoricalRecordTabPO.isFooterSectionAvailable();
        HistoricalRecordTabPO.isFedexCorporationTextAvailable();
        HistoricalRecordTabPO.isVersionTextAvailable(); 
         
    });
      
});