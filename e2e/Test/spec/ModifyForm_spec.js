var HomePagePOFile = require("../PO/Homepage_PO.js");
var ModifyForm = require("../PO/ModifyForm_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.modifyForm;

describe ("ModifyForm Scenario:", function() {
 
    var originalTimeout;

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();
        browser.sleep(2000);

        HomePagePOFile.isModifyButtonAvaiable();
        HomePagePOFile.clickModifyButton();
        browser.sleep(2000);

    });

    afterEach(function() {
        
    });

    /* Modify 1 Scenario*/
    it("verify all fields in Modify Form Popup", function() {

        ModifyForm.isModifyZipTextAvailable();
        ModifyForm.isNetworkDropdownAvailable();
        ModifyForm.isZipFromTextBoxAvailable();
        ModifyForm.isZipToTextBoxAvailable();
        ModifyForm.isDestinationTextBoxAvailable();
        ModifyForm.isEffectiveDateCalenderAvailable();
        ModifyForm.isHourTextAvailable();
        ModifyForm.isMinuteTextAvailable();
        ModifyForm.isTimezoneAvailable();

        ModifyForm.isCancelButtonAvailable();
        ModifyForm.isResetButtonAvailable();
        ModifyForm.isSubmitButtonAvailable();

        ModifyForm.clickCancelButton();

    });

    /* Modify 2 Scenario*/
    it("Verify User able to enter values in Modify Form for network FHD", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 3 Scenario*/
    it("Verify User able to enter values in Modify Form for network FXF", function() {

        ModifyForm.selectNetworkfromDropdownSecondOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaPacific();
        browser.waitForAngular();
        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 4 Scenario*/
    it("Verify User able to enter values in Modify Form for network FXG", function() {

        ModifyForm.selectNetworkfromDropdownThirdOption();
        browser.waitForAngular();  
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 5 Scenario*/
    it("Verify User able to enter values in Modify Form for network FXH", function() {

        ModifyForm.selectNetworkfromDropdownFourthOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 6 Scenario*/
    it("verify user is able to click calender icon in Modify Form", function() {

        ModifyForm.isCalenderIconAvailable();
        ModifyForm.clickCalenderIcon();
        ModifyForm.isCalenderDisplayed();

    });

    /* Modify 7 Scenario*/
    it("Verify User able to enter values in Modify Form and click Reset button to reset values", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        ModifyForm.clickResetButton();

    });

    /* Modify 8 Scenario*/
    it("Verify mandatory field is available in Modify Form", function() {

        ModifyForm.mandatoryFields();
      
    });

    /* Modify 9 Scenario*/
    it("Verify User able to select time zones for Canada Region - Canada/pacific", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaPacific();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 10 Scenario*/
    it("Verify User able to select time zones for Canada Region - Canada/central", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaCentral();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });
 
     /* Modify 11 Scenario*/
     it("Verify User able to select time zones for Canada Region - Canada/Saskatchewan", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaSaskatchewan();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 12 Scenario*/
    it("Verify User able to select time zones for Canada Region - Canada/Eastern", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaEastern();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 13 Scenario*/
    it("Verify User able to select time zones for Canada Region - Canada/Atlantic", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneCanadaAtlantic();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 14 Scenario*/
    it("Verify User able to select time zones for US Region - US/Samoa", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneUSsamoa();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 15 Scenario*/
    it("Verify User able to select time zones for US Region - US/Hawaii", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneUSHawaii();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 16 Scenario*/
    it("Verify User able to select time zones for US Region - US/Alaska", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneUSAlaska();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 17 Scenario*/
    it("Verify User able to select time zones for US Region - US/Pacific", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneUSPacific();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 18 Scenario*/
    it("Verify User able to select time zones for US Region - US/Cental", function() {   

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneUSCentral();
        browser.waitForAngular();

        ModifyForm.isSubmitButtonEnabled();

    });

    /* Modify 19 Scenario*/
    it("Verify User able to click submit after entering details in Modify form", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(2000);
        ModifyForm.selectTimezoneUSCentral();

        ModifyForm.isSubmitButtonEnabled();
        ModifyForm.clickSubmitButton();
        browser.waitForAngular();
        ModifyForm.isConfirmationDetailDialogDisplayed();
       
       
    });

    /* Modify 20 Scenario*/
    it("Verify user should be edit details after clicking on edit button in Modify Form", function() {

        ModifyForm.selectNetworkfromDropdownFirstOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfrom); 
        ModifyForm.enterZipCodeTo(data.zipto);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destination);
        ModifyForm.enterEffectiveDate();
        ModifyForm.enterHourField();
        browser.sleep(2000);
        ModifyForm.enterMinuteField();
        browser.sleep(3000);
        ModifyForm.selectTimezoneUSPacific();
        browser.waitForAngular();
        ModifyForm.isSubmitButtonEnabled();
        ModifyForm.clickSubmitButton();
        browser.waitForAngular();

        ModifyForm.isConfirmationDetailDialogDisplayed();
        ModifyForm.isEnteredDataAvailableConfirmationDialog();
        ModifyForm.isEditButtonAvailable();
        ModifyForm.clickEditButton();
        browser.waitForAngular();
        ModifyForm.isModifyFormPopupAvailable();    
        
        /* User should edit values */ 

        ModifyForm.selectNetworkfromDropdownThirdOption();  
        browser.waitForAngular();
        ModifyForm.enterZipCodeFrom(data.zipfromEdit); 
        ModifyForm.enterZipCodeTo(data.ziptoEdit);
        browser.waitForAngular();
        ModifyForm.enterDestination(data.destinationEdit);
        browser.waitForAngular();
        ModifyForm.clickSubmitButton();
        browser.waitForAngular();
        ModifyForm.isConfirmationDetailDialogDisplayed();

        /*validate the data enteres is displayed in Detail Dialog*/
        expect(ModifyForm.getTextNetworkDetailDialog()).toEqual(data.networkEdit);
        expect(ModifyForm.getTextZipFromDetailDialog()).toEqual(data.zipfromEdit);
        expect(ModifyForm.getTextZipToDetailDialog()).toEqual(data.ziptoEdit);
        expect(ModifyForm.getTextDestinationDetailDialog()).toEqual(data.destinationEdit);

        ModifyForm.clickCancelButtonButtonDetailDialog();
        browser.waitForAngular();
       
    });

    /* Modify 21 scenario*/
    it("Verify User able to view Hint in ModifyForm popup", function() {

        ModifyForm.isHintZipFromAvailable();
        expect(ModifyForm.getTextHintZipFrom()).toEqual(data.hintIcon);

        ModifyForm.isHintZipToAvailable();
        expect(ModifyForm.getTextHintZipTo()).toEqual(data.hintIcon);

        ModifyForm.isHintDestinationAvailable();
        expect(ModifyForm.getTextHintDestination()).toEqual(data.hintIcon);

    });


});