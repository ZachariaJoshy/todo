import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor() { }

  todos=[
    {
      id:1,
      title:'Learn Angular'
    },
    {
      id:2,
      title:'Learn Routing'
    },
    {
      id:3,
      title:'Learn Observables'
    },
    {
      id:4,
      title:'Learn service'
    }
  ];

  getTodos()
  {
    return this.todos;
  }

  
}