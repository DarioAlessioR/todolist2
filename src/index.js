/* eslint-disable linebreak-style */

import './style.css';

const todolist = [{
  id: '',
  todo: 'mmmmmmmmmmmm',
  todostatus: '',
}];

const addtodo = (inputtodo) => {
  if (inputtodo.length < 1) {
    const message = document.getElementById('message');
    message.innerHTML = 'Please, type a "to do" activity';
  } else {
    const message = document.getElementById('message');
    message.innerHTML = '';
    todolist.push(
      {
        id: todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 1,
        todo: inputtodo,
        todostatus: true,
      },
    );
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }
};

const showtodolist = (todolist) => {
  const totallist = document.getElementById('totallist');
  totallist.innerHTML = '';
  for (let i = 1; i < todolist.length; i += 1) {
    const line = document.createElement('div');
    line.setAttribute('class', 'linelist');
    const leftside = document.createElement('div');
    leftside.setAttribute('id', 'leftside');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const activity = document.createElement('p');
    activity.innerHTML = `${todolist[i].todo}`;
    const divicon3 = document.createElement('div');
    divicon3.setAttribute('class', 'change');
    const icon3 = document.createElement('i');
    icon3.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    divicon3.addEventListener('click', () => {
      icon3.setAttribute('class', 'fa-solid fa-trash-can');
      
      icon3.addEventListener('click', removetodo(i));
    });
    divicon3.appendChild(icon3);
    leftside.appendChild(checkbox);
    leftside.appendChild(activity);
    line.appendChild(leftside);
    line.appendChild(divicon3);
    totallist.appendChild(line);
  }
};

const submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', () => {
  const todoinput = document.getElementById('todo-input');
  const inputtodo = todoinput.value;
  addtodo(inputtodo);
  todoinput.value = '';
  showtodolist(todolist);
});

const removetodo = (i) => {

  console.log(todolist[i].todo);
};







/*
const d = new Date();
document.getElementById('today').innerHTML = d;
*/
/*
if (localStorage.getItem('todolist') !== null && localStorage.getItem('todolist') !== undefined) {
  Book.setBooks(JSON.parse(localStorage.getItem('todolist')));
}
*/
/*
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Helloooooooooooooooooo', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
*/

/*
import _ from 'lodash';
*/