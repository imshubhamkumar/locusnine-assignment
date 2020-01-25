import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WavesModule, TableModule } from 'angular-bootstrap-md';
import { MaterialModule } from '../matrial.module';
import { AddUserModelComponent } from './add-user-model/add-user-model.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AddUserModelComponent
  ],
  imports: [
    CommonModule,
    WavesModule,
    TableModule,
    MaterialModule
  ]
})
export class HomeModule { }
