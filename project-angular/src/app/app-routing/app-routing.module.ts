import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ConfirmProfileComponent } from '../confirm-profile/confirm-profile.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { DummyPageComponent } from '../dummy-page/dummy-page.component';

const routes: Routes = [
  { path: '', component: DummyPageComponent, pathMatch: 'full' },
  { path: 'confirm-profile', component: ConfirmProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent }
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
