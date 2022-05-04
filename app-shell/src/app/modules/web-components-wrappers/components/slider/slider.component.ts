import {Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SliderComponent {
  url = 'http://127.0.0.1:3000/v3/component-slider/component.js';
}
