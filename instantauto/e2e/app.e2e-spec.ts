import { InstantautoPage } from './app.po';

describe('instantauto App', () => {
  let page: InstantautoPage;

  beforeEach(() => {
    page = new InstantautoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('at works!');
  });
});
