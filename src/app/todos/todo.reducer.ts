import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, borrarAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo( 'Buy groceries ', true),
    new Todo( 'Breakfast with Lo 💕'),
    new Todo( 'Wish Bob a happy birthday', true),
    new Todo( 'Go to the dentist 16pm '),
    new Todo( 'Cinema with Miley - get the car!'),
    new Todo( 'Math homework - at least 10 exercises'),
];

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
  on(toggle, (state, { id }) => {
    return state.map( todo => {

      if (todo.id === id) {
        
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }
    } );
  }), 
  on(editar, (state, { id, texto }) => {
    return state.map( todo => {

      if (todo.id === id) {
        
        return {
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }
    } );
  }), 
  on(borrar, (state, { id }) => {
    return state.filter( todo => todo.id!== id);
  }), 
  on(toggleAll, (state, { completado }) => {
    return state.map( todo => {
      return {
        ...todo, 
        completado: completado
      }
    } );
  }), 
  on(borrar, (state, { id }) => {
    return state.filter( todo => todo.id!== id);
  }), 
  on( borrarAll, (state)=>{
    return state.filter( todo => !todo.completado );
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}