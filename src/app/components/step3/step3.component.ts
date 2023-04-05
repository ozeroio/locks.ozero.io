import {Component, OnInit} from '@angular/core';
import {APP_ROUTES} from "../../app-routing.module";
import {Router} from "@angular/router";
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  remainder: number;
  table: Array<Array<number>>;

  constructor(private router: Router,
              public stateManager: StateManagerService) {
    this.remainder = 0;
    this.table = Array.from([[0, 0, 0, 0], [0, 0, 0, 0]]);
  }

  ngOnInit(): void {
    this.remainder = this.stateManager.firstDigit % 4;
    this.calculate();
  }

  onPreviousStepClick(): void {
    this.router.navigate([APP_ROUTES.STEP_2]);
  }

  onNextStepClick(): void {
    this.router.navigate([APP_ROUTES.STEP_4]);
  }

  onLooserPossibilityClick(looser: number) {
    this.stateManager.thirdDigitSet = true;
    this.stateManager.thirdDigit = looser;
  }

  private calculate(): void {
    this.stateManager.thirdDigitPossibilities = new Array<number>(0);
    this.stateManager.secondDigitPossibilities = [];
    this.stateManager.thirdDigitSet = false;
    this.stateManager.ruleOutIndexes = new Map();

    this.table[0][0] = this.stateManager.guessNumbers[0];
    this.table[0][1] = this.stateManager.guessNumbers[0] + 10;
    this.table[0][2] = this.stateManager.guessNumbers[0] + 20;
    this.table[0][3] = this.stateManager.guessNumbers[0] + 30;
    this.table[1][0] = this.stateManager.guessNumbers[1];
    this.table[1][1] = this.stateManager.guessNumbers[1] + 10;
    this.table[1][2] = this.stateManager.guessNumbers[1] + 20;
    this.table[1][3] = this.stateManager.guessNumbers[1] + 30;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.table[i][j] % 4 === this.remainder) {
          this.stateManager.thirdDigitPossibilities.push(this.table[i][j]);
        }
      }
    }

    if (this.stateManager.thirdDigitPossibilities.length != 2) {
      alert("Assertion error. You should have only 2 possibilities for 3rd digit.")
    }

    this.stateManager.ruleOutIndexes.set(this.stateManager.thirdDigitPossibilities[0], []);
    this.stateManager.ruleOutIndexes.set(this.stateManager.thirdDigitPossibilities[1], []);

    let val = this.remainder + 2;
    this.stateManager.secondDigitPossibilities.push(val);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    val = this.remainder + 2 + 4;
    this.stateManager.secondDigitPossibilities.push(val);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);
    this.stateManager.secondDigitPossibilities.push((val += 8) % 40);

    for (let i = 0; i < this.stateManager.secondDigitPossibilities.length; i++) {
      if (this.tooClose(this.stateManager.thirdDigitPossibilities[0], this.stateManager.secondDigitPossibilities[i], 40, 2)) {
        (this.stateManager.ruleOutIndexes.get(this.stateManager.thirdDigitPossibilities[0]) as Array<number>).push(i);
      }
      if (this.tooClose(this.stateManager.thirdDigitPossibilities[1], this.stateManager.secondDigitPossibilities[i], 40, 2)) {
        (this.stateManager.ruleOutIndexes.get(this.stateManager.thirdDigitPossibilities[1]) as Array<number>).push(i);
      }
    }
  }

  ruledIndexFor(thirdDigitPossibility: number): Array<number> {
    return this.stateManager.ruleOutIndexes.get(thirdDigitPossibility) as Array<number>;
  }

  private tooClose(a: number, b: number, limit: number, threshold: number): boolean {
    let abs = Math.abs(a - b);
    if (abs <= threshold) {
      return true;
    }
    abs = Math.abs((Math.min(a, b) + limit) - Math.max(a, b));
    return abs <= threshold;
  }
}
