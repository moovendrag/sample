import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DealerComponent } from './dealer/dealer.component';
import { ViewdealerComponent } from './viewdealer/viewdealer.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent,
    DealerComponent,
    ViewdealerComponent]
})
export class PagesModule { }
