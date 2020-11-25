import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HouseComponent } from '../app/hp/house/house.component';
import { HouseStudentsComponent } from '../app/hp/house-students/house-students.component';
import { StudentComponent } from '../app/hp/student/student.component';
import { HpComponent } from './hp/hp.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HouseStudentsComponent,
    StudentComponent,
    HpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
