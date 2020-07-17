var HomePagePOFile = require("../PO/Homepage_PO.js");
var UserGuidePO = require("../PO/userguide_PO.js")
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.UserGuide;

describe ("User Guide scenarios:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();

    });

    afterEach(function() {
        
    });

    /* User Guide - 1 Scenario*/
    it("Verify User is able to see user guide button", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

    });

    /* User Guide - 2 Scenario*/
    it("Verify User is able to see FAQ in user guide page", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.sleep(2000);
        UserGuidePO.isFAQTextAvailable();

    });

    /* User Guide - 3 Scenario*/
    it("Verify User is able to see search button in User Guide", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.sleep(2000);
        UserGuidePO.isFAQTextAvailable();

        UserGuidePO.isSearchTextAvailable();
        UserGuidePO.isSearchButtonAvailable();

    });

    /* User Guide - 4 Scenario*/
    it("Verify User is able to see breadcrum in user guide page", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.sleep(2000);
        UserGuidePO.isFAQTextAvailable();

        UserGuidePO.isBreadcrumAvailable();

    });

    /* User Guide - 5 Scenario*/
    it("Verify User is able to see ghost text available in search", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.sleep(2000);
        UserGuidePO.isFAQTextAvailable();

        UserGuidePO.isGhostTextAvailable();

    });

    /* User Guide - 6 Scenario*/
    it("Verify User is able to search FAQ's", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.sleep(2000);
        UserGuidePO.isFAQTextAvailable();

        UserGuidePO.sendSearchKeyword(data.searchOne);
        browser.waitForAngular();
        UserGuidePO.clearSearchTextBox();

        UserGuidePO.sendSearchKeyword(data.searchTwo);
        browser.waitForAngular();
        UserGuidePO.clearSearchTextBox();

        UserGuidePO.sendSearchKeyword(data.searchThree);
        browser.waitForAngular();
        UserGuidePO.clearSearchTextBox();

        UserGuidePO.sendSearchKeyword(data.searchFour);
        browser.waitForAngular();
        UserGuidePO.clearSearchTextBox();

        UserGuidePO.sendSearchKeyword(data.searchFive);
        browser.waitForAngular();
        UserGuidePO.clearSearchTextBox();


    });

    /* User Guide - 7 Scenario*/
    it("Verify User is able to see FAQ list", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.waitForAngular();
        UserGuidePO.isFAQTextAvailable();

        UserGuidePO.isFAQListAvailable();

    });

    /* User Guide - 8 Scenario*/
    it("Verify User is able to see answer when clicked on FAQ", function() {

        HomePagePOFile.isHomepageDisplayed();
        UserGuidePO.isUserGuideButtonAvailable();

        UserGuidePO.clickUserGuideButton();
        browser.sleep(2000);
        UserGuidePO.isFAQTextAvailable();
        UserGuidePO.isFAQListAvailable();

        UserGuidePO.clickonFirstFAQ();
        browser.waitForAngular();
        UserGuidePO.isFAQAnswerAvailable();

    });
      
});