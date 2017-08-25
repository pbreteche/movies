import { AppPage } from './app.po';
import {element, by, browser} from 'protractor';

describe('movies App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movies app');
  });

  it('should lead to catalog', () => {
    element(by.cssContainingText('nav a', 'Catalogue')).click();
    expect(browser.getCurrentUrl()).toMatch('.*//[^\/]*/catalog$');
  });

  it('should add a movie', () => {
    browser.get('/catalog/add');
    element(by.model('movie.title')).sendKeys('Le film de l\'année');
    element(by.model('movie.year')).sendKeys('2014');
    element(by.cssContainingText('button', 'Ajouter')).click();
    expect(element(by.css('h2')).getText()).toEqual('Le film de l\'année');
  });
});
