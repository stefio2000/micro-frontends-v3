import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {SafeUrl} from "@angular/platform-browser";
import {SafeUrlPipe} from "../../pipes/safe-url.pipe";

@Component({
  selector: 'app-app-name',
  templateUrl: './app-name.component.html',
  styleUrls: ['./app-name.component.scss']
})
export class AppNameComponent implements OnInit {
  // Default icon if no icon is provided in environments
  static readonly ICONS_PATH: string = '/assets/icons/';
  static readonly DEFAULT_ICON_PATH: string = AppNameComponent.ICONS_PATH + 'app.svg';
  // Icon url
  icon?: SafeUrl;
  // Application name
  name: string = 'TODO configure environment.configuration.appName';

  constructor(private readonly safeUrlPipe: SafeUrlPipe) {
  }

  ngOnInit(): void {
    const defaultIconPath: SafeUrl = this.safeUrlPipe.transform(AppNameComponent.DEFAULT_ICON_PATH, 'url');
    const iconPath: SafeUrl | undefined = environment.configuration.appIcon ? this.safeUrlPipe.transform(AppNameComponent.ICONS_PATH + environment.configuration.appIcon, 'url') : undefined;
    this.icon = iconPath ? iconPath : defaultIconPath;
    this.name = environment.configuration.appName;
  }
}
