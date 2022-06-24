/**
 * @jest-environment jsdom
 */
 import changeStatus from '../__mock__/mockchangestatus.js';

 const todolist = [
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
  
 describe('updating an item completed', () => {
   test('change value of todolist[i].todostatus from false to true', () => {
     let i = 0;
     changeStatus(i);
     expect(todolist[i].todostatus).toBe(true);
   });
 });

 export default todolist;