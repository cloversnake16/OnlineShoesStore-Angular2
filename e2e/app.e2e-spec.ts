import { Orizo2Page } from './app.po';

describe('orizo2 App', () => {
  let page: Orizo2Page;

  beforeEach(() => {
    page = new Orizo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
