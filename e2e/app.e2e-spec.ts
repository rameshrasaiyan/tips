import { TipsPage } from './app.po';

describe('tips App', function() {
  let page: TipsPage;

  beforeEach(() => {
    page = new TipsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
