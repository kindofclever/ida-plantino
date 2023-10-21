import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAddPlantComponent } from "../../components/header-add-plant/header-add-plant.component";

@Component({
  selector: 'plantino-add-plant',
  standalone: true,
  templateUrl: './add-plant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderAddPlantComponent]
})
export class AddPlantComponent { }
