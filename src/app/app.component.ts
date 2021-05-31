import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from './todoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  todos:{id:number,title:string}[]=[];

  completed:{id:number,title:string}[]=[];

  constructor(private todoservice:TodoserviceService){}
  
  ngOnInit()
  {
    this.todos=this.todoservice.todos;
  }
  

  selectedTodo(id:number):any
  {
    this.completed.push(this.todos[id]);
    this.todos.splice(id,1);
    console.log(this.completed);
  }

  onAddtodo(title:string)
  {
    this.todos.push({id:this.todos.length+1,title:title});
  }

  onEditTitle(to:{id:number,title:string})
  {
    this.todos[to.id].title=to.title;
  }



}