import { Component, OnInit } from '@angular/core';
import { Plant } from '../shared/plant';
import { alphabetize, capitalize } from '../shared/utils'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loaded: boolean = false;

  plants: Plant[] = [];
  selectedPlants: Plant[] = [];

  capitalize = capitalize; // make available to template

  // NOTE: These two will eventually move to a separate component
  name: string = 'My Flowerbed';
  editingName: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadPlants();
  }

  async loadPlants() {
    let response = await fetch('https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt');
    let data = await response.json();
    console.log(data);
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
    console.log(this.plants);
    alphabetize(this.plants, 'name');
    this.loaded = true;
  }

  returnPlant(plant: Plant): void {
    plant.returnOne();
    if (this.selectedPlants.includes(plant) && plant.numAllocated === 0) {
      let index = this.selectedPlants.indexOf(plant);
      this.selectedPlants.splice(index, 1);
    }
  }

  allocatePlant(plant: Plant): void {
    plant.allocateOne();
    if (!this.selectedPlants.includes(plant)) {
      this.selectedPlants.push(plant);
    }
  }

  openNameInput(): void {
    this.editingName = true;
  }

  saveName(nameInputValue: string): void {
    if (nameInputValue.trim().length) {
      this.name = nameInputValue;
      this.editingName = false;
    } else {
      alert('\nPlease enter a name for your flowerbed.\n');
    }
  }

}
