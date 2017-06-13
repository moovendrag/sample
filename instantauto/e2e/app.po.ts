import { browser, by, element } from 'protractor';

export class InstantautoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('at-root h1')).getText();
  }
}