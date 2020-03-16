import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'all';

const _filtroReducer = createReducer(initialState,

   on(setFiltro, (state, {filtro}) => filtro));

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}

