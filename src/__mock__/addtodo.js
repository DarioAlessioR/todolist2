


const addtodo = (inputtodo) => {
let todolist = [];
      todolist.push(
        {
          id: todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 1,
          todo: inputtodo,
          todostatus: true,
        },
      );
      console.log(todolist)
    }

 //addtodo('hhhhhhhh');
  export default addtodo;
  
