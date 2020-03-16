import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
// indica como se encuentra el AppState de la app y todos los reducers

export interface AppState{
    todos: Todo[], 
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}