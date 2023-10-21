import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plantino-add-plant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-plant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlantComponent {

}
