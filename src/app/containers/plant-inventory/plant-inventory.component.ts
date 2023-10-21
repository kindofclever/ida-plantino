import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPlantInventoryComponent } from "../../components/header-plant-inventory/header-plant-inventory.component";
import { PlantsService } from 'src/app/services/plants.service';
import { Plant } from 'src/app/types/plant.interface';
import { isNil } from 'lodash-es';
import { PlantCardComponent } from "../../components/plant-card/plant-card.component";

@Component({
  selector: 'plantino-plant-inventory',
  standalone: true,
  templateUrl: './plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderPlantInventoryComponent, PlantCardComponent]
})
export class PlantInventoryComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantsService: PlantsService) { }

  ngOnInit() {
    const plantsFromService = this.plantsService.plants();

    if (isNil(plantsFromService) || !Array.isArray(plantsFromService)) {
      this.plants = [];
    } else {
      this.plants = plantsFromService;
    }
  }

}
