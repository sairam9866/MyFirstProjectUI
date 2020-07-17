var HomePagePOFile = require("../PO/Homepage_PO.js");
var AddFormPO = require("../PO/AddForm_PO.js");
var DeleteFormPO = require("../PO/DeleteForm_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.addForm;

describe ("AddForm Scenario:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();
        
        HomePagePOFile.isAddButtonAvailable();
        HomePagePOFile.clickAddButton();
        browser.waitForAngular();
        AddFormPO.isAddFormPopupAvailable();
        browser.sleep(2000);
    });

    afterEach(function() {
        
    });

    /* Add 1 Scenario*/
    it("verify all fields in Add Form Popup", function() {

        AddFormPO.isAddZipTextAvailable();
        AddFormPO.isNetworkDropdownAvailable();
        AddFormPO.isZiporPostalCodeAvailable();
        AddFormPO.isStateDropdownAvailable();
        AddFormPO.isDestinationTextBoxAvailable();

        AddFormPO.isEffectiveDateCalenderAvailable();
        AddFormPO.isHourTextAvailable();
        AddFormPO.isMinuteTextAvailable();
        browser.waitForAngular();

        AddFormPO.isCancelButtonAvailable();
        AddFormPO.isResetButtonAvailable();
        AddFormPO.isSubmitButtonAvailable();

        AddFormPO.clickCancelButton();
        
    });

    /* Add 2 Scenario*/
    it("Verify User able to enter values in Add Form for network FHD", function() {
  
        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

    });

    /* Add 3 Scenario*/
    it("Verify User able to enter values in Add Form for network FHDL", function() {
 
        AddFormPO.selectNetworkfromDropdownSecondOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();

        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaCentral();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

    });

    /* Add 4 Scenario*/
    it("Verify User able to enter values in Add Form for network FXSP", function() {
   
        AddFormPO.selectNetworkfromDropdownThirdOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaSaskatchewan();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

    });

    /* Add 5 Scenario*/
    it("Verify User able to enter values in Add Form for network FXG", function() {
      
        AddFormPO.selectNetworkfromDropdownFourthOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaEastern();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

    });

    /* Add 6 Scenario*/
    it("Verify User able to enter values in Add Form for network FXGL", function() {
      
        AddFormPO.selectNetworkfromDropdownSixthOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaAtlantic();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

    });

    /* Add 7 Scenario*/
    it("verify user is able to click calender icon in Add Form", function() {

        AddFormPO.isCalenderIconAvailable();
        AddFormPO.clickCalenderIcon();
        AddFormPO.isCalenderDisplayed();
        browser.waitForAngular();
    });

    /* Add 8 Scenario*/
    it("Verify User able to enter values in Add Form and click Reset button to reset values", function() {

        AddFormPO.selectNetworkfromDropdownFourthOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();

        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        AddFormPO.clickResetButton();

    });

     /* Add 9 Scenario*/
     it("Verify mandatory field is available in Add Form", function() {

       AddFormPO.mandatoryFields();
      
    });

    /* Add 10 Scenario*/
    it("Verify User able to select time zones for Canada Region - Canada/pacific", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();
        browser.waitForAngular();  
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(3000);
        AddFormPO.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();

    });

    /* Add 11 Scenario*/
    it("Verify User able to select time zones for US Region - US/Samoa", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneUSsamoa();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();        
    });

    /* Add 12 Scenario*/
    it("Verify User able to select time zones for US Region - US/Hawaii", function() {

        AddFormPO.selectNetworkfromDropdownSecondOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(3000);
        AddFormPO.selectTimezoneUSHawaii();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();        
    });

    /* Add 13 Scenario*/
    it("Verify User able to select time zones for US Region - US/Alaska", function() {

        AddFormPO.selectNetworkfromDropdownThirdOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneUSAlaska();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();        
       
    });

    /* Add 14 Scenario*/
    it("Verify User able to select time zones for US Region - US/Pacific", function() {

        AddFormPO.selectNetworkfromDropdownFourthOption(); 
        browser.waitForAngular(); 
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(3000);
        AddFormPO.selectTimezoneUSPacific();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();       

    });

    /* Add 15 Scenario*/
    it("Verify User able to select time zones for US Region - US/Central", function() {

        AddFormPO.selectNetworkfromDropdownSixthOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneUSCentral();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonEnabled();
       
    });

    /* Add 16 Scenario*/
    it("Verify all fields are available in Confirmation Detail Dialog", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
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
        
        AddFormPO.isEnteredDataAvailableConfirmationDialog();
       
    });

    /* Add 17 Scenario*/
    it("Verify user is able to click edit button in Confirmation Details Dialog", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
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

        AddFormPO.isEditButtonAvailable();
        AddFormPO.clickEditButton();
        AddFormPO.isAddFormPopupAvailable();
       
    });

    /* Add 18 Scenario*/
    it("Verify user should be edit details after clicking on edit button", function() {

        AddFormPO.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.sleep(2000);
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
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

        AddFormPO.isEditButtonAvailable();
        AddFormPO.clickEditButton();
        browser.waitForAngular();
        AddFormPO.isAddFormPopupAvailable();

        /* User should edit values */ 
        AddFormPO.selectNetworkfromDropdownThirdOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectPAState();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destinationEdit);
        browser.waitForAngular();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

        /*validate the data enteres is displayed in Detail Dialog*/
        expect(AddFormPO.getTextNetworkDetailDialog()).toEqual(data.networkEdit);
        expect(AddFormPO.getTextStateDetailDialog()).toEqual(data.stateEdit);
        expect(AddFormPO.getTextDestinationDetailDialog()).toEqual(data.destinationEdit);
        AddFormPO.clickCancelButtonButtonDetailDialog();
        browser.waitForAngular();
      
    });

     /* Add 19 Scenario*/
    it("Verify user should be delete the data which has been added", function() {

        AddFormPO.selectNetworkfromDropdownFourthOption();  
        browser.waitForAngular();
        AddFormPO.enterZipCode();
        browser.sleep(2000);
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        AddFormPO.enterEffectiveDate();
        browser.waitForAngular();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(3000);
        AddFormPO.selectTimezoneCanadaCentral();
        browser.waitForAngular();

        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();
        var zipcode = AddFormPO.getTextZipcodeDetailDialog();

        AddFormPO.clickYesButton();
        browser.sleep(4000);
        AddFormPO.isSuccessConfirmationMessage();
        AddFormPO.isConfirmationMessage();
        AddFormPO.clickCloseButton();
        browser.waitForAngular();

        HomePagePOFile.clickManageRecordsButton();
        HomePagePOFile.clickDeleteButton();
        browser.waitForAngular();
        DeleteFormPO.isDeleteFormPopUpAvailable();

        /*Enter Values to Delete*/
        DeleteFormPO.selectFourthOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(zipcode);
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeTo(zipcode);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(3000);
        DeleteFormPO.selectFourthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickSubmitButton();
        browser.waitForAngular();
        DeleteFormPO.clickYesButton();
        browser.sleep(4000);
        browser.waitForAngular();
        DeleteFormPO.isSuccessConfirmationMessage();
        DeleteFormPO.isConfirmationMessage();
        DeleteFormPO.clickCloseButton();
        browser.waitForAngular();
    });

     /* Add Test 20*/
     it("Verify User able to enter values in Add Form for network FHD", function() {
  
        //AddFormPO.selectNetworkfromDropdownFirstOption();  
        //AddFormPO.selectNetworkfromDropdownFirstOptionTest();
        AddFormPO.enterZipCode();
        browser.waitForAngular();
        AddFormPO.selectStateorProvinceFirstOption();
        browser.waitForAngular();
        AddFormPO.enterDestination(data.destination);
        browser.waitForAngular();
        AddFormPO.enterEffectiveDate();
        AddFormPO.enterHourField();
        browser.sleep(2000);
        AddFormPO.enterMinuteField();
        browser.sleep(2000);
        AddFormPO.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        AddFormPO.isSubmitButtonDisabled();
        AddFormPO.clickSubmitButton();
        browser.waitForAngular();
        AddFormPO.isConfirmationDetailDialogDisplayed();

    });

    /* Add Test 21*/
    it("Verify User able to view Hint in AddForm popup", function() {

        AddFormPO.isHintZipCodeAvailable();
        expect(AddFormPO.getTextHintZipCode()).toEqual(data.hintIcon);

        AddFormPO.isHintDestinationAvailable();
        expect(AddFormPO.getTextHintDestination()).toEqual(data.hintIcon);

    });

});