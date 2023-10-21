import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderAddPlantComponent } from "../../components/header-add-plant/header-add-plant.component";

@Component({
  selector: 'plantino-add-plant',
  standalone: true,
  templateUrl: './add-plant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderAddPlantComponent, ReactiveFormsModule, MatButtonModule],
})
export class AddPlantComponent {
  constructor(private router: Router) { }

  navigateToPlantInventory() {
    this.router.navigate(['plant-inventory']);
  }
}
