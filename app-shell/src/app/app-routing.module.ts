import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/web-components-wrappers/web-components-wrappers.module')
      .then(mod => mod.WebComponentsWrappersModule),
    canActivate: [
    ],
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/web-components-wrappers/web-components-wrappers.module')
      .then(mod => mod.WebComponentsWrappersModule),
    canActivate: [
    ],
  },
  {
    path: '**',
    redirectTo: '',
    canActivate: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
