import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo: Todo;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required );

    this.chkCompletado.valueChanges.subscribe( value => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) )
    });
  }

  editar(){
    this.txtInput.setValue( this.todo.texto );
    this.editando = true;
    setTimeout(()=> {
      this.txtInputFisico.nativeElement.select();

    },1)
  }

  terminarEdicion(){
    
    if (this.txtInput.valid && (this.txtInput.value !== this.todo.texto) && this.editando ) {
      
      this.store.dispatch( actions.editar( { id: this.todo.id, texto: this.txtInput.value } ))
    }
    this.editando = false;
  }

  borrar(){
    this.store.dispatch( actions.borrar( { id: this.todo.id }))
  }

}
