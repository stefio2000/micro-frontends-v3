import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppBarModule} from "./modules/app-bar/app-bar.module";
import {NavBarModule} from "./modules/nav-bar/nav-bar.module";
import {AppRoutingModule} from "./app-routing.module";
import {LazyElementsModule} from "@angular-extensions/elements";
import {WebComponentsWrappersModule} from "./modules/web-components-wrappers/web-components-wrappers.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBarModule,
    LazyElementsModule,
    NavBarModule,
    // WebComponentsWrappersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
