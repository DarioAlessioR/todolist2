/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import todolist2 from '../tests/clearallcompleted.test.js';

const clearAllCompleted = () => {
  const clear = document.getElementById('clear');
  for (let i = todolist2.length - 1; i > 0; i -= 1) {
    if (todolist2[i].todostatus === false) {
      todolist2.splice(i, 1);
    }
  }
};

export default clearAllCompleted;