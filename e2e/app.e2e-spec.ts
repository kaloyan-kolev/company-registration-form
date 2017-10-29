import { Project10Page } from './app.po';

describe('project10 App', () => {
  let page: Project10Page;

  beforeEach(() => {
    page = new Project10Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
