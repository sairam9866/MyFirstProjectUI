var DeleteFormPO = function() {

    var DeleteFromPopup         =   element(by.xpath("//div[@class='cdk-overlay-pane border-color']"));
    var WarningText             =   element(by.xpath("//mat-icon[contains(text(),'warning')]"));
    var CautionText             =   element(by.xpath("//div[contains(text(),'Caution')]"));
    var DeleteFormTextPopUp     =   element(by.xpath("//div[contains(text(),'Deleting Zip Associations')]"));
    var NetworkDropDown         =   element(by.xpath("//*[@formcontrolname='network']//div[@class='mat-select-value']"));
    var ZipFrom                 =   element(by.xpath("//input[@formcontrolname='zipFrom']"));
    var ZipTo                   =   element(by.xpath("//input[@formcontrolname='zipTo']"));
    var EffectiveDateCalander   =   element(by.xpath("//*[@formcontrolname='date']"));
    var CalenderIcon            =   element(by.xpath("//button[@aria-label='Open calendar']"));
    var CalenderDialog          =   element(by.xpath("//div[@class='mat-calendar-controls']"));
    var CalanderTable           =     element(by.xpath("//table[@class='mat-calendar-table']"));
    var CurrentDateSelect       =   element(by.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted'][@tabindex='0']/div"));
    var Hours                   =   element(by.xpath("//*[@formcontrolname='hours']"));
    var Minutes                 =   element(by.xpath("//*[@formcontrolname='minutes']"));
    var TimeZoneDropDown        =   element(by.xpath("//*[@formcontrolname='timeZone']//div[@class='mat-select-value']"));
    var SubmitButton            =   element(by.xpath("//button[@class='mat-raised-button mat-warn']/span[contains(text(),'Submit')]"));
    var ResetButton             =   element(by.xpath("//button[@class='mat-raised-button mat-accent']/span[contains(text(),'Reset')]"));
    var CancelButton            =   element(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]"));
    var FirstOptionNetworkDropDown  =   element.all(by.xpath("//span[@class='mat-option-text']")).get(0);
    var FirstOptionTimeZone     =   element.all(by.xpath("//*[@class='mat-option-text']")).get(0);
    var SubmitButtonEnable      =   element(by.xpath("//button[@class='mat-raised-button mat-warn'][@ng-reflect-disabled='false']"));
    var SecondOptionNetworkDropDown =   element.all(by.xpath("//span[@class='mat-option-text']")).get(1);
    var ThirdOptionNetworkDropDown  =   element.all(by.xpath("//span[@class='mat-option-text']")).get(2);
    var FourthOptionNetworkDropDown =   element.all(by.xpath("//span[@class='mat-option-text']")).get(3);
    var FiftheOptionNetworkDropDown =   element.all(by.xpath("//span[@class='mat-option-text']")).get(4);
    var ResetButtonModify           =   element(by.xpath("//button[@class='mat-raised-button mat-accent']/span[contains(text(),'Reset')]"));
    var MandatoryFieldNetwork       =   element.all(by.xpath("//span[contains(text(),'*')]")).get(0);
    var MandatoryFieldZipFrom       =   element.all(by.xpath("//span[contains(text(),'*')]")).get(1);
    var MandatoryFieldEffectiveDate =   element.all(by.xpath("//span[contains(text(),'*')]")).get(2);
    var MandatoryFieldHours         =   element.all(by.xpath("//span[contains(text(),'*')]")).get(3);
    var MandatoryFieldMinutes       =   element.all(by.xpath("//span[contains(text(),'*')]")).get(4);
    var MandatoryFieldTimeZone      =   element.all(by.xpath("//span[contains(text(),'*')]")).get(5);
    var SecondOptionTimeZone        =   element.all(by.xpath("//*[@class='mat-option-text']")).get(1);
    var ThirdOptionTimeZone         =   element.all(by.xpath("//*[@class='mat-option-text']")).get(2);
    var FourthOptionTimeZone        =   element.all(by.xpath("//*[@class='mat-option-text']")).get(3);
    var FifthOptionTimeZone         =   element.all(by.xpath("//*[@class='mat-option-text']")).get(4);
    var SixthOptiontimeZone         =   element.all(by.xpath("//*[@class='mat-option-text']")).get(5);
    var SeventhOptionTimeZone       =   element.all(by.xpath("//*[@class='mat-option-text']")).get(6);
    var EigthOptionTimeZone         =   element.all(by.xpath("//*[@class='mat-option-text']")).get(7);
    var NinthOptionTimeZone         =   element.all(by.xpath("//*[@class='mat-option-text']")).get(8);
    var TenthOptionTimeZone         =   element.all(by.xpath("//*[@class='mat-option-text']")).get(9);
    var EleventhOptionTimeZone      =   element.all(by.xpath("//*[@class='mat-option-text']")).get(10);
    var TwelthOptionTimeZone        =   element.all(by.xpath("//*[@class='mat-option-text']")).get(11);
    var ThirteenthOptionTimeZone    =   element.all(by.xpath("//*[@class='mat-option-text']")).get(12);
    var FourteenOptionTimeZone      =   element.all(by.xpath("//*[@class='mat-option-text']")).get(13);
    var FifteenthOptionTimeZone     =   element.all(by.xpath("//*[@class='mat-option-text']")).get(14);
    var HoursDataSelect             =   element.all(by.xpath("//span[@class='mat-option-text']")).get(1);
    var MinutesDataSelect           =   element.all(by.xpath("//span[@class='mat-option-text']")).get(2);
    var ConformationDetailsDialog   =   element(by.xpath("//app-dialog-delete[@class='ng-star-inserted']//section"));
    var DetailsNetwork              =   element(by.xpath("//td[contains(text(),'Network:')]"));
    var DetailsZipFrom              =   element(by.xpath("//td[contains(text(),'Zip From:')]"));
    var DetailsZipTo                =   element(by.xpath(" //td[contains(text(),'Zip To:')]"));
    var DetailsEffectiveDate        =   element(by.xpath("//td[contains(text(),'Effective Date:')]"));
    var DetailsTimeZone             =   element(by.xpath("//td[contains(text(),'Time Zone:')]"));
    var EditButton                  =   element(by.xpath("//*[contains(text(),'Edit')]"));
    var YesButton                   =   element(by.xpath("//*[contains(text(),'Yes')]"));
    var GetTextDetailsFormNetwork   =   element(by.xpath("//*[@class='ng-star-inserted']//tr[1]/td[2]"));
    var GetTextDetailsFormZipFrom   =   element(by.xpath("//*[@class='ng-star-inserted']//tr[2]/td[2]"));
    var GetTextDetailsFormZipTo     =   element(by.xpath("//*[@class='ng-star-inserted']//tr[3]/td[2]"));
    var CancelButtonDetailDialog    =   element.all(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]")).get(1);
    var YesButton                       =   element(by.xpath("//span[contains(text(),'Yes')]"));
    var CalenderContent                 =   element(by.xpath("//div[@class='mat-calendar-content']"))
    var successConfirmationMessage      =   element.all(by.xpath("//article[@ng-reflect-ng-style='[object Object]']/p")).get(0);
    var ConfirmationMessage             =   element.all(by.xpath("//article[@ng-reflect-ng-style='[object Object]']/p")).get(1);
    var closeButton                     =   element(by.xpath("//span[contains(text(),'Close')]"));
    var HintZipFrom = element.all(by.xpath("//mat-icon[@mattooltip='Hint : 12345 | A0A | A1A2A0']")).get(0);
    var HintZipTo = element.all(by.xpath("//mat-icon[@mattooltip='Hint : 12345 | A0A | A1A2A0']")).get(1);
    
    this.isDeleteFormPopUpAvailable = function() {
        return DeleteFromPopup.isDisplayed();
    };
    this.isWarningTextAvailable = function() {
        return WarningText.isDisplayed();
    };
    this.isCautionTextAvailable =  function() {
        return CautionText.isDisplayed();
    };
    this.isDeleteFormTextAvailable = function()  {
        return DeleteFormTextPopUp.isDisplayed();
    };
    this.isNetworkDropDownAvailable = function()  {
        return NetworkDropDown.isDisplayed();
    };
    this.isZipFromAvailable = function()  {
        return  ZipFrom.isDisplayed();
    };
    this.isZipToAvailable = function()  {
        return ZipTo.isDisplayed();
    }
    this.isEffectiveDateCalanderAvailable = function()  {
        return EffectiveDateCalander.isDisplayed();
    };
    this.isCalanderIconAvailable = function()  {
        return CalenderIcon.isDisplayed();
    };
    this.isCalanderDialogAvailable  = function()  {
        return CalenderDialog.isDisplayed();
    };
    this.isCalanderTableAvailable = function()  {
        return CalanderTable.isDisplayed();
    };
    this.isCurrentDateSelectAvailable = function()  {
        return CurrentDateSelect.isDisplayed(); 
    };
    this.isHoursAvailable = function()  {
        return  Hours.isDisplayed();
    };
    this.isMinutesAvailable = function()  {
        return  Minutes.isDisplayed();
    };
    this.isTimeZoneDropDownAvailable = function()  {
        return  TimeZoneDropDown.isDisplayed();
    };
    this.isSubmitButtonAvailable = function()  {
        return SubmitButton.isDisplayed();
    }
    this.isResetButtonAvailable = function()  {
        return  ResetButton.isDisplayed();
    };
    this.isCancelButtonAvailable =  function()  {
        return  CancelButton.isDisplayed();
    };
    this.selectFirstOptionNetworkDropDown = function()  {
        NetworkDropDown.click();
        FirstOptionNetworkDropDown.click();
    };
    this.selectFirstOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        FirstOptionTimeZone.click();
    };
    this.isSubmitButtonEnable  =  function()  {
        return SubmitButtonEnable.isDisplayed();
    };
    this.selectSecondOptionNetworkDropDown = function() {
        NetworkDropDown.click();
        SecondOptionNetworkDropDown.click();
    };
    this.selectThirdOptionNetworkDropDown = function()  {
        NetworkDropDown.click();
        ThirdOptionNetworkDropDown.click();
    };
    this.selectFourthOptionNetworkDropDown = function()  {
        NetworkDropDown.click();
        FourthOptionNetworkDropDown.click();
    };
    this.selectFiftheOptionNetworkDropDown = function()  {
        NetworkDropDown.click();
        FiftheOptionNetworkDropDown.click();
    };
    this.clickResetButton = function()  {
        ResetButtonModify.click();
    };
    this.MandatoryFields = function()  {
        MandatoryFieldNetwork.isDisplayed();
        MandatoryFieldZipFrom.isDisplayed();
        MandatoryFieldEffectiveDate.isDisplayed();
        MandatoryFieldHours.isDisplayed();
        MandatoryFieldMinutes.isDisplayed();
        MandatoryFieldTimeZone.isDisplayed();
    };
    this.selectSecondOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        SecondOptionTimeZone.click();
    };
    this.selectThirdOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        ThirdOptionTimeZone.click();
    };
    this.selectFourthOptionTimeZone  = function()  {
        TimeZoneDropDown.click();
        FourthOptionTimeZone.click();
    };
    this.selectFifthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        FifthOptionTimeZone.click();
    };
    this.selectSixthOptionTimeZone = function()  {
        TimeZoneDropDown.clicK();
        SixthOptiontimeZone.click();
    };
    this.selectSeventhOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        SeventhOptionTimeZone.click();
    };
    this.selectEigthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        EigthOptionTimeZone.click();
    };
    this.selectNinthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        NinthOptionTimeZone.click();
    };
    this.selectTenthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        TenthOptionTimeZone.click();
    };
    this.selectEleventhOptionTimeZone = function()  {

        TimeZoneDropDown.click();
        browser.sleep(2000);
        EleventhOptionTimeZone.click();
    };
    this.selectTwelthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        TwelthOptionTimeZone.click();
    };
    this.selectThirteenthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        browser.sleep(2000)
        ThirteenthOptionTimeZone.click();
    };
    this.selectFourteenthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        FourteenOptionTimeZone.click();
    };
    this.FifteenthOptionTimeZone = function()  {
        TimeZoneDropDown.click();
        FifteenthOptionTimeZone.click();
    };
    this.enterHourField = function(value) {
    
        Hours.click();
        HoursDataSelect.click();
    
    };
    this.enterMinutesField = function(value) {
    
        Minutes.click();
        MinutesDataSelect.click();
    
    };
    this.isConformationDetailsDialogAvailable = function()  {
        return  ConformationDetailsDialog.isDisplayed();
    };
    this.isEnteredDataAvailableConfirmationDialog = function()  {

        DetailsNetwork.isDisplayed();
        DetailsZipFrom.isDisplayed();
        DetailsZipTo.isDisplayed();
        DetailsEffectiveDate.isDisplayed();
        DetailsTimeZone.isDisplayed();
    };
    this.isEditButtonAvailable = function()  {
        return EditButton.isDisplayed();
    };
    this.clickEditButton = function() {
          EditButton.click();
    };
    this.isYesButtonAvailable = function()  {
        return YesButton.isDisplayed();
    };
    this.clicKYesButton = function()  {
            YesButton.click();
    };
    this.getTextNetworkDetailDialog = function()  {
        return GetTextDetailsFormNetwork.getText();
    };
    this.getTextZipcodeFromDetailDialog = function() {
        return GetTextDetailsFormZipFrom.getText();
    };
    this.getTextZipToDetailDialog = function() {
        return GetTextDetailsFormZipTo.getText();
    };
    this.clickCancelButtonButtonDetailDialog = function() {
        CancelButtonDetailDialog.click();
    };
    this.enterZipCodeFrom = function(value) {
        
        browser.sleep(2000);
        ZipFrom.click();
        ZipFrom.clear();
        ZipFrom.sendKeys(value);
    };

    this.enterZipCodeTo = function(value) {
        
        ZipTo.click();
        ZipTo.clear();
        ZipTo.sendKeys(value);
    };

    this.enterEffectiveDate = function() {
    
        CalenderIcon.click();
        browser.waitForAngular();
        CurrentDateSelect.click();
    
    };
    
    this.enterHourField = function(value) {
        
        Hours.click();
        HoursDataSelect.click();
    
    };
    
    this.enterMinuteField = function(value) {
        
        Minutes.click();
        MinutesDataSelect.click();
    
    }; 
    this.clickCancelButton =   function()  {
        CancelButton.click();
    };

    this.clickCalenderIcon = function() {
        CalenderIcon.click();
    };
    this.isCalenderDisplayed = function() {
        return CalenderDialog.isPresent();
    };
    this.clickSubmitButton = function() {
        SubmitButton.click();
    };

    this.mandatoryFields = function() {
    
        MandatoryFieldNetwork.isDisplayed();
        MandatoryFieldZipfrom.isDisplayed();
        //MandatoryFieldZipTo.isDisplayed();
        MandatoryFieldEffectiveDate.isDisplayed();
        MandatoryFieldHour.isDisplayed();
        MandatoryFieldMin.isDisplayed();
        MandatoryFieldTimezone.isDisplayed();
        
    };

    this.selectNetworkfromDropdownSecondOption = function() {
            NetworkDropDown.click();
            SecondOptionNetworkDropDown.click();
    };

    this.selectNetworkfromDropdownThirdOption = function() {
            NetworkDropDown.click();
            ThirdOptionNetworkDropDown.click();
    };

    this.ConfirmationDetailsDialogisDisplayed = function() {
            return ConfirmationDetailsDialog.isDisplayed();

    };

    this.selectTimeZoneOptionsUSsamoa = function() {
        TimezoneDropdown.click();
        TimeZoneOptionsUSsamoa.click();
    };

    this.selectTimeZoneOptionsUSHawaii = function() {
        TimezoneDropdown.click();
        TimeZoneOptionsUSHawaii.click();

    };

    this.selectTimeZoneOptionsAlaska = function() {
        TimezoneDropdown.click();
        TimeZoneOptionsUSAlaska.click();
    };

    this.selectTimeZoneOptionsUsPacfic = function() {
        TimezoneDropdown.click();
        TimeZoneOptionsUSPacific.click();

    };

    this.selectTimeZoneOptionsUSCentral = function() {

        TimeZoneDropDown.click();
        TimeZoneOptionsUSCentral.click();
    };

    this.selectTimeZoneOptionsCanadaCentral = function() {
        
        TimeZoneDropDown.click();
        ThirdOptionTimeZone.click();
    };

    this.selectTimeZoneOptionsCanadaSaskatchewan = function() {

        TimeZoneDropDown.click();
        TimeZoneOptionsCanadaSaskatchewan.click();
    };

    this.selectTimezoneOptionsCanadaEastern = function() {

        TimeZoneDropDown.click();
        TimeZoneOptionsCanadaEastern.click();
    };

    this.selectTimeZoneOptionsCanadaAtlantic = function() {

        TimeZoneDropDown.click();
        TimeZoneOptionsCanadaAtlantic.click();
    };

    this.isEnteredDataAvailableConfirmationDialog = function() {

        DetailsNetwork.isDisplayed();
        DetailsZipFrom.isDisplayed();
        DetailsZipTo.isDisplayed();
        DetailsEffectiveDate.isDisplayed();
        DetailsTimeZone.isDisplayed();
    };

    this.EditButtonisAvailable = function() {
        return EditButton.isDisplayed();
    };
    this.clickEditButton = function() {
        return EditButton.click();
    };

    this.getTextNetworkDetailDialog = function() {
        return GetTextDetailsFormNetwork.getText();
    };

    this.getTextZipCodeFromDetailDialog = function() {
        return GetTextDetailsFormZipFrom.getText();
    };

    this.getTextZipCodeToDetailDialog = function() {
        return GetTextDetailsFormZipTo.getText();
    };

    this.isclickCancelButtonDetailDialogAvailable = function() {
        return CancelButtonDetailDialog.isDisplayed();
    };

    this.clickCancelButtonDetailDialog = function() {
        CancelButtonDetailDialog.click();
    };

    this.isYesButtonAvailable = function() {
        return YesButton.isDisplayed();
    };

    this.clickYesButton = function() {
        YesButton.click();
    };

    this.isCalanderContentAvailable = function() {
        return CalenderContent.isDisplayed();
    }; 
    
    this.isSuccessConfirmationMessage = function() {
    return successConfirmationMessage.isDisplayed();
    };

    this.isConfirmationMessage = function() {
    return ConfirmationMessage.isDisplayed();
    };

    this.clickCloseButton = function() {
    closeButton.click();
    };

    this.isHintZipFromAvailable = function() {
        return HintZipFrom.isDisplayed();
    };

      this.isHintZipToAvailable = function() {
        return HintZipTo.isDisplayed();
    };

      this.getTextHintZipFrom = function() {
        return HintZipFrom.getText();
    };

      this.getTextHintZipTo = function() {
        return HintZipTo.getText();
    };


};

module.exports = new DeleteFormPO();