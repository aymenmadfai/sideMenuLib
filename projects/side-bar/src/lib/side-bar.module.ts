import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    NavBarComponent,
  ]
})
export class SideBarModule { }
