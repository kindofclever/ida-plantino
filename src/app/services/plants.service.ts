import { Injectable, computed, signal } from '@angular/core';
import { Plant } from '../types/plant.interface';
import { isNil } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  LOCALE_STORAGE_KEY = 'plants';

  state = signal<{ plants: Plant[] }>({ plants: this.getInitialState() });
  plants = computed(() => this.state().plants);

  getInitialState() {
    const storedPlants = localStorage.getItem(this.LOCALE_STORAGE_KEY);
    return !isNil(storedPlants) ? JSON.parse(storedPlants) : {};
  }

  saveToLocStor(plants: Plant[]): void {
    if (isNil(plants)) {
      localStorage.setItem(this.LOCALE_STORAGE_KEY, JSON.stringify(plants));
    }
  }

  addPlant(plant: Plant): void {
    if (!isNil(plant)) {
      const updatedPlants = [...this.state().plants, plant];
      this.state.update(currentState => ({
        ...currentState,
        plants: updatedPlants,
      }));
      this.saveToLocStor(updatedPlants);
    }
  }

  highestPlantId = computed(() => {
    const plants = this.plants();
    if (!isNil(plants) && plants.length > 0) {
      return Math.max(...plants.map(plant => plant.id));
    }
    return 0;
  });
}
