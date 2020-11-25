import { Component, OnInit } from '@angular/core';
import { House } from './model/House';
import { Student } from './model/Student';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css']
})
export class HpComponent implements OnInit {

  constructor() {}
  house: House
  launch: boolean = false
  student: Student
  
  ngOnInit(): void {}

  onHouseClicked(event: any){

    // si on clique sur une AUTRE maison que celle précedemment cliquée
    /*
    if(this.house != event){
      this.launch = false
    } else {
      this.launch = true
    }
    */
    this.house = event
  }

  onStudentClicked(event: any){
    this.student = event
  }

}
