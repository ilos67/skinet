import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';

const routes: Routes = [
  // {path: 'shop', component: ShopComponent},
  // {path: 'shop/:id', component: ProductDetailsComponent},
  {path: '', component: BasketComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
