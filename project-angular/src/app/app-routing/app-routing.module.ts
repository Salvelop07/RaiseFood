import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ConfirmProfileComponent } from '../confirm-profile/confirm-profile.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { AuthGuard } from '../guards/auth.guard';
import { LandingComponent } from '../landing/landing.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: '/dummy-page', pathMatch: 'full' },
=======
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
>>>>>>> refs/remotes/origin/development
  { path: 'landing', component: LandingComponent },
  { path: 'confirm-profile', component: ConfirmProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard] }
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