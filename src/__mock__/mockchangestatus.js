/* eslint-disable import/no-cycle */
import todolist from '../tests/changestatus.test.js';

const changeStatus = (i) => {
  if (todolist[i].todostatus === true) {
    todolist[i].todostatus = false;
  } else {
    todolist[i].todostatus = true;
  }
};

export default changeStatus;
