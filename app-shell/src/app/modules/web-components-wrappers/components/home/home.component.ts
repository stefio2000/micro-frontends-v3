import {Component} from '@angular/core';

class Render2 {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {
  url = 'http://127.0.0.1:3000/v3/component-home/component.js';
}
