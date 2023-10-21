import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPlantInventoryComponent } from "../../components/header-plant-inventory/header-plant-inventory.component";

@Component({
  selector: 'plantino-plant-inventory',
  standalone: true,
  templateUrl: './plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderPlantInventoryComponent]
})
export class PlantInventoryComponent { }
