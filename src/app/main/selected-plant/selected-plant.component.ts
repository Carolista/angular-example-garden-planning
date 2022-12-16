import { Component, Input, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/plant';

@Component({
  selector: 'app-selected-plant',
  templateUrl: './selected-plant.component.html',
  styleUrls: ['./selected-plant.component.css']
})
export class SelectedPlantComponent implements OnInit {

  @Input() selectedPlant: Plant = new Plant(0, '', '', 0, '');

  constructor() { }

  ngOnInit(): void {
  }

}
