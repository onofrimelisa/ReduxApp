import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'completed' | 'pending' | 'all';

export const setFiltro = createAction('[Filtro] Set Filtro',
                                props<{ filtro: filtrosValidos }>());
