import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plantino-header-add-plant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-add-plant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderAddPlantComponent {
  @Input() addPlantHeaderText: string | undefined;
}
