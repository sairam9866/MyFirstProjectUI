var HomePagePOFile = require("../PO/Homepage_PO.js");
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.search;
var params = browser.params;

describe ("HomePage Scenario:", function() {
 
    beforeEach(function() {

        browser.manage().window().maximize();
        browser.get(params.baseUrl); 
        browser.waitForAngular();

    });

    afterEach(function() {
        
    });

    it("verify All buttons in webpage", function() {

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();
        HomePagePOFile.isManageRecordsPopupAvailable();

        HomePagePOFile.isModifyButtonAvaiable();
        HomePagePOFile.isAddButtonAvailable();
        HomePagePOFile.isDeleteButtonAvaiable();
        browser.waitForAngular();
        browser.refresh();

    });

    it("verify search button", function() {

        HomePagePOFile.isSearchTextBoxAvailable();
        HomePagePOFile.isSearchButtonAvailable();
        browser.waitForAngular();

    });

    it("verify search button after key search", function() {

        HomePagePOFile.clickSearchTextBox();
        browser.waitForAngular();

        HomePagePOFile.sendSearchKeyword(data.network1);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode4);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.state1);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.destination1);
        browser.waitForAngular();
    });

    it("verify table headers", function() {

        HomePagePOFile.isNetworkHeaderAvailable();
        HomePagePOFile.isCountryCodeHeaderAvailable();
        HomePagePOFile.isPostalCodeHeaderAvailable();
        HomePagePOFile.isStateProvinceHeaderAvailable();
        HomePagePOFile.isDestinationHeaderAvailable();
        HomePagePOFile.isEffectiveDateHeaderAvailable();
        HomePagePOFile.isCreatedDateHeaderAvailable();

    });

    it("verify ghost text in search bar", function() {

        HomePagePOFile.isGhostTextinSearchBarAvailable();
        browser.waitForAngular();

    });

    it("verify Zip to dest tabs", function() {

        HomePagePOFile.isZipToDestCurrentTabAvailable();
        HomePagePOFile.isZipToDestHistoryTabAvailable();
      
    });

    it("verify pagination in Home page", function() {

        HomePagePOFile.isPageListAvailable();
        HomePagePOFile.isPaginationListAvailable();

    });

    it("verify search button after key search different data", function() {

        HomePagePOFile.clickSearchTextBox();
        browser.waitForAngular();

        HomePagePOFile.sendSearchKeyword(data.network1);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode1);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode2);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode3);
        browser.waitForAngular();
    });

    it("verify breadcrum for current records", function() {

        HomePagePOFile.clickCurrentRecordsTab();
        browser.waitForAngular();
        HomePagePOFile.isCurrnetRecordBreadcrumAvailable();
        expect(HomePagePOFile.getTextCurrentRecordBreadcrum()).toEqual(data.currentRecord);

    });

    it("verify breadcrum for Future records", function() {

        HomePagePOFile.clickFutureRecordsTab();
        browser.waitForAngular();
        HomePagePOFile.isFutureRecordBreadcrumAvailable();
        expect(HomePagePOFile.getTextFutureRecordBreadcrum()).toEqual(data.futureRecord);

    });

    it("verify breadcrum for History records", function() {

        HomePagePOFile.clickHistoricalRecordsTab();
        browser.waitForAngular();
        HomePagePOFile.isHistoryRecordBreadcrumAvailable();
        expect(HomePagePOFile.getTextHistoryRecordBreadcrum()).toEqual(data.historicalRecords);

    });
  
});