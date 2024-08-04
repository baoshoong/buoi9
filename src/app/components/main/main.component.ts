import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ShopService } from '../../services/shop-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() items: string[] = [];

  constructor(public shopService: ShopService) {}

  protected readonly ShopService = ShopService;
}
