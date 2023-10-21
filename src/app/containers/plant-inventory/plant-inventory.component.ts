import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPlantInventoryComponent } from '../../components/header-plant-inventory/header-plant-inventory.component';
import { PlantsService } from 'src/app/services/plants.service';
import { Plant } from 'src/app/types/plant.interface';
import { isEmpty, isNil } from 'lodash-es';
import { PlantCardComponent } from '../../components/plant-card/plant-card.component';

@Component({
  selector: 'plantino-plant-inventory',
  standalone: true,
  templateUrl: './plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderPlantInventoryComponent, PlantCardComponent],
})
export class PlantInventoryComponent implements OnInit {
  plants: Plant[] = [];
  filteredPlantsState = signal<{ plants: Plant[] }>({ plants: [] });
  filteredPlants = computed(() => this.filteredPlantsState().plants);

  constructor(private plantsService: PlantsService) {}

  ngOnInit() {
    if (isNil(this.plants)) {
      this.plants = [];
    }
    this.plants = this.plantsService.plants();
    this.filteredPlantsState.update(currentState => ({
      ...currentState,
      plants: this.plants,
    }));
  }

  onSearchChanged(searchTerm: string): void {
    let filtered: Plant[] = [];
    if (!isNil(searchTerm) && searchTerm !== '') {
      filtered = this.plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filtered = this.plants;
    }
    this.filteredPlantsState.update(currentState => ({
      ...currentState,
      plants: filtered,
    }));
  }
}
