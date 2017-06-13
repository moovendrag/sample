import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DealerComponent } from './pages/dealer/dealer.component';
import { ViewdealerComponent } from './pages/viewdealer/viewdealer.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dealer', component: DealerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewdealer', component: ViewdealerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
