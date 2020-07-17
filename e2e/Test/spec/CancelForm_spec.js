var HomePagePOFile = require("../PO/Homepage_PO.js");
var AddFormPO = require("../PO/AddForm_PO.js");
var CancelFormPO = require("../PO/CancelForm_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.addForm;

describe ("Cancel Form Scenarios:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();
        browser.sleep(2000);
    });

    afterEach(function() {
        
    });

    /* Cancel 1 Scenario*/
    it("verify pagination in Cancel Form Popup", function() {

        HomePagePOFile.isCancelButtonAvailable();
        HomePagePOFile.clickCancelButton();
        browser.sleep(2000);

        CancelFormPO.isCancelFormPopUpAvailable();
        CancelFormPO.isCancelFutureTransactionTextAvailable();
        CancelFormPO.isFromZipCodeTextAvailable();
        CancelFormPO.isToZipCodeTextAvailable();
        CancelFormPO.isCountryCodeAvailable();
        CancelFormPO.isSubmitButtonAvailable();
        CancelFormPO.isResetButtonAvailable();    
        CancelFormPO.isCancelButtonAvailable();

        CancelFormPO.isPaginationAvailable();
        CancelFormPO.isPaginationArrowAvailable();

        CancelFormPO.clickCancelButton();

    });

     /* Cancel 2 Scenario*/
     it("Verify user should be cancel the data which has been added", function() {

        HomePagePOFile.isAddButtonAvailable();
        HomePagePOFile.clickAddButton();
        browser.waitForAngular();
        AddFormPO.isAddFormPopupAvailable();

        AddFormPO.selectNetworkfromDropdownFourthOption();  
        AddFormPO.enterZipCode();
        AddFormPO.selectStateorProvinceFirstOption();

        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaCentral();
        browser.waitForAngular();

        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();
        AddFormPO.clickYesButton();
        browser.sleep(4000);
        AddFormPO.isSuccessConfirmationMessage();
        AddFormPO.clickCloseButton();
        browser.waitForAngular();

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();
        
        HomePagePOFile.isCancelButtonAvailable();
        HomePagePOFile.clickCancelButton();
        browser.waitForAngular();
        CancelFormPO.isCancelFormPopUpAvailable();
        browser.sleep(2000);
        CancelFormPO.clickCheckBoxForCancel();
        CancelFormPO.clickSubmitButton();

        CancelFormPO.clickYesButton();
        browser.sleep(4000);
        CancelFormPO.isSuccessConfirmationMessage();
        CancelFormPO.clickCloseButton();
    });
      
});