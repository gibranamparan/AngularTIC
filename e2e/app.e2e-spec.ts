import { AngularTICPage } from './app.po';

describe('angular-tic App', function() {
  let page: AngularTICPage;

  beforeEach(() => {
    page = new AngularTICPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
