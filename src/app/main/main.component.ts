import { Component, OnInit } from '@angular/core';
import { Plant } from '../shared/plant';
import { alphabetize } from '../shared/utils'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  plants: Plant[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadPlants();
  }

  async loadPlants() {
    let response = await fetch('https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt');
    let data = await response.json();
    // console.log(data);
    for (let i=0; i < data.length; i++) {
      this.plants.push(
        new Plant(
          data[i].id,
          data[i].name,
          data[i].color,
          data[i].numAvailable,
          data[i].image
        )
      )
    }
    // console.log(this.plants);
    alphabetize(this.plants, 'name');
  }

}
