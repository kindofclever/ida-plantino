import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HeaderAddPlantComponent } from '../../components/header-add-plant/header-add-plant.component';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'plantino-add-plant',
  standalone: true,
  templateUrl: './add-plant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderAddPlantComponent,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class AddPlantComponent {
  addPlantForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private plantsService: PlantsService
  ) {
    this.addPlantForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      price: [
        null,
        [Validators.required, Validators.min(0.05), Validators.max(1000)],
      ],
      dateOfPurchase: [null, Validators.required],
    });
  }

  onSave(): void {

    console.log(this.addPlantForm);
  }

  navigateToPlantInventory() {
    this.router.navigate(['plant-inventory']);
  }
}
