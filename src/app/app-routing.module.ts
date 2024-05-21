import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { NotFoundComponent } from './ui/not-found.component';
import { ManagerViewEnquiryComponent } from './manager-view-enquiry/manager-view-enquiry.component';

const routes: Routes = [
  { path: 'manager/:id', component: ManagerViewEnquiryComponent},

  { path:'manager', component: ManagerHomeComponent },

  { path: '', redirectTo:'/manager', pathMatch:'full'},

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
