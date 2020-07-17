var HomePagePO = function () {

   var modifybutton = element(by.xpath("//button[contains(text(),'Modify Zip Associations')]"));
   var addButton = element(by.xpath("//button[contains(text(),'Add New Zip Association')]"));
   var deleteButton = element(by.xpath("//button[contains(text(),'Delete Zip Associations')]"));
   var cancelButton = element(by.xpath("//button[contains(text(),'Cancel Future Records')]"));
   var ExportCSVButton = element(by.xpath("//span[contains(text(),'Download Data as CSV')]"));
   var searchTextBox = element(by.xpath("//input[@id='mat-input-0']"));
   var searchButton = element(by.xpath("//div[@class='mat-form-field-flex']//mat-icon"));
   var Network = element(by.xpath("//*[contains(text(),'Network')][@ref='eText']"));
   var countrycode = element(by.xpath("//*[contains(text(),'Country Code')]"));
   var Postalcode = element(by.xpath("//*[contains(text(),'Zip / Postal Code')]"));
   var stateProvince = element(by.xpath("//*[contains(text(),'State / Province')]"));
   var destination = element(by.xpath("//span[contains(text(),'Destination')][@ref='eText']"));
   var effectiveDate = element(by.xpath("//*[contains(text(),'Effective Date')]"));
   var CreatedBy = element(by.xpath("//*[contains(text(),'Created By')]"));
   var CreatedDate = element(by.xpath("//*[contains(text(),'Creation Date')]"));
   var Processed = element(by.xpath("//*[contains(text(),'Processed')]"));
   var ghostText = element.all(by.xpath("//*[@class='mat-form-field-infix']/span/label")).get(0);
   var ziptodestcurrent = element(by.xpath("//button[@routerlink='/current-records']"));
   var ziptodestHistory = element(by.xpath("//button[@routerlink='/historical-records']"));
   var pagesList = element(by.xpath("//*[@ref='eSummaryPanel']"));
   var paginationList = element(by.xpath("//*[@class='ag-paging-page-summary-panel']"));
   var GridPropertiesText  =  element(by.xpath("//h3[contains(text(),'Grid Properties')]"));
   var LogoutButton  =  element(by.xpath("//span[contains(text(),'Logout')]"));
   var UserGuideText =  element(by.xpath("//span[contains(text(),'User Guide')]"));
   var UnifiedSortingText  =  element(by.xpath("//div[@class='brand'][contains(text(),'Unified Sortation System')]"));
   var WelcomeText      =  element(by.xpath("//div[@class='user ng-star-inserted'][contains(text(),'Welcome')]"));

   var currentRecords =element(by.xpath("//*[@class='breadcrum']"));
   var FutureRecordsButton=element(by.xpath("//button[@routerlink='/future-records']"));
   var FutureRecords =element(by.xpath("//*[@class='breadcrum']"));
   var HistoryRecords =element(by.xpath("//*[@class='breadcrum']"));

   var ManageRecordsButton =element(by.xpath("//button[@ng-reflect-menu='[object Object]']/span"));
   var ManageRecordsPopup =element(by.xpath("//*[@role='menu']"));

   var settingsButton = element(by.xpath("//span[contains(text(),'Settings')]"));
   var showToggleBarGrid = element(by.xpath("//div[@class='mat-slide-toggle-bar']"));
   var closeButtonGrid = element(by.xpath("//span[contains(text(),'Close')]"));

   var fedexLogo = element(by.xpath("//*[@alt='fedex logo']"));

      this.isGridPropertiesTextAvailable  =  function(){
         return GridPropertiesText.isDisplayed();
      };
      this.clickModifyButton = function() {
        modifybutton.click();
      };
   
      this.clickAddButton = function() {
           addButton.click();
     };
   
     this.isModifyButtonAvaiable = function() {
      return modifybutton.isDisplayed();
     };
   
      this.isAddButtonAvailable = function() {
       return addButton.isDisplayed();
      };
   
      this.isDeleteButtonAvaiable = function() {
       return deleteButton.isDisplayed();
      };
   
      this.isExportCSVButtonAvaiable = function() {
       return ExportCSVButton.isDisplayed();
      };
   
      this.isSearchTextBoxAvailable = function() {
       return searchTextBox.isDisplayed();
      };
   
      this.isSearchButtonAvailable = function() {
       return searchButton.isDisplayed();
      };
   
      this.clickSearchTextBox = function() {
         searchTextBox.click();
        };
   
      this.sendSearchKeyword = function(value) {
   
      searchTextBox.sendKeys(value);
      searchButton.click();
         
      };
   
      this.isNetworkHeaderAvailable = function() {
         return Network.isDisplayed();
      };
   
      this.isCountryCodeHeaderAvailable = function() {
         return countrycode.isDisplayed();
      };
   
      this.isPostalCodeHeaderAvailable = function() {
         return Postalcode.isDisplayed();
      };
   
      this.isStateProvinceHeaderAvailable = function() {
         return stateProvince.isDisplayed();
      };
   
      this.isDestinationHeaderAvailable = function() {
         return destination.isDisplayed();
      };
   
      this.isEffectiveDateHeaderAvailable = function() {
         return effectiveDate.isDisplayed();
      };
   
      this.isCreatedByHeaderAvailable = function() {
         return CreatedBy.isDisplayed();
      };
   
      this.isCreatedDateHeaderAvailable = function() {
         return CreatedDate.isDisplayed();
      };
   
      this.isProcessedHeaderAvailable = function() {
         return Processed.isDisplayed();
      };
   
      this.isGhostTextinSearchBarAvailable = function() {
         return ghostText.isDisplayed();
      };
   
      this.isZipToDestCurrentTabAvailable = function() {
         return ziptodestcurrent.isDisplayed();
      };
   
      this.isZipToDestHistoryTabAvailable = function() {
         return ziptodestHistory.isDisplayed();
      };
   
      this.isPageListAvailable = function() {
         return pagesList.isDisplayed();
      };
   
      this.isPaginationListAvailable = function() {
         return paginationList.isDisplayed();
      };
      this.isLogoutButtonAvailable  =  function(){
         return LogoutButton.isDisplayed();
      };
      this.isUserGuideTextAvailable =  function(){
         return UserGuideText.isDisplayed();
      };
      this.isUnifiedSortingTextAvailable  =  function(){
         return UnifiedSortingText.isDisplayed();
      };
      this.isWelcomeMsgAvailable =  function(){
         return WelcomeText.isDisplayed();
      };
   
      this.clearSearchTextBox = function() {
         searchTextBox.clear();
      };

      this.clickCancelButton = function() {
         cancelButton.click();
      };

      this.clickQuickAccess = function() {
         quickAccess.click();
      };

      this.clickDeleteButton = function() {
         deleteButton.click();
      };

      this.isCancelButtonAvailable = function() {
         return cancelButton.isDisplayed();
      };

      this.clickLogoutButton  =function(){
         LogoutButton.click();
      };

      this.isCurrnetRecordBreadcrumAvailable = function() {
        return currentRecords.isDisplayed();
     };

     this.getTextCurrentRecordBreadcrum = function() {

      return currentRecords.getText();
    };

    this.isFutureRecordBreadcrumAvailable = function() {
      return FutureRecords.isDisplayed();
   };

   this.getTextFutureRecordBreadcrum = function() {

    return FutureRecords.getText();
  };

  this.clickFutureRecordsTab = function() {
    FutureRecordsButton.click();
  }; 

  this.clickHistoricalRecordsTab = function() {
    ziptodestHistory.click();
  };

  this.isHistoryRecordBreadcrumAvailable = function() {
    return HistoryRecords.isDisplayed();
 };

 this.getTextHistoryRecordBreadcrum = function() {

  return HistoryRecords.getText();
};

this.isManageRecordsButtonAvailable  =  function(){
  return ManageRecordsButton.isDisplayed();
};

this.clickManageRecordsButton = function() {
  ManageRecordsButton.click();
};

this.isManageRecordsPopupAvailable  =  function(){
  return ManageRecordsPopup.isDisplayed();
};

this.clickCurrentRecords = function() {

  return currentRecords.click();
};

this.clickSettingsButton = function(){
   settingsButton.click();
};

this.clickToggleBarGrid = function(){
   showToggleBarGrid.click();
};

this.clickCloseButtonGrid = function(){
   closeButtonGrid.click();
};

this.isShowToggleBarGridAvailable = function(){
   return showToggleBarGrid.isDisplayed();
};

this.isHomepageDisplayed = function(){
   return fedexLogo.isDisplayed();
};

this.clickCurrentRecordsTab = function() {
   ziptodestcurrent.click();
};
   
};
   
   module.exports = new HomePagePO();