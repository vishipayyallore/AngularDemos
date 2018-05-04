import { AppPage } from './app.po';

describe('fruitvendor App', () => {
  let page: AppPage;
  const pageHeader = 'Welcome to Fruit Vendors';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(pageHeader);
  });
});
