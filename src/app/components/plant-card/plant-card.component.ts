import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from 'src/app/types/plant.interface';

@Component({
  selector: 'plantino-plant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantCardComponent {
  @Input() plant: Plant | undefined;
}
