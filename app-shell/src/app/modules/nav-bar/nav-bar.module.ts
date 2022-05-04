import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule {
}
