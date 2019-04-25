import assert from 'assert';

import isElement from '../src/index';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.window = dom.window;
global.document = window.document;

describe('isElement', () => {
  it('string should return false', () => {
    assert.equal(isElement('a string'), false);
  });
  it('array should return false', () => {
    assert.equal(isElement([]), false);
  });
  it('undefined should return false', () => {
    assert.equal(isElement(undefined), false);
  });
  it('null should return false', () => {
    assert.equal(isElement(null), false);
  });
  it('int 0 should return false', () => {
    assert.equal(isElement(0), false);
  });
  it('int 100 should return false', () => {
    assert.equal(isElement(100), false);
  });
  it('p element', () => {
    global.HTMLElement = window.HTMLElement;
    assert.equal(isElement(document.querySelector("p")), true);
  });
  it('HTMLElement', () => {
    global.HTMLElement = undefined;
    assert.equal(isElement(document.querySelector("p")), true);
  });
});
