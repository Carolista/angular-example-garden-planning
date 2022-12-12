import { Component, OnInit } from '@angular/core';
import { Plant } from '../shared/plant';
import { alphabetize } from '../shared/utils'
// TODO #3: add capitalize to utils and include with imports above

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // TODO #1: Set a boolean variable, loaded, and initialize to false

  plants: Plant[] = [];
  // TODO #3: Add selectedPlants, array of Plant objects, initialized to empty array

  // TODO #3: Make capitalize import available to template

  // NOTE: These two will eventually move to a separate component
  // TODO #5: Add string variable, name, for flowerbed
  // TODO #5: Add boolean variable, editingName, for toggling input field

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
    // TODO #1: Set the new variable, loaded, to true now that data is available
  }

  // TODO #3: Add returnPlant(plant) method to call plant's returnOne() method
  // If plant's numAllocated property is now 0, find index and remove from selectedPlants


  // TODO #3: Add allocatePlant(plant) method to call plant's allocateOne() method
  // If the plant is not yet in selectedPlants, push it into array


  // TODO #5: Add method openNameInput() to make editingName true
  
  
  // TODO #5: Add saveName(nameValue) method to overwrite name and make editingName false if field is not blank
  // Otherwise alert with message that field must contain a name before saving

}
