/**
 * @jest-environment jsdom
 */

import addtodo from '../index.js';


test('adds 1 + 2 to equal 3', () => {
    expect(addtodo('hola')).toBe(3);
  });