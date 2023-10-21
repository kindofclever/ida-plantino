import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'plantino-header-plant-inventory',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header-plant-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPlantInventoryComponent {
  @Input() plantInventoryButtonText: string | undefined;

  constructor(private router: Router) { }

  navigateToAddPlant(): void {
    this.router.navigate(['add-plant']);
  }
}
