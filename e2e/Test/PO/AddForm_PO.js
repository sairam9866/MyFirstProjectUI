var AddFormPO = function () {

  var AddFormPopup = element(by.xpath("//div[@class='cdk-overlay-pane']"));
  var AddZipTextinPopup = element(by.xpath("//div[contains(text(),'Add New Zip Association')]"));
  var networkDropdown = element(by.xpath("//*[@formcontrolname='network']//div[@class='mat-select-value']"));
  var zipcode = element(by.xpath("//*[@formcontrolname='zipCode']"));
  var stateorprovince = element(by.xpath("//*[@formcontrolname='state']"));
  var destinationTextBox = element(by.xpath("//*[@formcontrolname='destinationTerminal']"));
  var HourText = element(by.xpath("//*[@formcontrolname='hours']"));
  var MinuteText = element(by.xpath("//*[@formcontrolname='minutes']"));
  var TimezoneDropdown = element(by.xpath("//*[@formcontrolname='timeZone']"));
  var cancelButtonAdd = element(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]"));
  var ResetButtonAdd = element(by.xpath("//button[@class='mat-raised-button mat-accent']/span[contains(text(),'Reset')]"));
  var SubmitButtonAdd = element(by.xpath("//button[@class='mat-raised-button mat-warn']/span[contains(text(),'Submit')]"));
  var firstOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(0);
  var firstOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(0);
  var effectiveDateCalender = element(by.xpath("//*[@formcontrolname='date']"));
  var TimeZoneOptionsCanadaPacific = element.all(by.xpath("//*[@class='mat-option-text']")).get(0);
  var submitButtonEnable = element(by.xpath("//button[@class='mat-raised-button mat-warn'][@ng-reflect-disabled='false']"));
  var secondOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(1);
  var thirdOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(2);
  var FourthOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(3);
  var CalenderIcon = element(by.xpath("//button[@aria-label='Open calendar']"));
  var CalenderDialog = element(by.xpath("//div[@class='mat-calendar-controls']"));
  var ResetButtonModify = element(by.xpath("//button[@class='mat-raised-button mat-accent']/span[contains(text(),'Reset')]"));
  var MandatoryFieldNetwork = element.all(by.xpath("//span[contains(text(),'*')]")).get(0);
  var MandatoryFieldZipfrom = element.all(by.xpath("//span[contains(text(),'*')]")).get(1);
  var MandatoryFieldDestination = element.all(by.xpath("//span[contains(text(),'*')]")).get(2);
  var MandatoryFieldEffectiveDate = element.all(by.xpath("//span[contains(text(),'*')]")).get(3);
  var MandatoryFieldHour = element.all(by.xpath("//span[contains(text(),'*')]")).get(4);
  var MandatoryFieldMin = element.all(by.xpath("//span[contains(text(),'*')]")).get(5);
  var MandatoryFieldTimezone = element.all(by.xpath("//span[contains(text(),'*')]")).get(6);
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
  var hourDataSelect = element.all(by.xpath("//span[@class='mat-option-text']")).get(22);
  var minuteDataSelect = element.all(by.xpath("//span[@class='mat-option-text']")).get(4);
  var ConfirmationDetailsDialog = element(by.xpath("//app-dialog-add[@class='ng-star-inserted']/section")); //*[@role='dialog']
  var DetailsNetwork = element(by.xpath("//td[contains(text(),'Network:')]"));
  var DetailsZipcode = element(by.xpath("//td[contains(text(),'Zip Code:')]"));
  var DetailsState = element(by.xpath("//td[contains(text(),'State / Province:')]"));
  var DetailsCountryCode = element(by.xpath("//td[contains(text(),'Country Code:')]"));
  var DetailsDestination = element(by.xpath("//td[contains(text(),'Destination:')]"));
  var DetailsEffectiveDate = element(by.xpath("//td[contains(text(),'Effective Date:')]"));
  var DetailsTimezone = element(by.xpath("//td[contains(text(),'Time Zone:')]"));
  var EditButton = element(by.xpath("//*[contains(text(),'Edit')]"));
  var stateDropdownPAState = element.all(by.xpath("//span[@class='mat-option-text']")).get(13);
  var getTextDetailFormNetwork = element(by.xpath("//*[@class='ng-star-inserted']//tr[1]/td[2]"));
  var getTextDetailFormZipcode = element(by.xpath("//*[@class='ng-star-inserted']//tr[2]/td[2]"));
  var getTextDetailFormState = element(by.xpath("//*[@class='ng-star-inserted']//tr[3]/td[2]"));
  var getTextDetailFormDestination = element(by.xpath("//*[@class='ng-star-inserted']//tr[6]/td[2]"));
  var cancelButtonDetailDialog = element.all(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]")).get(1);
  var YesButton = element(by.xpath("//span[contains(text(),'Yes')]"));
  var successConfirmationMessage = element.all(by.xpath("//article[@ng-reflect-ng-style='[object Object]']/p")).get(0);
  var ConfirmationMessage = element.all(by.xpath("//article[@ng-reflect-ng-style='[object Object]']/p")).get(1);
  var closeButton = element(by.xpath("//span[contains(text(),'Close')]"));
  var stateDropdownNY = element.all(by.xpath("//span[@class='mat-option-text']")).get(9);
  var SixthOptionNetworkDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(5);

  var HintZipCode = element(by.xpath("//mat-icon[@mattooltip='Hint : 12345 | A0A | A1A2A0']"));
  var HintDestination = element(by.xpath("//mat-icon[@mattooltip='Hint : 1 | 01 | 123 | 1234 | 0001']"));

  var secondOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(1);
  var thirdOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(2);
  var fourthOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(3);
  var fifthOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(4);
  var sixthOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(5);
  var seventhOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(6);
  var eighthOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(7);
  var ninthOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(8);
  var tenthOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(9);
  var eleventhOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(10);
  var twelveOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(11);
  var thirteenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(12);
  var fourteenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(13);
  var fifteenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(14);
  var sixteenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(15);
  var seventeenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(16);
  var eighteenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(17);
  var ninteenOptionStateDropdown = element.all(by.xpath("//span[@class='mat-option-text']")).get(18);

  var submitButtonDisabled = element(by.xpath("//button[@class='mat-raised-button mat-warn'][@ng-reflect-disabled='true']"));


  this.isAddFormPopupAvailable = function() {
    return AddFormPopup.isPresent();
   };

  this.isAddZipTextAvailable = function() {
    return AddZipTextinPopup.isDisplayed();
   };

  this.isNetworkDropdownAvailable = function() {
    return networkDropdown.isDisplayed();
   };

   this.isZiporPostalCodeAvailable = function() {
    return zipcode.isDisplayed();
   };

   this.isStateDropdownAvailable = function() {
    return stateorprovince.isDisplayed();
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

   this.isTimezoneAvailable = function() {
    return TimezoneDropdown.isDisplayed();
   };

   this.isCancelButtonAvailable = function() {
    return cancelButtonAdd.isDisplayed();
   };

   this.isResetButtonAvailable = function() {
    return ResetButtonAdd.isDisplayed();
   };

   this.isSubmitButtonAvailable = function() {
    return SubmitButtonAdd.isDisplayed();
   };

   this.clickCancelButton = function() {
    cancelButtonAdd.click();
   };

   this.selectNetworkfromDropdownFirstOption = function() {
         
    networkDropdown.click();
    firstOptionNetworkDropdown.click();

  };

  this.enterZipCode = function() {

    var min = 10000;
    var max = 99999;
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    zipcode.clear();
    zipcode.sendKeys(value);
  };

  this.selectStateorProvinceFirstOption = function() {
         
    stateorprovince.click();
    firstOptionStateDropdown.click();

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

  this.selectTimezoneCanadaPacific = function() {
         
    TimezoneDropdown.click();
    TimeZoneOptionsCanadaPacific.click();

  };

  this.isSubmitButtonEnabled = function() {
    return submitButtonEnable.isDisplayed();
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

  this.isCalenderIconAvailable = function() {
    return CalenderIcon.isDisplayed();
   };

   this.clickCalenderIcon = function() {
    CalenderIcon.click();
   };

   this.isCalenderDisplayed = function() {
    return CalenderDialog.isPresent();
   };


   this.clickResetButton = function() {
    ResetButtonModify.click();
    
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

  this.selectTimezoneCanadaCentral = function() {
         
    TimezoneDropdown.click();
    browser.sleep(2000);
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
    browser.sleep(2000);
    TimeZoneOptionsUSPacific.click();

  };

  this.selectTimezoneUSCentral = function() {
   
    TimezoneDropdown.click();
    TimeZoneOptionsUSCentral.click();

  };

  this.clickSubmitButton = function() {
    SubmitButtonAdd.click();
    
   };

   this.isConfirmationDetailDialogDisplayed = function() {
    return ConfirmationDetailsDialog.isDisplayed();
   };

   this.isEnteredDataAvailableConfirmationDialog = function() {

      DetailsNetwork.isDisplayed();
      DetailsZipcode.isDisplayed();
      DetailsState.isDisplayed();
      DetailsCountryCode.isDisplayed();
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

   this.selectPAState = function() {
         
    stateorprovince.click();
    stateDropdownPAState.click();

  };

  this.getTextNetworkDetailDialog = function() {
    return getTextDetailFormNetwork.getText();
   };

   this.getTextZipcodeDetailDialog = function() {
    return getTextDetailFormZipcode.getText();
   };

   this.getTextStateDetailDialog = function() {
    return getTextDetailFormState.getText();
   };

   this.getTextDestinationDetailDialog = function() {
    return getTextDetailFormDestination.getText();
   };

   this.clickCancelButtonButtonDetailDialog = function() {
    cancelButtonDetailDialog.click();
   };

   this.clickYesButton = function() {
   YesButton.click();
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

      this.selectStateorProvinceFirstOption = function() {
         
        stateorprovince.click();
        stateDropdownNY.click();
    
      };

      this.enterZipCodeTest = function() {
    
        var min = 10000;
        var max = 99999;
        var value = Math.floor(Math.random() * (max - min + 1)) + min;
    
        zipcode.clear();
        zipcode.sendKeys(value);
      };

      this.selectNetworkfromDropdownFirstOptionTest = function() {
         
        networkDropdown.click();
        element.all(by.css('//span[@class="mat-option-text"]')).then(function(network) {
          for (var i = 0; i < network.length; i++) {
            var RequiredNetwork = 'FXG';  
            if (RequiredNetwork == network.get(i).getText()) { 
              network.get(i).click();
              break;
            }
          }
        });
    
      };
   
      this.selectNetworkfromDropdownSixthOption = function() {
         
        networkDropdown.click();
        SixthOptionNetworkDropdown.click();
    
      };

      this.getTextStateOptionOne = function() {

        return firstOptionStateDropdown.getText();
    
      };

      this.getTextStateOptionTwo = function() {

        return secondOptionStateDropdown.getText();
      };

      this.getTextStateOptionThree = function() {

        return thirdOptionStateDropdown.getText();
      };

      this.getTextStateOptionFour = function() {

        return fourthOptionStateDropdown.getText();
      };

      this.getTextStateOptionFive = function() {

        return fifthOptionStateDropdown.getText();
      };

      this.getTextStateOptionSix = function() {

        return sixthOptionStateDropdown.getText();
      };

      this.getTextStateOptionSeven = function() {

        return seventhOptionStateDropdown.getText();
      };

      this.getTextStateOptionEight = function() {

        return eighthOptionStateDropdown.getText();
      };

      this.getTextStateOptionNine = function() {

        return ninthOptionStateDropdown.getText();
      };

      this.getTextStateOptionTen = function() {

        return tenthOptionStateDropdown.getText();
      };

      this.getTextStateOptionEleven = function() {

        return eleventhOptionStateDropdown.getText();
      };

      this.getTextStateOptionTwelve = function() {

        return twelveOptionStateDropdown.getText();
      };

      this.getTextStateOptionThirteen = function() {

        return thirteenOptionStateDropdown.getText();
      };

      this.getTextStateOptionFourteen = function() {

        return fourteenOptionStateDropdown.getText();
      };

      this.getTextStateOptionFifteen = function() {

        return fifteenOptionStateDropdown.getText();
      };

      this.getTextStateOptionSixteen = function() {

        return sixteenOptionStateDropdown.getText();
      };

      this.getTextStateOptionSeventeen = function() {

        return seventeenOptionStateDropdown.getText();
      };

      this.getTextStateOptionEighteen = function() {

        return eighteenOptionStateDropdown.getText();
      };

      this.getTextStateOptionNinteen = function() {

        return ninteenOptionStateDropdown.getText();
      };

      this.clickStateDropdown = function() {
        stateorprovince.click();
      };

      this.isHintZipCodeAvailable = function() {
        return HintZipCode.isDisplayed();
      };

      this.isHintDestinationAvailable = function() {
        return HintDestination.isDisplayed();
      };

      this.getTextHintZipCode = function() {

        return HintZipCode.getText();
      };

      this.getTextHintDestination = function() {

        return HintDestination.getText();
      };

      this.isSubmitButtonDisabled = function() {
        return submitButtonDisabled.isDisplayed();
       };

       this.enterZipCodeCanada = function(value) {

        zipcode.clear();
        zipcode.sendKeys(value);
      };

      
    
};
    
  module.exports = new AddFormPO();