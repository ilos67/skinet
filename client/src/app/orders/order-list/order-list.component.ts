import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders-service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
orders: IOrder[];
  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }
getOrders(){
  this.orderService.getOrdersForUser().subscribe((orders: IOrder[]) => {
    this.orders = orders;
  }, error => {
    console.log(error);
  });
}
}
