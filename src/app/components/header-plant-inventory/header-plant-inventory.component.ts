import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'plantino-header-plant-inventory',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './header-plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPlantInventoryComponent {
  @Input() plantInventoryButtonText: string | undefined;
  @Output() searchChanged = new EventEmitter<string>();

  searchForm: FormGroup;
  constructor(
    public router: Router,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });

    this.searchForm.get('searchTerm')?.valueChanges.subscribe(value => {
      this.searchChanged.emit(value);
    });
  }
  navigateToAddPlant(): void {
    this.router.navigate(['add-plant']);
  }
}
