var HistoricalRecordTabPO = function(){

    var HistoricalRecordsButton=element(by.xpath("//button[@routerlink='/historical-records']"));
    var HistoricalRecordsPage=element(by.xpath("//*[@class='breadcrum']"));
    var LegendSection=element(by.xpath("//*[@class='legend']"));
    var AddLegendSection=element(by.xpath("//p[@class='ng-star-inserted'][@style='background: rgb(150, 247, 147);']"));
    var ModifyLegendSection=element(by.xpath("//p[@class='ng-star-inserted'][@style='background: rgb(229, 247, 147);']"));
    var DeleteLegendSection=element(by.xpath("//p[@class='ng-star-inserted'][@style='background: rgb(247, 147, 147);']"));
    var FooterSection=element(by.xpath("//footer[@fxlayoutalign='center']/div[@class='container']"));
    var FedexCorporationText=element.all(by.xpath("//footer[@fxlayoutalign='center']/div[@class='container']//span")).get(0);
    var VersionText=element.all(by.xpath("//footer[@fxlayoutalign='center']/div[@class='container']//span")).get(1);
    var LegendText=element(by.xpath("//article[@class='legend']/header"));
    var AddTextLegendSection=element.all(by.xpath("//p[@class='ng-star-inserted']")).get(0);
    var ModifyTextLegendSection=element.all(by.xpath("//p[@class='ng-star-inserted']")).get(1);
    var DeleteTextLegendSection=element.all(by.xpath("//p[@class='ng-star-inserted']")).get(2);
    
    this.isHistoricalRecordsTabButtonAvailable = function() {
        return HistoricalRecordsButton.isPresent();
    };

    this.clickHistoricalRecordsTab = function() {
        HistoricalRecordsButton.click();
    };

    this.isHistoricalRecordsTabPageDisplayed = function() {
        return HistoricalRecordsPage.isPresent();
    };

    this.isLegendSectionAvailable = function() {
        return LegendSection.isPresent();
    };

    this.isAddAvailableinLegendSection = function() {
        return AddLegendSection.isPresent();
    };

    this.isModifyAvailableinLegendSection = function() {
        return ModifyLegendSection.isPresent();
    };

    this.isDeleteAvailableinLegendSection = function() {
        return DeleteLegendSection.isPresent();
    };

    this.isFooterSectionAvailable = function() {
        return FooterSection.isPresent();
    };

    this.isFedexCorporationTextAvailable = function() {
        return FedexCorporationText.isPresent();
    };

    this.isVersionTextAvailable = function() {
        return VersionText.isPresent();
    };

    this.getTextofLegend    =   function(){
        return LegendText.getText();
    };

    this.getTextofAddinLegendSection    =   function(){
        return AddTextLegendSection.getText();
    };

    this.getTextofModifyinLegendSection    =   function(){
        return ModifyTextLegendSection.getText();
    };

    this.getTextofDeleteinLegendSection    =   function(){
        return DeleteTextLegendSection.getText();
    };
    
};

module.exports = new HistoricalRecordTabPO();