export class AngcliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angcli-app h1')).getText();
  }
}
