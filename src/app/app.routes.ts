import { Routes } from '@angular/router';
import { AddPlantComponent } from './containers/add-plant/add-plant.component';
import { PlantInventoryComponent } from './containers/plant-inventory/plant-inventory.component';

export const routes: Routes = [
  { path: 'add-plant', component: AddPlantComponent },
  { path: 'plant-inventory', component: PlantInventoryComponent },
  { path: '', redirectTo: 'plant-inventory', pathMatch: 'full' },
];
