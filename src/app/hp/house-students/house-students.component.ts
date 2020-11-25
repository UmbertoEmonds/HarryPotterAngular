import { EventEmitter, OnChanges, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { HpService } from '../hp.service';
import { House } from '../model/House';
import { Student } from '../model/Student';

@Component({
  selector: 'app-house-students',
  templateUrl: './house-students.component.html',
  styleUrls: ['./house-students.component.css']
})
export class HouseStudentsComponent implements OnInit, OnChanges{

  constructor(private httpService: HpService) {}

  @Input() house: House

  @Output() studentEvent = new EventEmitter<Student>()

  students: Student[]

  ngOnInit(): void {}

  // changements reçus à partir du parent uniquement
  ngOnChanges(): void {

    if(this.house != null){

      this.httpService.getStudent(this.house.name).subscribe((response) => {
        this.students = response.body as Student[]
  
        for (let student of this.students){
          switch(student.gender){
            case "female": student.gender = "Femme"; break;
            case "male": student.gender = "Homme"; break;
          }
          
        }
        
      },(error) => {
          alert("Une erreur s'est produite lors du chargement")
      })

    }
    
  }

  onClick(student:Student){
    this.studentEvent.emit(student)
  }

}