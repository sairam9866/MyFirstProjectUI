var HomePagePOFile = require("../PO/Homepage_PO.js");
var DeleteFormPO = require("../PO/DeleteForm_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.deleteForm;

describe ("DeleteForm Scenario:", function() {

    beforeEach(function() {
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();

        HomePagePOFile.isManageRecordsButtonAvailable();
        HomePagePOFile.clickManageRecordsButton();

        HomePagePOFile.isDeleteButtonAvaiable();
        HomePagePOFile.clickDeleteButton();
        browser.waitForAngular();
        DeleteFormPO.isDeleteFormPopUpAvailable();
    });

    afterEach(function() {
        
    });

    /* Delete 1 Scenario*/
    it("verify all fields in Delete Form Popup", function() {

        DeleteFormPO.isWarningTextAvailable();
        DeleteFormPO.isCautionTextAvailable();
        DeleteFormPO.isDeleteFormTextAvailable();   
        
        DeleteFormPO.isNetworkDropDownAvailable();
        DeleteFormPO.isZipFromAvailable();
        DeleteFormPO.isZipToAvailable();

        DeleteFormPO.isEffectiveDateCalanderAvailable();
        DeleteFormPO.isHoursAvailable();
        DeleteFormPO.isMinutesAvailable();

        DeleteFormPO.isTimeZoneDropDownAvailable();
        DeleteFormPO.isCancelButtonAvailable();
        DeleteFormPO.isResetButtonAvailable();
        DeleteFormPO.isSubmitButtonAvailable();

        DeleteFormPO.clickCancelButton();

    });

    /* Delete 2 Scenario*/
    it("Verify User able to enter values in Delete Form for network FHD", function() {
  
        DeleteFormPO.selectFirstOptionNetworkDropDown();  
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();

    });

    /* Delete 3 Scenario*/
    it("Verify User able to enter values in Delete Form for FHDL", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();

    });

    /* Delete 4 Scenario*/
    it("Verify User able to enter Values in Delete Form For FXSP", function() {

        DeleteFormPO.selectThirdOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectThirdOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 5 Scenario*/
    it("Verify User able to enter values in Delete Form For FXG", function(){

        DeleteFormPO.selectFourthOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectThirdOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 6 Scenario*/
    it("Verify user able to enter values in Delete Form For FXF", function(){ 

        DeleteFormPO.selectFiftheOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectThirdOptionTimeZone();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 7 Scenario*/
    it("verify user is able to click calender icon in Delete Form", function() {

        DeleteFormPO.isCalanderIconAvailable();
        DeleteFormPO.clickCalenderIcon();
        DeleteFormPO.isCalenderDisplayed();
        browser.waitForAngular();
    });

     /* Delete 8 Scenario*/
     it("Verify User able to enter values in Delete Form and click Reset button to reset values", function() {

        DeleteFormPO.selectFirstOptionNetworkDropDown();  
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFourthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickResetButton();

    });

    /* Delete 9 Scenario*/
    it("Verify mandatory field is available in Delete Form", function() {

        DeleteFormPO.MandatoryFields();
       
     });

     /* Delete 10 Scenario*/
    it("Verify User able to select time zones for Canada Region - FirstOption", function() {

        DeleteFormPO.selectFirstOptionNetworkDropDown();  
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();

    });

    /* Delete 11 Scenario*/
    it("Verify User able to select time zones for Canada Region - SecondOption", function() {

        DeleteFormPO.selectSecondOptionNetworkDropDown();  
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();

    });

    /* Delete 12 Scenario*/
    it("Verify User able to select time zones for Canada Region - ThirdOption", function() {

        DeleteFormPO.selectThirdOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectThirdOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 13 Scenario*/
    it("Verify User able to select time zone for Canada Region - FourthOption", function() {

        DeleteFormPO.selectFirstOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFourthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /*Delete 14 Scenario*/
    it("Verify User able to select time zone for Canada Region - FifthOption", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFifthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 15 Scenario*/
    it("Verify User able to select time zone for US Region - TenthOption", function(){

        DeleteFormPO.selectFirstOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectTenthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();

    });

    /* Delete 16 Scenario*/
    it("Verify User able to select time zone for US Region - EleventhOption",function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectEleventhOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 17 Scenario*/
    it("Verify User able to select time zone for US Region - twelthOption",function(){

        DeleteFormPO.selectThirdOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectTwelthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 18 Scenario*/
    it("Verify User able to select time Zone for US Region - thirteenOption",function(){

        DeleteFormPO.selectFirstOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectThirteenthOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.isSubmitButtonEnable();
    });

    /* Delete 19 Scenario*/
    it("Verify User able to Submit The values After Entering Details in Page",function(){

        DeleteFormPO.selectFourthOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickSubmitButton();
        browser.waitForAngular();
        DeleteFormPO.isConformationDetailsDialogAvailable();


    });

     /* Delete 20 Scenario*/
     it("Verify all fields are available in Confirmation Detail Dialog", function() {

        DeleteFormPO.selectFourthOptionNetworkDropDown();  
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickSubmitButton();
        browser.waitForAngular();
        DeleteFormPO.isConformationDetailsDialogAvailable();
        
        DeleteFormPO.isEnteredDataAvailableConfirmationDialog();
       
    });

     /* Delete 21 Scenario*/
     it("Verify user is able to click edit button in Confirmation Details Dialog", function() {

        DeleteFormPO.selectFiftheOptionNetworkDropDown();  
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickSubmitButton();
        browser.waitForAngular();
        DeleteFormPO.isConformationDetailsDialogAvailable();

        DeleteFormPO.isEditButtonAvailable();
        DeleteFormPO.clickEditButton();
        browser.waitForAngular();
        DeleteFormPO.isDeleteFormPopUpAvailable();
       
    });

    

    /*Delete 22 Scenario */
    it("Verify User is Able to Edit Values After Clicking Edit Button",function(){

        DeleteFormPO.selectFirstOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.sleep(2000);

        DeleteFormPO.clickSubmitButton();
        browser.waitForAngular();
        DeleteFormPO.isConformationDetailsDialogAvailable();

        DeleteFormPO.isEditButtonAvailable();
        DeleteFormPO.clickEditButton();
        browser.waitForAngular();
        DeleteFormPO.isDeleteFormPopUpAvailable();

        /* User Should Edit Values */

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.sleep(2000);
        //DeleteFormPO.enterZipCodeFrom(data.ZipCodeFromEdit);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeToEdit);
        browser.waitForAngular();
        DeleteFormPO.clickSubmitButton();
        browser.waitForAngular();
        DeleteFormPO.isConformationDetailsDialogAvailable();

        /* Validate the Data Entered in Edit Valus */

        expect(DeleteFormPO.getTextNetworkDetailDialog()).toEqual(data.NetworkEdit);
        expect(DeleteFormPO.getTextZipCodeFromDetailDialog()).toEqual(data.ZipCodeFromEdit);
        expect(DeleteFormPO.getTextZipCodeToDetailDialog()).toEqual(data.ZipCodeToEdit);

        DeleteFormPO.clickCancelButtonDetailDialog();
        browser.waitForAngular();

    });


    
    // Negative Test Cases

    /*Delete Negative Scenario -1*/
    it("Verify Submit button disable if user enters No data in form", function(){

        browser.waitForAngular();
        DeleteFormPO.clickSubmitButton();
    });

    /* Delete Negative Scenario -2 */
    it("Verify Submit Button disable If user Skips Network", function(){

        DeleteFormPO.isNetworkDropDownAvailable();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();
    });

    /* Delete Negative Scenario-3*/
    it("Verify Submit Button disable If User Skips ZipFrom", function(){

        DeleteFormPO.selectFirstOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();

    });

    /* Delete Negative Scenario -4*/
    it("Verify Submit Button disable If User Skips ZipTo", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        browser.waitForAngular();

        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        browser.waitForAngular();

        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();
    });

    /* Delete Negative Scenario -5*/
    it("Verify Submit Button disable If User Skips EffectiveDate", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);

        DeleteFormPO.clickCancelButton();
    });

    /* Delete Negative Scenario -6 */
    it("Verify Submit Button disable If User Skips HoursFiled", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectFirstOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();

    });

    /* Delete Negative Scenario -7 */
    it("Verify Submit button disable if user skips minutesfiels", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();
    });

    /* Delete Negative Scenario -8 */
    it("Verify Submit Button disable if user skips TimeZone", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();
        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();

    });

    /* Delete Negative Scenario -9 */
    it("Verify Submit Button disable if user skips entering EffectiveData,Hours,Minutes", function(){

        DeleteFormPO.selectSecondOptionNetworkDropDown();
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);
        browser.waitForAngular();

        DeleteFormPO.selectSecondOptionTimeZone();
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();
    });

    /* Delete Negative Scenario -10 */
    it("Verify Submit Button disable if user skips entering Netwrok,TimeZone", function(){

        DeleteFormPO.enterZipCodeFrom(data.ZipCodeFrom);
        browser.waitForAngular();
        DeleteFormPO.enterZipCodeTo(data.ZipCodeTo);

        DeleteFormPO.enterEffectiveDate();
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.sleep(2000);
        DeleteFormPO.clickCancelButton();
    });

    /* Delete negative Scenario -11 */
    it("Verify Submit Button disable if user skips entering ZipCodeFrom,ZipCodeTo", function(){

        DeleteFormPO.selectFirstOptionNetworkDropDown();
        browser.waitForAngular();

        DeleteFormPO.enterEffectiveDate();
        browser.sleep(2000);
        DeleteFormPO.enterHourField();
        browser.sleep(2000);
        DeleteFormPO.enterMinuteField();
        browser.waitForAngular();

        DeleteFormPO.clickCancelButton();
    });

    /* Delete negative Scenario -11 */
    it("Verify hint button in delete form popup", function(){

        DeleteFormPO.isHintZipFromAvailable();
        expect(DeleteFormPO.getTextHintZipFrom()).toEqual(data.hintIcon);

        DeleteFormPO.isHintZipToAvailable();
        expect(DeleteFormPO.getTextHintZipTo()).toEqual(data.hintIcon);

    });


});

