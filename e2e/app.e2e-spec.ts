import { CakeMakePage } from './app.po';

describe('cake-make App', () => {
  let page: CakeMakePage;

  beforeEach(() => {
    page = new CakeMakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
