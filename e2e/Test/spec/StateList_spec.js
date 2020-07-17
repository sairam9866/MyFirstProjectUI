var HomePagePOFile = require("../PO/Homepage_PO.js");
var AddFormPO = require("../PO/AddForm_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.StateList;

describe ("State List:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();
        HomePagePOFile.isManageRecordsPopupAvailable();

        HomePagePOFile.isAddButtonAvailable();
        HomePagePOFile.clickAddButton();
        browser.waitForAngular();
        AddFormPO.isAddFormPopupAvailable();
        
    });

    afterEach(function() {
        
    });

    /* State List 1 Scenario*/
    it("Verify All states in Add Form for Country USA", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.clickStateDropdown();
        browser.sleep(2000);

        expect(AddFormPO.getTextStateOptionOne()).toEqual(data.ListOne);
        expect(AddFormPO.getTextStateOptionTwo()).toEqual(data.ListTwo);
        expect(AddFormPO.getTextStateOptionThree()).toEqual(data.ListThree);
        expect(AddFormPO.getTextStateOptionFour()).toEqual(data.ListFour);
        expect(AddFormPO.getTextStateOptionFive()).toEqual(data.ListFive);
        expect(AddFormPO.getTextStateOptionSix()).toEqual(data.ListSix);
        expect(AddFormPO.getTextStateOptionSeven()).toEqual(data.ListSeven);
        expect(AddFormPO.getTextStateOptionEight()).toEqual(data.ListEight);
        expect(AddFormPO.getTextStateOptionNine()).toEqual(data.ListNine);
        expect(AddFormPO.getTextStateOptionTen()).toEqual(data.ListTen);
        expect(AddFormPO.getTextStateOptionEleven()).toEqual(data.ListELeven);
        expect(AddFormPO.getTextStateOptionTwelve()).toEqual(data.ListTwelve);
        expect(AddFormPO.getTextStateOptionThirteen()).toEqual(data.ListThirteen);
        expect(AddFormPO.getTextStateOptionFourteen()).toEqual(data.ListFourteen);
        expect(AddFormPO.getTextStateOptionFifteen()).toEqual(data.ListFifteen);
        
    });

    /* State List 1 Scenario*/
    it("Verify All states in Add Form for Country Canada", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCodeCanada(data.zipcodeCanada);
        browser.waitForAngular();
        AddFormPO.clickStateDropdown();
        browser.sleep(2000);

        expect(AddFormPO.getTextStateOptionOne()).toEqual(data.StateOneCanada);
        expect(AddFormPO.getTextStateOptionTwo()).toEqual(data.StateTwoCanada);
        expect(AddFormPO.getTextStateOptionThree()).toEqual(data.StateThreeCanada);
        expect(AddFormPO.getTextStateOptionFour()).toEqual(data.StateFourCanada);
       
    });

});