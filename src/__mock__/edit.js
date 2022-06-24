/* eslint-disable import/no-cycle */
import todolist from '../tests/edit.test.js';

const mockedit = (str, i) => {
  todolist[i].todo = str;
};

export default mockedit;
