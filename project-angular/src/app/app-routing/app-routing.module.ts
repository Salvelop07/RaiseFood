import { MenuComponent } from './../menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ConfirmProfileComponent } from '../confirm-profile/confirm-profile.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { AuthGuard } from '../guards/auth.guard';
import { LandingComponent } from '../landing/landing.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'confirm-profile', component: ConfirmProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }