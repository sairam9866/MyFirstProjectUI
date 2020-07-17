var HomePagePOFile = require("../PO/Homepage_PO.js");
var GridPropertiesPo = require("../PO/GridProperties_PO.js");
var params = browser.params;
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.GridData;

describe("Grid Properties Scenario", function(){

    beforeEach(function(){

        browser.manage().window().maximize();
        browser.get(params.baseUrl);
        browser.waitForAngular();
        
    });

    afterEach(function() {
        
    });

    it("Verify Settings Icon in GridProperties and click on it ", function(){

        browser.sleep(2000);
        GridPropertiesPo.clickSettingsButton();
        browser.sleep(2000);
        GridPropertiesPo.clickGridPropertiesCheckBox();
        browser.sleep(2000);
        GridPropertiesPo.clickCloseButton();
        browser.sleep(2000);
        HomePagePOFile.isGridPropertiesTextAvailable();
    });

    /* GridProperties Scenario - 1 */
    it("Verify All Fields in GridProperties", function(){

        GridPropertiesPo.isGridPropertiesTextAvailable();
        GridPropertiesPo.isAdjustColumnsTextAvailable();
        GridPropertiesPo.isShowCloumnsTextAvailable();
        GridPropertiesPo.isFitInTableRadioButtonAvailable();
        GridPropertiesPo.isAutoFitRadioButtonAvailable();
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


    /* GridProperties Scenario - 2 */
    it("Verify User can Click Radio Buttons", function(){

        browser.sleep(2000);
        GridPropertiesPo.isFitInTableRadioButtonAvailable();
       
        browser.sleep(2000);
        GridPropertiesPo.isAutoFitRadioButtonAvailable();
        browser.sleep(2000);
        GridPropertiesPo.clickAutoFitRadioButton();
          
    });

    /* Grid Properties Scenario - 3 */
    it("Verify All TextDetails Available in GridForm",function(){

        expect(GridPropertiesPo.isgetTextDetailsNetworkDialog()).toEqual(data.networktext);
        expect(GridPropertiesPo.isgetTextDetailsCountryCodeDialog()).toEqual(data.countrycode);
        expect(GridPropertiesPo.isgetTextDetailsZipCodeDialog()).toEqual(data.zipcode);
        expect(GridPropertiesPo.isgetTextDetailsStateProvienceDialog()).toEqual(data.state);
        expect(GridPropertiesPo.isgetTextDetailsDestinationDialog()).toEqual(data.destination);
        expect(GridPropertiesPo.isgetTextDetailscreationDateDialog()).toEqual(data.creationdate);
        expect(GridPropertiesPo.isgetTextDetailsEffectiveDateDialog()).toEqual(data.effectivedate);
        expect(GridPropertiesPo.isgetTextDetailsCreatedByDialog()).toEqual(data.createdby);
        expect(GridPropertiesPo.isgetTextDetailsCurrentDailog()).toEqual(data.current);
        expect(GridPropertiesPo.isgetTestDetailsProcessedDialog()).toEqual(data.processed);
        expect(GridPropertiesPo.isgetTextDetailsCancelDialog()).toEqual(data.cancel);
        expect(GridPropertiesPo.isgetTextDetailsCancelUserDialog()).toEqual(data.CancelUser);
        expect(GridPropertiesPo.isgetTextDetailsTransactionTypeDialog()).toEqual(data.TransactionType);
    });

    /* Grid Properties Scenario - 4 */
    it("Verify Legend Text Details Available in GridForm",function(){

        expect(GridPropertiesPo.isgetTextDetailsLegendDialog()).toEqual(data.LegendTextHeader);
        expect(GridPropertiesPo.isgetTextDetailsLegendAddDialog()).toEqual(data.AddLegend);
        expect(GridPropertiesPo.isgetTextDetailsLegendModifyDialog()).toEqual(data.ModifyLegend);
        expect(GridPropertiesPo.isgetTextDetailsLegendDelete()).toEqual(data.DeleteLegend);
    
    });

    /* Grid Properties Scenario - 5 */
    it("Verify Mandatory Fields Displayed ", function(){

        HomePagePOFile.isNetworkHeaderAvailable();
        HomePagePOFile.isCountryCodeHeaderAvailable();
        HomePagePOFile.isPostalCodeHeaderAvailable();
        HomePagePOFile.isStateProvinceHeaderAvailable();
        HomePagePOFile.isDestinationHeaderAvailable();
        HomePagePOFile.isCreatedDateHeaderAvailable();
        HomePagePOFile.isEffectiveDateHeaderAvailable();

    });


    /* Grid Properties Scenario - 6 */
    it("Verify user can able click CreatedBy CheckBox",function(){

        expect(GridPropertiesPo.isgetTextDetailsCreatedByDialog()).toEqual(data.createdby);
        GridPropertiesPo.clickCreatedByCheckBox();
        GridPropertiesPo.isCreatedByTextHeaderAvailable();
        //browser.sleep(2000);
        browser.waitForAngular();
        GridPropertiesPo.clickCreatedByCheckBox();
    });

    /* Grid Properties Scenario - 7 */
    it("Verify user can ableclick Current CheckBox",function(){

        expect(GridPropertiesPo.isgetTextDetailsCurrentDailog()).toEqual(data.current);
        GridPropertiesPo.clickCurrentCheckBox();
        GridPropertiesPo.isCurrentTextHeaderAvailable();
        //browser.sleep(2000);
        browser.waitForAngular();
        GridPropertiesPo.clickCurrentCheckBox();
    });

    /* Grid Properties Scenario - 8 */
    it("Verify user can able to click Processed CheckBox",function(){

        expect(GridPropertiesPo.isgetTestDetailsProcessedDialog()).toEqual(data.processed);
        GridPropertiesPo.clickProcessedCheckBox();
        GridPropertiesPo.isProcessedTextHeaderAvailable();
        //browser.sleep(2000);
        browser.waitForAngular();
        GridPropertiesPo.clickProcessedCheckBox();
    });

    /* Grid Properties Scenario -  9 */
    it("Verify user can able to click Cancel CheckBox",function(){

        expect(GridPropertiesPo.isgetTextDetailsCancelDialog()).toEqual(data.cancel);
        GridPropertiesPo.clickCancelCheckBox();
        GridPropertiesPo.isCancelTextHeaderAvailable();
        //browser.sleep(2000);
        browser.waitForAngular();
        GridPropertiesPo.clickCancelCheckBox();
    });

    /* Grid Properties Scenario -  10 */
    it("Verify user can able to click CancelUser CheckBox",function(){

        expect(GridPropertiesPo.isgetTextDetailsCancelUserDialog()).toEqual(data.CancelUser);
        GridPropertiesPo.clickCancelUserCheckBox();
        browser.waitForAngular();
        GridPropertiesPo.isCancelUserHeaderAvailable();
        //browser.sleep(2000);
        browser.waitForAngular();
        GridPropertiesPo.clickCancelUserCheckBox();
    });

    /* Grid Properties Scenario -  11 */
    it("Verify user can able to click TransactionType CheckBox",function(){

        expect(GridPropertiesPo.isgetTextDetailsTransactionTypeDialog()).toEqual(data.TransactionType);
        GridPropertiesPo.clickTransactionTypeCheckBox();
        browser.waitForAngular();
        GridPropertiesPo.isTransactionTextHeaderAvailable();
        GridPropertiesPo.clickTransactionTypeCheckBox();
        browser.waitForAngular();
    });

    /* Grid Properties Scenario - 12 */
    it("Verify User can click No of Records Per Page",function(){

       GridPropertiesPo.clickTenRecordsPerPage();
       browser.waitForAngular();

       GridPropertiesPo.clickTwentyrecordsPerPage();
       browser.waitForAngular();

       GridPropertiesPo.clickFiftyRecordsPerPage();
       browser.waitForAngular();

       GridPropertiesPo.clickHunderedrecordsPerPage();
       browser.waitForAngular();

       GridPropertiesPo.clickFiveHundereRecordsPerPage();
       browser.waitForAngular();
       
    });

});