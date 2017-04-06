import { ComptelAfomPage } from './app.po';

describe('comptel-afom App', () => {
  let page: ComptelAfomPage;

  beforeEach(() => {
    page = new ComptelAfomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
