describe('TC_12_Filter Type=Click Criteria', function(){
    it('Open Forward Cars to Home Page', function(){
        browser.get('http://10.0.3.18:3434/cars-app');
        browser.sleep(100);
        expect(browser.getTitle()).toEqual('ForwardCars');
    });
    it('Navigate to Search Page', function(){
        element(by.linkText("Search")).click();
        browser.sleep(100);
        expect(element(by.xpath("(//input[@type='text'])[2]")).getText()).toBe('');    });
    it('Set Filter with Make, Model and Year with Inventory', function(){
        element(by.linkText("BMW")).click();
        browser.sleep(100);
        element(by.linkText("3-Series-S")).click();
        browser.sleep(100);
        element(by.linkText("2011")).click();
        browser.sleep(100);
        expect(element.all(by.repeater('car in cars | filter:inventoryFilter(criteria) | filter:carText')).count()).toBe(1);
    });
    it('View Selected Inventory Details', function(){
        element(by.buttonText("View Details")).click();
        browser.sleep(100);
        expect(element(by.className('modal-header')).getText()).toBe('Car Detail');
    });
});