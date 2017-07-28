import { AsosPage } from './app.po';

describe('asos App', () => {
  let page: AsosPage;

  beforeEach(() => {
    page = new AsosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
