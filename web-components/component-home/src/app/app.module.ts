import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, {
      injector: this.injector
    });
    const componentFullName: string = 'stefio2000-component-home';
    console.log(`Creating web component with tag <${componentFullName}>`);
    customElements.define(componentFullName, el);
  }

}
