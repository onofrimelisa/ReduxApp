import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { borrarAll } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'all';
  filtros: actions.filtrosValidos [] = ['completed', 'pending', 'all'];

  pendientes: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    })
  }

  cambiarFiltro( filtro: actions.filtrosValidos ){
    this.store.dispatch( actions.setFiltro({ filtro: filtro }));
  }

  clearAll(){
    this.store.dispatch( borrarAll() );
  }

}
