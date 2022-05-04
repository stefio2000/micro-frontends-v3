import {Injectable} from '@angular/core';
import {NavigationItemModel} from "../models/navigation.item.model";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private cdnPath: string = ' http://127.0.0.1:3000';
  navItems: NavigationItemModel[] = [
    {name: 'auth', path: this.cdnPath + '/component-auth/component.js', wrapperPath: '/component-auth', icon: 'login', mfe: 'stefio2000-component-auth'},
    {name: 'home',  path: this.cdnPath + '/component-home/component.js', wrapperPath: '/component-home', icon: 'home', mfe: 'stefio2000-component-home'},
    {name: 'slider',  path: this.cdnPath + '/component-slider/component.js', wrapperPath: '/component-slider', icon: 'linear-scale', mfe: 'stefio2000-component-slider'},
  ];


  getMicroFrontEnd(navItem: NavigationItemModel): HTMLElement {
    const mfe: HTMLElement = document.createElement(navItem.mfe);
    // should populate potential attributes
    return mfe;
  }
}
