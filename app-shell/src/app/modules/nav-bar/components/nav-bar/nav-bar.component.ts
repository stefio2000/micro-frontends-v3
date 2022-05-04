import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NavigationItemModel} from "../../models/navigation.item.model";
import {NavigationService} from "../../services/navigation.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  selected?: string;

  constructor(public readonly service: NavigationService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  select(navItem: NavigationItemModel): void {
    this.selected = navItem.name;
  }
}
