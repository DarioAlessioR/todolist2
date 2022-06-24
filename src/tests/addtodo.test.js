/**
 * @jest-environment jsdom
 */
import addtodo from '../__mock__/addtodo.js';
import todolist from '../__mock__/addtodo.js';

describe('add item with addtodo function', () => {
  test('add 1 element', () => {
    addtodo('this is a test');
    expect(todolist).toHaveLength(1);
  });
});
