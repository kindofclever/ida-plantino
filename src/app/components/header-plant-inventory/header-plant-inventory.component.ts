import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plantino-header-plant-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderPlantInventoryComponent {

}
