import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { UserDetails } from './resolvers/userDeatails.resolvers';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, {
  path: 'view',
  component: ViewDetailsComponent,
  resolve: {
    details: UserDetails
  }
}, {
  path: 'edit',
  component: EditDetailsComponent,
  resolve: {
    details: UserDetails
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [UserDetails],
  exports: [RouterModule]
})
export class AppRoutingModule { }
