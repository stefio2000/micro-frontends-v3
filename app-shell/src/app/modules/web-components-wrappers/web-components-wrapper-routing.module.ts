import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthComponent} from "./components/auth/auth.component";
import {SliderComponent} from "./components/slider/slider.component";

const routes: Routes = [
  {
    path: 'component-auth',
    component: AuthComponent
  },
  {
    path: 'component-home',
    component: HomeComponent
  },
  {
    path: 'component-slider',
    component: SliderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebComponentsWrapperRoutingModule {
  constructor() {
    console.log('WebComponentsWrapperRoutingModule')
  }
}
