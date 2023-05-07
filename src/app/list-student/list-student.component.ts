import { Component, OnInit } from '@angular/core';
export interface IStudent{
  id:number;
  name:string;
  mark:number;
  image:string;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students:IStudent=
    {
      id:1,
      name:'Nguyen Van A',
      mark:9,
      image:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
    }

  constructor() { }

  ngOnInit(): void {
  }
  getMark(value:any){
    this.students.mark=value;
  }

}
