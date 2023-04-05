import { Component } from '@angular/core';
import {APP_ROUTES} from "../../app-routing.module";
import {Router} from "@angular/router";
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {

  constructor(private router: Router,
              public stateManager: StateManagerService) {
    }

  onPreviousStepClick(): void {
    this.router.navigate([APP_ROUTES.STEP_3]);
  }

  ruledIndexFor(thirdDigitPossibility: number): Array<number> {
    return this.stateManager.ruleOutIndexes.get(thirdDigitPossibility) as Array<number>;
  }
}
