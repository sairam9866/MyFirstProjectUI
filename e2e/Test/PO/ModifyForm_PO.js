var ModifyFormPO = function () {

  var testdata = require("../test-data/testdata.js");
  var data = testdata.Homepage.modifyForm;

    var modifyFormPopup = element(by.xpath("//div[@class='cdk-overlay-pane']"));
    var ModifyZipText = element(by.xpath("//div[contains(text(),'Modify Zip Associations')]"));
    var networkDropdown = element(by.xpath("//*[@formcontrolname='network']//div[@class='mat-select-value']"));
    var zipfromTextBox = element(by.xpath("//*[@formcontrolname='zipFrom']"));
    var zipToTextBox = element(by.xpath("//*[@formcontrolname='zipTo']"));
    var destinationTextBox = element(by.xpath("//*[@formcontrolname='destinationTerminal']"));
    var effectiveDateCalender = element(by.xpath("//*[@formcontrolname='date']"));
    var HourText = element(by.xpath("//*[@formcontrolname='hours']"));
    var MinuteText = element(by.xpath("//*[@formcontrolname='minutes']"));
    var cancelButtonModify = element(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]"));
    var ResetButtonModify = element(by.xpath("//button[@class='mat-raised-button mat-accent']/span[contains(text(),'Reset')]"));
    var SubmitButtonModify = element(by.xpath("//button[@class='mat-raised-button mat-warn']/span[contains(text(),'Submit')]"));
    var firstOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(0);
    var submitButtonEnable = element(by.xpath("//button[@class='mat-raised-button mat-warn']"));
    var submitButtonDisabled = element.all(by.xpath("//button[@class='mat-raised-button mat-warn'][@disabled='true']")).get(1);
    var CalenderIcon = element(by.xpath("//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted']"));
    var CalenderDialog = element(by.xpath("//div[@class='mat-calendar-controls']"));
    var TimezoneDropdown = element.all(by.xpath("//*[@class='mat-form-field-infix']//div[@class='mat-select-value']")).get(3);
    var TimeZoneOptionsCanadaPacific = element.all(by.xpath("//*[@class='mat-option-text']")).get(0);
    var MandatoryFieldNetwork = element.all(by.xpath("//span[contains(text(),'*')]")).get(0);
    var MandatoryFieldZipfrom = element.all(by.xpath("//span[contains(text(),'*')]")).get(1);
    var MandatoryFieldDestination = element.all(by.xpath("//span[contains(text(),'*')]")).get(2);
    var MandatoryFieldEffectiveDate = element.all(by.xpath("//span[contains(text(),'*')]")).get(3);
    var MandatoryFieldHour = element.all(by.xpath("//span[contains(text(),'*')]")).get(4);
    var MandatoryFieldMin = element.all(by.xpath("//span[contains(text(),'*')]")).get(5);
    var MandatoryFieldTimezone = element.all(by.xpath("//span[contains(text(),'*')]")).get(6);
    var secondOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(1);
    var thirdOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(2);
    var FourthOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(3);
    var TimeZoneOptionsCanadaCentral = element.all(by.xpath("//*[@class='mat-option-text']")).get(3);
    var TimeZoneOptionsCanadaSaskatchewan = element.all(by.xpath("//*[@class='mat-option-text']")).get(5);
    var TimeZoneOptionsCanadaEastern = element.all(by.xpath("//*[@class='mat-option-text']")).get(6);
    var TimeZoneOptionsCanadaAtlantic = element.all(by.xpath("//*[@class='mat-option-text']")).get(7);
    var TimeZoneOptionsUSsamoa = element.all(by.xpath("//*[@class='mat-option-text']")).get(9);
    var TimeZoneOptionsUSHawaii = element.all(by.xpath("//*[@class='mat-option-text']")).get(11);
    var TimeZoneOptionsUSAlaska = element.all(by.xpath("//*[@class='mat-option-text']")).get(12);
    var TimeZoneOptionsUSPacific = element.all(by.xpath("//*[@class='mat-option-text']")).get(13);
    var TimeZoneOptionsUSCentral = element.all(by.xpath("//*[@class='mat-option-text']")).get(17);
    var currentDateSelect = element(by.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted'][@tabindex='0']/div"));
    var hourDataSelect = element.all(by.xpath("//span[@class='mat-option-text']")).get(4);
    var minuteDataSelect = element.all(by.xpath("//span[@class='mat-option-text']")).get(4);
    var ConfirmationDetailsDialog = element(by.xpath("//div[@class='cdk-overlay-pane']"));
    var DetailsNetwork = element(by.xpath("//td[contains(text(),'Network:')]"));
    var DetailsZipFrom = element(by.xpath("//td[contains(text(),'Zip From:')]"));
    var DetailsZipTo = element(by.xpath("//td[contains(text(),'Zip To:')]"));
    var DetailsDestination = element(by.xpath("//td[contains(text(),'Destination:')]"));
    var DetailsEffectiveDate = element(by.xpath("//td[contains(text(),'Effective Date:')]"));
    var DetailsTimezone = element(by.xpath("//td[contains(text(),'Time Zone:')]"));
    var EditButton = element(by.xpath("//*[contains(text(),'Edit')]"));
    var getTextDetailFormNetwork = element(by.xpath("//*[@class='ng-star-inserted']//tr[1]/td[2]"));
    var getTextDetailFormZipFrom = element(by.xpath("//*[@class='ng-star-inserted']//tr[2]/td[2]"));
    var getTextDetailFormZipTo = element(by.xpath("//*[@class='ng-star-inserted']//tr[3]/td[2]")); 
    var getTextDetailFormDestination = element(by.xpath("//*[@class='ng-star-inserted']//tr[4]/td[2]"));
    var cancelButtonDetailDialog = element.all(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]")).get(1);
    var HintZipFrom = element.all(by.xpath("//mat-icon[@mattooltip='Hint : 12345 | A0A | A1A2A0']")).get(0);
    var HintZipTo = element.all(by.xpath("//mat-icon[@mattooltip='Hint : 12345 | A0A | A1A2A0']")).get(1);
    var HintDestination = element(by.xpath("//mat-icon[@mattooltip='Hint : 1 | 01 | 123 | 1234 | 0001']"));
  


       this.isModifyFormPopupAvailable = function() {
        return modifyFormPopup.isDisplayed();
       };

       this.isModifyZipTextAvailable = function() {
        return ModifyZipText.isDisplayed();
       };

       this.isNetworkDropdownAvailable = function() {
        return networkDropdown.isDisplayed();
       };

       this.isZipFromTextBoxAvailable = function() {
        return zipfromTextBox.isDisplayed();
       };

       this.isZipToTextBoxAvailable = function() {
        return zipToTextBox.isDisplayed();
       };

       this.isDestinationTextBoxAvailable = function() {
        return destinationTextBox.isDisplayed();
       };

       this.isEffectiveDateCalenderAvailable = function() {
        return effectiveDateCalender.isDisplayed();
       };

       this.isHourTextAvailable = function() {
        return HourText.isDisplayed();
       };

       this.isMinuteTextAvailable = function() {
        return MinuteText.isDisplayed();
       };

       this.isCancelButtonAvailable = function() {
         return cancelButtonModify.isDisplayed();
        };

        this.isResetButtonAvailable = function() {
         return ResetButtonModify.isDisplayed();
        };

        this.isSubmitButtonAvailable = function() {
         return SubmitButtonModify.isDisplayed();
        };

        this.clickCancelButton = function() {
         cancelButtonModify.click();
        };

        this.isModifyFormPopupNotAvailable = function() {
         return modifyFormPopup.isDisplayed();
        };

        this.selectNetworkfromDropdownFirstOption = function() {
         
          networkDropdown.click();
          firstOptionNetworkDropdown.click();

        };

        this.enterZipCodeFrom = function(value) {
           zipfromTextBox.clear();
           zipfromTextBox.sendKeys(value);
        };

        this.enterZipCodeTo = function(value) {
          zipToTextBox.clear();
          zipToTextBox.sendKeys(value);
        };

        this.enterDestination = function(value) {
          destinationTextBox.clear();
          destinationTextBox.sendKeys(value);
        };

        this.enterEffectiveDate = function() {
    
          CalenderIcon.click();
          browser.waitForAngular();
          currentDateSelect.click();
      
        };

        this.enterHourField = function(value) {
    
          HourText.click();
          hourDataSelect.click();
      
        };
      
        this.enterMinuteField = function(value) {
          
          MinuteText.click();
          minuteDataSelect.click();
      
        };

        this.isSubmitButtonEnabled = function() {
          return submitButtonEnable.isDisplayed();
         };

         this.isSubmitButtonDisabled = function() {
          return submitButtonDisabled.isDisplayed();
         };

         this.clickCalenderIcon = function() {
          CalenderIcon.click();
         };

         this.isCalenderIconAvailable = function() {
          return CalenderIcon.isDisplayed();
         };

         this.isCalenderDisplayed = function() {
          return CalenderDialog.isDisplayed();
         };

         this.closeCalenderDialog = function() {
          CalenderIcon.click();
         };

         this.clickResetButton = function() {
          ResetButtonModify.click();
          
         };

         this.isTimezoneAvailable = function() {
          return TimezoneDropdown.isDisplayed();
         };

         this.selectTimezoneCanadaPacific = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsCanadaPacific.click();

        };

        this.clickSubmitButton = function() {
          SubmitButtonModify.click();
        };

        this.verifyMandatoryFieldZipFrom = function() {

          var colourZipFrom = zipfromTextBox.getCssValue("caret-color");
          var expectedColor = data.color;
          expect(colourZipFrom).toEqual(expectedColor);

        };

        this.mandatoryFields = function() {

          MandatoryFieldNetwork.isDisplayed();
          MandatoryFieldZipfrom.isDisplayed();
          MandatoryFieldDestination.isDisplayed();
          MandatoryFieldEffectiveDate.isDisplayed();
          MandatoryFieldHour.isDisplayed();
          MandatoryFieldMin.isDisplayed();
          MandatoryFieldTimezone.isDisplayed();
          
        };

        this.selectNetworkfromDropdownSecondOption = function() {
         
          networkDropdown.click();
          secondOptionNetworkDropdown.click();

        };

        this.selectNetworkfromDropdownThirdOption = function() {
         
          networkDropdown.click();
          thirdOptionNetworkDropdown.click();

        };

        this.selectNetworkfromDropdownFourthOption = function() {
         
          networkDropdown.click();
          FourthOptionNetworkDropdown.click();

        };

        this.selectTimezoneCanadaCentral = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsCanadaCentral.click();

        };

        this.selectTimezoneCanadaSaskatchewan = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsCanadaSaskatchewan.click();

        };

        this.selectTimezoneCanadaEastern = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsCanadaEastern.click();

        };

        this.selectTimezoneCanadaAtlantic = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsCanadaAtlantic.click();

        };

        this.selectTimezoneUSsamoa = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsUSsamoa.click();

        };

        this.selectTimezoneUSHawaii = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsUSHawaii.click();

        };

        this.selectTimezoneUSAlaska = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsUSAlaska.click();

        };

        this.selectTimezoneUSPacific = function() {
         
          TimezoneDropdown.click();
          TimeZoneOptionsUSPacific.click();

        };

        this.selectTimezoneUSCentral = function() {
         
          TimezoneDropdown.click();
          browser.sleep(2000);
          TimeZoneOptionsUSCentral.click();

        };

        this.isConfirmationDetailDialogDisplayed = function() {
          return ConfirmationDetailsDialog.isDisplayed();
         };

         this.isEnteredDataAvailableConfirmationDialog = function() {

          DetailsNetwork.isDisplayed();
          DetailsZipFrom.isDisplayed();
          DetailsZipTo.isDisplayed();
          DetailsDestination.isDisplayed();
          DetailsEffectiveDate.isDisplayed();
          DetailsTimezone.isDisplayed();
        };

        this.isEditButtonAvailable = function() {
          return EditButton.isDisplayed();
         };

         this.clickEditButton = function() {
          EditButton.click();
        };

        this.getTextNetworkDetailDialog = function() {
          return getTextDetailFormNetwork.getText();
         };

         this.getTextDestinationDetailDialog = function() {
          return getTextDetailFormDestination.getText();
         };

         this.getTextZipFromDetailDialog = function() {
          return getTextDetailFormZipFrom.getText();
         };

         this.getTextZipToDetailDialog = function() {
          return getTextDetailFormZipTo.getText();
         };
      
         this.clickCancelButtonButtonDetailDialog = function() {
          cancelButtonDetailDialog.click();
         };

         this.isHintZipFromAvailable = function() {
          return HintZipFrom.isDisplayed();
        };

        this.isHintZipToAvailable = function() {
          return HintZipTo.isDisplayed();
        };
  
        this.isHintDestinationAvailable = function() {
          return HintDestination.isDisplayed();
        };
  
        this.getTextHintZipFrom = function() {
          return HintZipFrom.getText();
        };

        this.getTextHintZipTo = function() {
          return HintZipTo.getText();
        };
  
        this.getTextHintDestination = function() {
          return HintDestination.getText();
        };


    
    };
    
    module.exports = new ModifyFormPO();