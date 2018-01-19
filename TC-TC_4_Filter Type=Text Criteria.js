describe('TC_4_Filter Type=Text Criteria', function(){
    it('Open Forward Cars to Home Page', function(){
        browser.get('http://10.0.3.18:3434/cars-app');
        browser.sleep(100);
        expect(browser.getTitle()).toEqual('ForwardCars');
    });
    it('Navigate to Search Page', function(){
        element(by.linkText("Search")).click();
        browser.sleep(100);
        expect(element(by.xpath("(//input[@type='text'])[2]")).getText()).toBe('');    });
    it('Sert Negative Test Data Filter', function(){
        element(by.xpath("(//input[@type='text'])[2]")).clear();
        browser.sleep(100);
        element(by.xpath("(//input[@type='text'])[2]")).sendKeys("khskhzsd&");
        browser.sleep(100);
        element(by.xpath("(//input[@type='text'])[2]")).sendKeys(protractor.Key.ENTER);
        browser.sleep(100);
        expect(element.all(by.repeater('car in cars | filter:inventoryFilter(criteria) | filter:carText')).count()).toBe(0);
    });
    it('', function(){
        element(by.xpath("(//input[@type='text'])[2]")).clear();
        browser.sleep(100);
        element(by.xpath("(//input[@type='text'])[2]")).sendKeys(protractor.Key.ENTER);
        browser.sleep(100);
        expect(element.all(by.repeater('car in cars | filter:inventoryFilter(criteria) | filter:carText')).count()).toBe(14);
    });
});