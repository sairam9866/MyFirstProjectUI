var UserGuidePO = function(){

    var userGuideButton=element(by.xpath("//button[@routerlink='/user-guide']"));
    var FAQsText =  element(by.xpath("//*[@fxlayout='row']/h3"));
    var searchText = element(by.xpath("//*[@class='mat-form-field-infix']/input"));
    var searchButton = element(by.xpath("//mat-icon[contains(text(),'search')]"));
    var breadcrum = element(by.xpath("//*[@class='breadcrum']"));
    var ghostText = element(by.xpath("//mat-label[@class='ng-star-inserted']"));
    var FAQList = element (by.xpath("//*[@class='mat-accordion']"));
    var firstFAQ = element.all(by.xpath("//*[@class='mat-accordion']//mat-expansion-panel-header")).get(0);
    var firstFAQAnswer = element.all(by.xpath("//*[@class='answer']")).get(0);

    this.isUserGuideButtonAvailable = function() {
        return userGuideButton.isDisplayed();
    };

    this.clickUserGuideButton = function(){
        userGuideButton.click();
     };

     this.isFAQTextAvailable = function() {
        return FAQsText.isDisplayed();
    };

    this.isSearchTextAvailable = function() {
        return searchText.isDisplayed();
    };

    this.isSearchButtonAvailable = function() {
        return searchButton.isDisplayed();
    };

    this.isBreadcrumAvailable = function() {
        return breadcrum.isDisplayed();
    };

    this.isGhostTextAvailable = function() {
        return ghostText.isDisplayed();
    };

    this.sendSearchKeyword = function(value) {
        searchText.sendKeys(value);
    };

    this.clearSearchTextBox = function() {
        searchText.clear();
    };

    this.isFAQListAvailable = function() {
        return FAQList.isDisplayed();
    };

    this.clickonFirstFAQ = function() {
        firstFAQ.click();
    };

    this.isFAQAnswerAvailable = function() {
        return firstFAQAnswer.isPresent();
    };
    
    
};

module.exports = new UserGuidePO();