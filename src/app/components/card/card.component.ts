import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ShopService } from '../../services/shop-service.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() loiChao: string = '';
  // @Output() comGa = new EventEmitter<string>();

  id: string = '';
  ten: string = '';
  gia: number = 0;
  hinh: string = '';
  soLuong: number = 0;
  moTa: string = '';

  constructor(public shopService: ShopService) {}
}
