import { Angular2ItlPage } from './app.po';

describe('angular2-itl App', () => {
  let page: Angular2ItlPage;

  beforeEach(() => {
    page = new Angular2ItlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
