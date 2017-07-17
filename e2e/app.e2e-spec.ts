import { StpPage } from './app.po';

describe('stp App', function() {
  let page: StpPage;

  beforeEach(() => {
    page = new StpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
