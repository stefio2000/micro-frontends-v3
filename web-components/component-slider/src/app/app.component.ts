import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  static readonly NAME: string = 'component-slider';

  ngOnInit(): void {
    console.log(`Web component ${AppComponent.NAME} initialized`);
  }
}
