import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppBarComponent} from './components/app-bar/app-bar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AppNameComponent} from "./components/app-name/app-name.component";
import {MatDialogModule} from "@angular/material/dialog";
import {SafeUrlPipe} from "./pipes/safe-url.pipe";

@NgModule({
  declarations: [
    AppBarComponent,
    AppNameComponent,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers:[
    SafeUrlPipe
  ],
  exports: [
    AppBarComponent
  ]
})
export class AppBarModule {
}
