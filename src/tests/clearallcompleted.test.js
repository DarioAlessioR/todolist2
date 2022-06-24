/**
 * @jest-environment jsdom
 */
 import clearAllCompleted from '../__mock__/clearallcompleted.js';

 const todolist2 = [
    {
      id: 0,
      todo: 'test activity',
      todostatus: true,  
    },
    {
      id: 1,
      todo: 'test activity',
      todostatus: false,  
    }
  ]
  
 describe('Clear all completed activities from array', () => {
   test('Delete all elements with todostatus.value = true from array', () => {
     clearAllCompleted();
     expect(todolist2.length).toBe(1);
   });
 });

 export default todolist2;