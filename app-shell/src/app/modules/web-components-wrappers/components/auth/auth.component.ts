import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AuthComponent {
  url = 'http://127.0.0.1:3000/v3/component-auth/component.js';
}
