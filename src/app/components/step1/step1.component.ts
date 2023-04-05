import {Component} from '@angular/core';
import {StateManagerService} from "../../services/state-manager.service";
import {Router} from "@angular/router";
import {APP_ROUTES} from "../../app-routing.module";

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {

  constructor(private router: Router,
              public stateManager: StateManagerService) {
    stateManager.reset();
  }

  onNextStepClick(): void {
    this.stateManager.stickyNumber = this.stateManager.stickyNumber % 40;
    this.router.navigate([APP_ROUTES.STEP_2]);
  }
}
