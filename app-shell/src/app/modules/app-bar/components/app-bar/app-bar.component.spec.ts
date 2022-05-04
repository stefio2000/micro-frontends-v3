import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppBarComponent} from './app-bar.component';
import {SafeUrlPipe} from "../../../shared/pipes/safe-url.pipe";
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {AppNameComponent} from "../app-name/app-name.component";
import {MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalBroadcastService, MsalService} from "@azure/msal-angular";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RoutesModule} from "../../../routes/routes.module";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MSALGuardConfigFactory, MSALInstanceFactory} from "../../../shared/functions/msal.functions";

describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppBarComponent,
        UserProfileComponent,
        AppNameComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RoutesModule,
        MatDialogModule,
        MatMenuModule,
        MatSnackBarModule,
      ],
      providers: [
        SafeUrlPipe,
        MsalService,
        MsalBroadcastService,
        {provide: MatDialogRef, useValue: {}},
        {provide: MSAL_GUARD_CONFIG, useFactory: MSALGuardConfigFactory},
        {provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
