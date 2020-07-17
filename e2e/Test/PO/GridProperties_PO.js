var GridFormPO =    function(){

    var settingsTab                 =   element(by.xpath("//span[contains(text(),'Settings')]"));
    var gridPropertiesCheckBox      =   element(by.xpath("//div[@class='mat-slide-toggle-bar']"));
    var closeButton                 =   element(by.xpath("//span[contains(text(),'Close')]"));
    var gridPropertiesText          =   element(by.xpath("//*[contains(text(),'Grid Properties')]"));
    var adjustColumnsText           =   element(by.xpath("//header[contains(text(),'Adjust Columns')]"));
    var showColumnsText             =   element(by.xpath("//header[contains(text(),'Show Columns')]"));
    var fitInTableRadioButton       =   element(by.xpath("//div[contains(text(),'Fit in Table')]"));
    var autoFitRadioButton          =   element(by.xpath("//div[contains(text(),'Auto Fit')]"));
    var networkCheckBox             =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(0);
    var countryCodeCheckBox         =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(1);
    var zipCodeCheckBox             =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(2);
    var stateProvienceCheckBox      =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(3);
    var destinationCheckBox         =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(4);
    var creationDateCheckBox        =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(5);
    var effectiveDateCheckBox       =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(6);
    var createdByCheckBox           =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(7);
    var processedCheckBox           =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(8);
    var currentCheckBox             =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(9);
    var cancelCheckBox              =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(10);
    var cancelUserCheckBox          =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(11);
    var transactionTypeCheckBox     =   element.all(by.xpath("//*[@class='mat-checkbox-inner-container']")).get(12);
    
    
    var firstOptionTenRecordsPerPage            =   element.all(by.xpath("//span[@class='mat-option-text']")).get(0);
    var secondOptionTwentyRecordsPerPage        =   element.all(by.xpath("//span[@class='mat-option-text']")).get(1);
    var thirdOptionFiftyRecordsPerPage          =   element.all(by.xpath("//span[@class='mat-option-text']")).get(2);
    var fourthOptionHunderedRecordsPerPage      =   element.all(by.xpath("//span[@class='mat-option-text']")).get(3);
    var fifthOptionFiveHunderedRecordsPerPage   =   element.all(by.xpath("//span[@class='mat-option-text']")).get(4);
    var sixthOptionThousandRecordsPerPage       =   element.all(by.xpath("//span[@class='mat-option-text']")).get(5);
    
    
    var createdByTextHeader         =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(7);
    var currentTextHeader           =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(8);
    var processedTextHeader         =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(9);
    var cancelTextHeader            =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(10);
    var cancelTimeStampHeader       =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(11);
    var canceluserHeader            =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(7);
    var transactionTextHeader       =   element.all(by.xpath("//span[@class='ag-header-cell-text'][contains(text(),'')]")).get(7);
    var getTextdetailsLegend        =   element.all(by.xpath("//header[contains(text(),'')]")).get(2);
    var getTextDetailsLegendAdd =   element(by.xpath("//*[@style='background: rgb(150, 247, 147);']"));
    var getTestDetailsLegendModify   =   element(by.xpath("//*[@style='background: rgb(229, 247, 147);']"));
    var getTextDetailsLegenedUnProcessed=   element(by.xpath("//*[@style='background: rgb(247, 220, 147);']"));
    var getTextDetailsLegenedDelete  =   element(by.xpath("//*[@style='background: rgb(247, 147, 147);']"));
    var getTextDetailsNetwork       =    element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(0);
    var getTextDetailsCountryCode   =    element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(1);
    var getTextDetailsZipCode       =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(2);
    var getTextDetailsStateProvience    =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(3);
    var getTextDetailsDestination   =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(4);
    var getTextDetailsCreationDate  =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(5);
    var getTextDetailsEffectiveDate =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(6);
    var getTextDetailsCreatedBy     =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(7);
    var getTextDetailsCurrent       =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(9);
    var getTextDetailsProcessed     =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(8);
    var getTextDetailsCancel        =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(10);     
    var getTextDetailsCancelUser    =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(11);
    var getTextDetailsTransactionType   =   element.all(by.xpath("//span[@class='mat-checkbox-label']")).get(12);
    var recordPerPageDropDown   =   element(by.xpath("//div[@class='mat-select-value']"));

    this.clickSettingsButton =  function() {
        settingsTab.click();
    };
    this.clickGridPropertiesCheckBox = function() {
        gridPropertiesCheckBox.click();
    };
    this.clickCloseButton = function()  {
        closeButton.click();
    };
    this.isGridPropertiesTextAvailable  =    function() {
        return gridPropertiesText.isDisplayed();
    };
    this.isAdjustColumnsTextAvailable   =   function()  {
        return adjustColumnsText.isDisplayed();
    };
    this.isShowCloumnsTextAvailable   =   function()    {
        return showColumnsText.isDisplayed();
    };
    this.isFitInTableRadioButtonAvailable   =   function()  {
        return fitInTableRadioButton.isDisplayed();
    };
    this.isAutoFitRadioButtonAvailable  =   function()  {
        return autoFitRadioButton.isDisplayed();
    };
    this.isNetworkCheckBoxAvailable =   function(){
        return networkCheckBox.isDisplayed();
    };
    this.isCountryCodeCheckBoxAvailable =   function(){
        return countryCodeCheckBox.isDisplayed();
    };
    this.isZipPostalCodeCheckBoxAvailable   =   function(){
        return zipCodeCheckBox.isDisplayed();
    };
    this.isStateProvienceCheckBoxAvailable  =   function(){
        return stateProvienceCheckBox.isDisplayed();
    };
    this.isDestinationCheckBoxAvailable =   function(){
        return destinationCheckBox.isDisplayed();
    };
    this.isCreationDateCheckBoxAvailable    =   function(){
        return creationDateCheckBox.isDisplayed();
    };
    this.isEffectiveDateCheckBoxAvailable   =   function(){
        return effectiveDateCheckBox.isDisplayed();
    };
    this.isCreatedByCheckBoxAvailable   =   function(){
        return createdByCheckBox.isDisplayed();
    };       
    this.isCurrentCheckBoxAvailable =   function(){
        return currentCheckBox.isDisplayed();
    };
    this.isProcessedCheckBoxAvailable   =   function(){
        return processedCheckBox.isDisplayed();
    };
    this.isCancelCheckBoxAvailable  =   function(){
        return cancelCheckBox.isDisplayed();
    };
    this.isCancelTimeStampCheckBoxAvailable =   function(){
        return cancelTimeStampCheckBox.isDisplayed();
    };
    this.isCancelUserCheckBoxAvailable  =   function(){
        return cancelUserCheckBox.isDisplayed();
    };
    this.isTransacationTypeCheckBoxAvailable    =   function(){
        return transactionTypeCheckBox.isDisplayed();
    };
    this.isRecordPerPageDropDownAvailable    =   function()  {
        return recordPerPageDropDown.isDisplayed();
    };
    this.isFirstOptionRecordPerPageAvailable    =   function()  {
        return firstOptionTenRecordsPerPage.isDisplayed();
    };
    this.isSecondOptionRecordPerPageAvailable   =   function()  {
        return secondOptionTwentyRecordsPerPage.isDisplayed();
    };
    this.isThirdOptionRecordPerPageAvailable    =   function()  {
        return thirdOptionFiftyRecordsPerPage.isDisplayed();
    };
    this.isFourthOptionRecordPerPageAvailable   =   function()  {
        return fourthOptionHunderedRecordsPerPage.isDisplayed();
    };
    this.isFifthOptionRecordPerPageAvailable    =   function()  {
        return fifthOptionFiveHunderedRecordsPerPage.isDisplayed();
    };
    this.isCreatedByTextHeaderAvailable =   function(){
        return createdByTextHeader.isPresent();
    };
    this.isCurrentTextHeaderAvailable   =   function(){
        return currentTextHeader.isPresent();
    };
    this.isProcessedTextHeaderAvailable =   function(){
        return processedTextHeader.isPresent();
    };
    this.isCancelTextHeaderAvailable    =   function(){
        return cancelTextHeader.isPresent();
    };
    this.isCancelTimeStampHeaderAvailable   =   function(){
        return cancelTimeStampHeader.isPresent();
    };
    this.isCancelUserHeaderAvailable    =   function(){
        return canceluserHeader.isPresent();
    };
    this.isTransactionTextHeaderAvailable   =   function(){
        return transactionTextHeader.isPresent();
    };
    this.clickFitInTableRadioButton =   function()  {
        fitInTableRadioButton.click();
    };
    this.clickAutoFitRadioButton    =   function()  {
        autoFitRadioButton.click();
    };
    this.clickCreatedByCheckBox =   function(){
        createdByCheckBox.click();
    };
    this.clickCurrentCheckBox   =   function(){
        currentCheckBox.click();
    };
    this.clickProcessedCheckBox =   function(){
        processedCheckBox.click();
    };
    this.clickCancelCheckBox    =   function(){
        cancelCheckBox.click();
    };
    this.clickCancelTimeStampCheckBOx   =   function(){
        cancelTimeStampCheckBox.click();
    };  
    this.clickCancelUserCheckBox    =   function(){
        cancelUserCheckBox.click();
    };
    this.clickTransactionTypeCheckBox   =   function(){
        transactionTypeCheckBox.click();
    };

    this.clickTenRecordsPerPage =   function(){

        recordPerPageDropDown.click();
        firstOptionTenRecordsPerPage.click();
    };
    this.clickTwentyrecordsPerPage  =   function(){

        recordPerPageDropDown.click();
        secondOptionTwentyRecordsPerPage.click();
    };
    this.clickFiftyRecordsPerPage   =   function(){
        
        recordPerPageDropDown.click();
        thirdOptionFiftyRecordsPerPage.click();
    };
    this.clickHunderedrecordsPerPage    =   function(){

        recordPerPageDropDown.click();
        fourthOptionHunderedRecordsPerPage.click();
    };

    this.clickFiveHundereRecordsPerPage =   function(){

        recordPerPageDropDown.click();
        fifthOptionFiveHunderedRecordsPerPage.click();
    };

    this.clickThousandRedcordsPerPage   =   function()  {

        recordPerPageDropDown.click();
        sixthOptionThousandRecordsPerPage.click();
    };
    this.isgetTextDetailsLegendDialog    =   function(){
        return getTextdetailsLegend.getText()
    };
    this.isgetTextDetailsLegendAddDialog =   function(){
        return getTextDetailsLegendAdd.getText();
    };
    this.isgetTextDetailsLegendModifyDialog  =   function(){
        return getTestDetailsLegendModify.getText()
    };
    this.isgetTextDetailsLegendUnProcessedDialog =   function(){
        return getTextDetailsLegenedUnProcessed.getText()
    };
    this.isgetTextDetailsLegendDelete   =   function(){
        return getTextDetailsLegenedDelete.getText()
    };
    this.isgetTextDetailsNetworkDialog   =   function(){
        return getTextDetailsNetwork.getText()
    };
    this.isgetTextDetailsCountryCodeDialog   =   function(){
        return getTextDetailsCountryCode.getText()
    };
    this.isgetTextDetailsZipCodeDialog   =   function(){
        return getTextDetailsZipCode.getText()
    };
    this.isgetTextDetailsStateProvienceDialog    =   function(){
        return getTextDetailsStateProvience.getText()
    };
    this.isgetTextDetailsDestinationDialog   =   function(){
        return getTextDetailsDestination.getText()
    };
    this.isgetTextDetailscreationDateDialog =   function(){
        return getTextDetailsCreationDate.getText()
    };
    this.isgetTextDetailsEffectiveDateDialog =   function(){
        return getTextDetailsEffectiveDate.getText()
    };
    this.isgetTextDetailsCreatedByDialog    =   function(){
        return getTextDetailsCreatedBy.getText()
    };
    this.isgetTextDetailsCurrentDailog = function(){
        return getTextDetailsCurrent.getText()
    };
    this.isgetTestDetailsProcessedDialog =   function(){
        return getTextDetailsProcessed.getText()
    };
    this.isgetTextDetailsCancelDialog   =    function(){
        return getTextDetailsCancel.getText()
    };
   
    this.isgetTextDetailsCancelUserDialog    =   function(){
        return getTextDetailsCancelUser.getText()
    };
    this.isgetTextDetailsTransactionTypeDialog   =   function(){
        return getTextDetailsTransactionType.getText()
    };
     
};
module.exports = new GridFormPO();

