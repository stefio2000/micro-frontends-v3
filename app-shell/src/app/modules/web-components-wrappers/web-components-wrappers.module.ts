import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {LazyElementsModule} from "@angular-extensions/elements";
import {WebComponentsWrapperRoutingModule} from "./web-components-wrapper-routing.module";
import {AuthComponent} from './components/auth/auth.component';
import {SliderComponent} from './components/slider/slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    LazyElementsModule,
    WebComponentsWrapperRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentsWrappersModule {
  constructor() {
    console.log('WebComponentsWrappersModule')
  }
}
