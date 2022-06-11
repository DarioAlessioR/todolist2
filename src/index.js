/* eslint-disable linebreak-style */

import './style.css';

const todolist = [
  {
    id: 0,
    todo: '',
    todostatus: '',
  },
  {
    id: 1,
    todo: 'Have a cup of tea or coffee',
    todostatus: true,
  },
  {
    id: 2,
    todo: 'Study MICROVERSE',
    todostatus: true,
  },
  {
    id: 3,
    todo: 'Enjoy life',
    todostatus: true,
  },
  {
    id: 4,
    todo: 'Happy coding',
    todostatus: true,
  },
];

document.getElementById('body').onload = () => {
  const localSt = JSON.parse(localStorage.getItem('texttodolist'));
  if (localSt == null) {
    localStorage.setItem('texttodolist', JSON.stringify(todolist));
  } else {
    showtodolist(localSt);
  }
};

const addtodo = (inputtodo) => {
  if (inputtodo.length < 1) {
    const message = document.getElementById('message');
    message.innerHTML = 'Please, type a "to do" activity';
  } else {
    const message = document.getElementById('message');
    message.innerHTML = '';
    const todolist = JSON.parse(localStorage.getItem('texttodolist'));
    todolist.push(
      {
        id: todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 1,
        todo: inputtodo,
        todostatus: true,
      },
    );
    localStorage.setItem('texttodolist', JSON.stringify(todolist));
  } showtodolist(JSON.parse(localStorage.getItem('texttodolist')));
};

const showtodolist = (todolist) => {
  const totallist = document.getElementById('totallist');
  totallist.innerHTML = '';
  for (let i = todolist.length - 1; i > 0; i -= 1) {
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
      icon3.addEventListener('click', 'removetodo(i)');
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
});
