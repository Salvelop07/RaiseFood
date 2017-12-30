import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ConfirmProfileComponent } from '../confirm-profile/confirm-profile.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { DummyPageComponent } from '../dummy-page/dummy-page.component';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dummy-page', pathMatch: 'full' },
  { path: 'dummy-page', component: DummyPageComponent },
  { path: 'confirm-profile', component: ConfirmProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'order-history', component: OrderDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }