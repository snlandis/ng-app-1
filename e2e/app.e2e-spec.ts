import { OtxTestProjPage } from './app.po';

describe('otx-test-proj App', () => {
  let page: OtxTestProjPage;

  beforeEach(() => {
    page = new OtxTestProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
