// Function changeStatus to capture checkbox clicks and change todostatus boolean in
//  array for checked elements
const changeStatus = (i) => {
  const todolist = JSON.parse(localStorage.getItem('texttodolist'));
  if (todolist[i].todostatus === true) {
    todolist[i].todostatus = false;
    localStorage.setItem('texttodolist', JSON.stringify(todolist));
  } else {
    todolist[i].todostatus = true;
    localStorage.setItem('texttodolist', JSON.stringify(todolist));
  }
};

export default changeStatus;
