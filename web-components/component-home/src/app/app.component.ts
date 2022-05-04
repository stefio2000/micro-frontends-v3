import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  static readonly NAME: string = 'component-home';

  ngOnInit(): void {
    console.log(`Web component ${AppComponent.NAME} initialized`);
  }
}
