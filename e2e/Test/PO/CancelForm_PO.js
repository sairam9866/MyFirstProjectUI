var CancelFormPO = function(){

    var CancelFormPopUp             =       element(by.xpath("//*[@class='cdk-overlay-pane']"));
    var CancelFutureTransactionsText=       element(by.xpath("//*[contains(text(),'Cancel Future Records')]"));
    var FromZipCodeText             =       element(by.xpath("//span[contains(text(),'From (Zip Code)')]"));
    var ToZipCodeText               =       element(by.xpath("//span[contains(text(),'To (Zip Code)')]"));
    var CountryCode                 =       element.all(by.xpath("//span[contains(text(),'Country Code')][@ref='eText']")).get(1);
    var SubmitButton                =       element(by.xpath("//span[contains(text(),'Submit')]"));
    var ResetButton                 =       element(by.xpath("//span[contains(text(),'Reset')]"));
    var CancelButton                =       element.all(by.xpath("//button[@class='mat-raised-button mat-primary']/span[contains(text(),'Cancel')]")).get(0);
    var checkbox                    =       element(by.xpath("//div[@ref='eCellWrapper']//span[@class='ag-icon ag-icon-checkbox-unchecked']"));
    var YesButton                   =       element(by.xpath("//span[contains(text(),'Yes')]"));
    var successConfirmationMessage  =       element.all(by.xpath("//article[@ng-reflect-ng-style='[object Object]']/p")).get(0);
    var closeButton                 =       element(by.xpath("//span[contains(text(),'Close')]"));
    var pagination                  =       element.all(by.xpath("//span[@ref='eSummaryPanel']")).get(1);
    var paginationArrow             =       element.all(by.xpath("//span[@class='ag-paging-page-summary-panel']")).get(1);


    this.isCancelFormPopUpAvailable = function() {
        return CancelFormPopUp.isPresent();
    };
    this.isCancelFutureTransactionTextAvailable = function() {
        return CancelFutureTransactionsText.isDisplayed();
    };
    this.isFromZipCodeTextAvailable = function() {
        return FromZipCodeText.isDisplayed();
    }
    this.isToZipCodeTextAvailable = function() {
        return ToZipCodeText.isDisplayed();
    };
    this.isSubmitButtonAvailable = function() {
        return SubmitButton.isDisplayed();
    }
    this.isResetButtonAvailable = function() {
        return ResetButton.isDisplayed();
    };

    this.isCancelButtonAvailable = function() {
        return CancelButton.isDisplayed();
    };

    this.clickCancelButton = function() {
        CancelButton.click();
       };

    this.clickSubmitButton = function() {
        SubmitButton.click();
    };

    this.isCheckBoxAvailable = function() {
        return checkbox.isDisplayed();
    };

    this.clickCheckBoxForCancel = function() {
        checkbox.click();
    };

    this.clickYesButton = function() {
        YesButton.click();
    };

    this.isSuccessConfirmationMessage = function() {
        return successConfirmationMessage.isDisplayed();
    };

    this.clickCloseButton = function() {
        closeButton.click();
        };

    this.isCountryCodeAvailable = function() {
        return CountryCode.isDisplayed();
    };

    this.isPaginationAvailable = function() {
        return pagination.isDisplayed();
    };

    this.isPaginationArrowAvailable = function() {
        return paginationArrow.isDisplayed();
    };
    
};

module.exports = new CancelFormPO();