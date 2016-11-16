import { AngcliPage } from './app.po';

describe('angcli App', function() {
  let page: AngcliPage;

  beforeEach(() => {
    page = new AngcliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angcli works!');
  });
});
