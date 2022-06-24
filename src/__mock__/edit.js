import todolist from '../tests/edit.test.js';

const mockedit = (str, i) => {
  todolist[i].todo = str;
  localStorage.setItem('texttodolist', JSON.stringify(todolist));
};

export default mockedit;
