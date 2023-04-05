import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {Step1Component} from "./components/step1/step1.component";
import {Step2Component} from "./components/step2/step2.component";
import {Step3Component} from "./components/step3/step3.component";
import {Step4Component} from "./components/step4/step4.component";
import {APP_BASE_HREF} from "@angular/common";

export enum APP_ROUTES {
  STEP_1 = 'step1',
  STEP_2 = 'step2',
  STEP_3 = 'step3',
  STEP_4 = 'step4'
}

const routes: Routes = [{
  path: '',
  redirectTo: APP_ROUTES.STEP_1,
  pathMatch: 'full'
}, {
  path: APP_ROUTES.STEP_1,
  component: Step1Component
}, {
  path: APP_ROUTES.STEP_2,
  component: Step2Component
}, {
  path: APP_ROUTES.STEP_3,
  component: Step3Component
}, {
  path: APP_ROUTES.STEP_4,
  component: Step4Component
}, {
  path: '**',
  component: Step1Component
}];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  useHash: true
};

export const routing = RouterModule.forRoot(routes, routingConfiguration);

@NgModule({
  imports: [
    routing
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule {
}
