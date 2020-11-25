import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://hp-api.herokuapp.com/api"

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http:HttpClient) {}

  getStudent(house: string){
    let url = BASE_URL + "/characters/house/" + house
    return this.http.get(url, {observe: "response"})
  }

}
