import {Component, OnInit} from '@angular/core';
import {SafeUrl} from "@angular/platform-browser";
import {SafeUrlPipe} from "../../pipes/safe-url.pipe";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  logoUrl?: SafeUrl;

  constructor(
    private readonly safeUrlPipe: SafeUrlPipe,
  ) {
  }


  ngOnInit(): void {
    this.logoUrl = this.safeUrlPipe.transform('/assets/icons/aptar-icon-light.svg', 'url'); // TODO get language folder if not dev
  }

}
