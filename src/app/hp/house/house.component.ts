import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { House } from 'src/app/hp/model/House';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  @Output() onHouseClick: EventEmitter<House> = new EventEmitter()

  houses:House[] = [
    {name: "Gryffindor", logo: "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png", color: "#e3cccc"}, 
    {name: "Hufflepuff", logo: "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png", color: "#fcf3de"}, 
    {name: "Ravenclaw", logo: "https://static.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png", color: "#d2d5de"}, 
    {name: "Slytherin", logo: "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png", color: "#d4dfd8"}]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number){
    this.onHouseClick.emit(this.houses[index])
  }

}