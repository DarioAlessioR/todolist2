/**
 * @jest-environment jsdom
 */
import remove from '../__mock__/remove.js';
import todolist from '../__mock__/remove.js';

describe('remove item with remove function', () => {
  test('remove 1 element', () => {
    let i = 0;
    remove(i);
    expect(todolist).toHaveLength(0);
  });
});
