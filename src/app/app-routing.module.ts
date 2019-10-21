import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChurchComponent } from './church/church.component';
import { LocationComponent } from './location/location.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddchurchComponent } from './addchurch/addchurch.component';


const routes: Routes = [
  {
    //
    path: '', component: ChurchComponent
    
  },
  {
    path: 'church', component: ChurchComponent
  },
  {
    path: 'adduser', component: AdduserComponent

  },
   {
     path: 'addchurch', component: AddchurchComponent

   },
  {
    path: 'location', component: LocationComponent

  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
