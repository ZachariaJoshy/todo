import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor() { }

  todoForm!: FormGroup;


  ngOnInit(): void {

    this.todoForm=new FormGroup({
      'title':new FormControl(null,Validators.required)
    });
  }


  @Output() body=new EventEmitter<string>();

  addTodo()
  {
    //const t=this.todoForm.get('title').value ; 
    this.body.emit(this.todoForm.get('title')?.value);
      this.todoForm.reset();
  }

}