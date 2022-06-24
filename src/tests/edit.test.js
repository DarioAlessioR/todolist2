/* eslint-disable import/no-cycle */
/**
 * @jest-environment jsdom
 */
import mockedit from '../__mock__/edit.js';

const todolist = [
  {
    id: 0,
    todo: 'test activity 1',
    todostatus: true,
  },
  {
    id: 1,
    todo: 'test activity 2',
    todostatus: false,
  },
];

describe('Edit and save value of todolist.todo', () => {
  test('Edit and save the value of property todo of element [0] of array todolist', () => {
    mockedit('test activity 1 edited', 0);
    expect(todolist[0].todo).toBe('test activity 1 edited');
  });
});

export default todolist;