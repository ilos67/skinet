import { Component, OnInit } from '@angular/core';
import { IBasket, IBasketItem } from '../shared/models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
basket$: Observable<IBasket>;
constructor(private basketService: BasketService) { }

ngOnInit(): void {
  this.basket$ = this.basketService.basket$;
}

removeBasketItem(item: IBasketItem) {
  this.basketService.removeItemFromBasket(item);
}

incrementItemQuantity(item: IBasketItem) {
  this.basketService.incrementItenQuantity(item);
}

decrementItemQuantity(item: IBasketItem) {
  this.basketService.decrementItenQuantity(item);
}

}