const remove = () => {
  let todolist = [
    {
      id: 0,
      todo: 'test activity',
      todostatus: false,  
    },
    {
      id: 1,
      todo: 'test activity',
      todostatus: false,  
    }
  ]
  todolist.splice(0, 1);
  for (let i = 0; i < todolist.length; i += 1) {
    todolist[i].id = i;
  }
}

export default remove;