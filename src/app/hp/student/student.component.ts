import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../model/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {

  constructor() {}

  @Input() student: Student
  @Input() launch: boolean
 
  private color: string

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if(this.student){

      switch(this.student.house){
        case "Gryffindor": this.color = "#e3cccc"; break;
        case "Hufflepuff": this.color = "#fcf3de"; break;
        case "Ravenclaw": this.color = "#d2d5de"; break;
        case "Slytherin": this.color = "#d4dfd8"; break;
      }

      switch(this.student.ancestry){
        case "half-blood": this.student.ancestry = "Sang-Mélé"; break;
        case "muggleborn" : this.student.ancestry = "Sang de Bourbe"; break;
        case "pure-blood" : this.student.ancestry = "Sang pur"; break;
        case "" : this.student.ancestry = "Inconnu"; break;
      }
    }
  }

}
