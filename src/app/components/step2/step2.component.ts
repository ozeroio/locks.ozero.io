import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StateManagerService} from "../../services/state-manager.service";
import {APP_ROUTES} from "../../app-routing.module";

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {

  constructor(private router: Router,
              public stateManager: StateManagerService) {
  }

  onPreviousStepClick(): void {
    this.router.navigate([APP_ROUTES.STEP_1]);
  }

  onNextStepClick(): void {
    this.stateManager.guessNumbers[0] = this.stateManager.guessNumbers[0] % 40;
    this.stateManager.guessNumbers[1] = this.stateManager.guessNumbers[1] % 40;
    this.router.navigate([APP_ROUTES.STEP_3]);
  }
}
