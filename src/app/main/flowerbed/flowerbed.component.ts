import { Component, Input, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/plant';

@Component({
  selector: 'app-flowerbed',
  templateUrl: './flowerbed.component.html',
  styleUrls: ['./flowerbed.component.css']
})
export class FlowerbedComponent implements OnInit {

  @Input() selectedPlants: Plant[] = [];

  name: string = 'My Flowerbed';
  editingName: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
