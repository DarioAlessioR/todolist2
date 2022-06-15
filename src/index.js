/* eslint-disable linebreak-style */
import changeStatus from './modules/changestatus.js';
import './style.css';

const todolist = [
  {
    id: 0,
    todo: '',
    todostatus: '',
  },
];

// Function shortodolist shows the list of activities on screen
const showtodolist = (todolist) => {
  const totallist = document.getElementById('totallist');
  totallist.innerHTML = '';
  for (let i = todolist.length - 1; i > 0; i -= 1) {
    // Create a line div to put inside checkbox, activity (todo) and icon
    const line = document.createElement('div');
    line.setAttribute('class', 'linelist');
    // Create a leftside div to put inside checkbox and activity
    const leftside = document.createElement('div');
    leftside.setAttribute('id', 'leftside');
    // Create the todo in activity
    const activity = document.createElement('p');
    activity.setAttribute('name', 'activity');
    activity.setAttribute('class', `${todolist[i].id}`);
    activity.setAttribute('class', 'activity');
    activity.innerHTML = `${todolist[i].todo}`;
    // Make activity field editable and save new content to array and localStorage
    activity.setAttribute('contentEditable', 'true');
    activity.addEventListener('keydown', () => {
      const todolist = JSON.parse(localStorage.getItem('texttodolist'));
      todolist[i].todo = activity.innerHTML;
      localStorage.setItem('texttodolist', JSON.stringify(todolist));
    });
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.addEventListener('click', () => {
      changeStatus(i);
      const todolist = JSON.parse(localStorage.getItem('texttodolist'));
      // Change class for text-decoration of activity to line-through if checkbox clicked
      if (todolist[i].todostatus === false) {
        activity.setAttribute('class', 'completed');
      } else {
        activity.classList.remove('completed');
      }
    });
    // Create divicon3 div to put inside icons
    const divicon3 = document.createElement('div');
    divicon3.setAttribute('class', 'change');
    // Create three dots icon and change it to trash can icon on click
    const icon3 = document.createElement('i');
    icon3.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    divicon3.addEventListener('click', () => {
      icon3.setAttribute('class', 'fa-solid fa-trash-can');
      // Give the trash can icon the order to delete the i element on click. After deletenig,
      //   will save new array and show new list of activities on screen
      icon3.addEventListener('click', () => {
        const deletetodo = `${i}`;
        const todolist = JSON.parse(localStorage.getItem('texttodolist'));
        todolist.splice(deletetodo, 1);
        for (let i = 0; i < todolist.length; i += 1) {
          todolist[i].id = i;
        }
        localStorage.setItem('texttodolist', JSON.stringify(todolist));
        return showtodolist(todolist);
      });
    });
    // Appends all elements in this order:
    // (icon3) --> (divicon3)
    // (checkbox) and (activity) --> (leftside)
    // (leftside) and (divicon3) --> (line)
    // (line) -- (totallist)
    divicon3.appendChild(icon3);
    leftside.appendChild(checkbox);
    leftside.appendChild(activity);
    line.appendChild(leftside);
    line.appendChild(divicon3);
    totallist.appendChild(line);
  }
};

// Function clearAllCompleted to clear from array all elements with todostatus = false
const clearAllCompleted = () => {
  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => {
    const todolist2 = JSON.parse(localStorage.getItem('texttodolist'));
    for (let i = todolist2.length - 1; i > 0; i -= 1) {
      if (todolist2[i].todostatus === false) {
        todolist2.splice(i, 1);
      }
      localStorage.setItem('texttodolist', JSON.stringify(todolist2));
      showtodolist(JSON.parse(localStorage.getItem('texttodolist')));
    }
  });
};

// On page load (onload), show list of activities on screen
document.getElementById('body').onload = () => {
  const localSt = JSON.parse(localStorage.getItem('texttodolist'));
  if (localSt == null) {
    localStorage.setItem('texttodolist', JSON.stringify(todolist));
  } else {
    showtodolist(localSt);
  }
};

// Function addtodo to save to the array the data captured in input form.
// It shows error message if try to save empty field
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
    // After updating the array, save it to localStorage and call showtodolist function to
    //  show new list on screen
    localStorage.setItem('texttodolist', JSON.stringify(todolist));
  } showtodolist(JSON.parse(localStorage.getItem('texttodolist')));
};

// Capture data entered in form input field and send it to addtodo function to be saved in array
const submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', () => {
  const todoinput = document.getElementById('todo-input');
  const inputtodo = todoinput.value;
  addtodo(inputtodo);
  todoinput.value = '';
});

clearAllCompleted();
