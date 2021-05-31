import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a=false;

  @Input() todo:any;
  @Input() i!:number;

  @Output() selected=new EventEmitter<any>();

  @Output() value=new EventEmitter<{id:number,title:string}>();


  onSelcted(id:number)
  {
    this.selected.emit(id);
  }

  t='';

  onEdit()
  {
    this.a=true;
  }

  onSubmit(id:number){
    this.a=false;
    this.value.emit({id:id,title:this.t});

  }

}