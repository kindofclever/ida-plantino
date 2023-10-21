import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plantino-plant-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantInventoryComponent {

}
