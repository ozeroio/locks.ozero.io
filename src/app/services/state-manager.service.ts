import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  private _step: number;
  private _stickyNumber: number;
  private _firstDigit: number;
  private _guessNumbers: Array<number>;
  private _secondDigitPossibilities: Array<number>;
  private _thirdDigitPossibilities: Array<number>;
  private _thirdDigit: number;
  private _thirdDigitSet: boolean;
  private _ruleOutIndexes: Map<number, Array<number>>;

  constructor() {
    this._step = 0;
    this._stickyNumber = 0;
    this._firstDigit = 0;
    this._guessNumbers = Array.from([0, 0]);
    this._secondDigitPossibilities = Array.from([]);
    this._thirdDigitPossibilities = Array.from([0, 0]);
    this._thirdDigit = 0;
    this._thirdDigitSet = false;
    this._ruleOutIndexes = new Map();
  }

  reset(): void {
    this._step = 0;
    this._stickyNumber = 0;
    this._firstDigit = 0;
    this._guessNumbers = Array.from([0, 0]);
    this._secondDigitPossibilities = Array.from([]);
    this._thirdDigitPossibilities = Array.from([0, 0]);
    this._thirdDigit = 0;
    this._thirdDigitSet = false;
    this._ruleOutIndexes = new Map();
  }

  get step(): number {
    return this._step;
  }

  set step(value: number) {
    this._step = value;
  }

  get stickyNumber(): number {
    return this._stickyNumber;
  }

  set stickyNumber(value: number) {
    this._stickyNumber = value;
    console.log("this._stickyNumber", this._stickyNumber)
    this._firstDigit = this._stickyNumber + 5;
  }

  get firstDigit(): number {
    return this._firstDigit;
  }

  get guessNumbers(): Array<number> {
    return this._guessNumbers;
  }

  set guessNumbers(value: Array<number>) {
    this._guessNumbers = value;
  }

  get secondDigitPossibilities(): Array<number> {
    return this._secondDigitPossibilities;
  }

  set secondDigitPossibilities(value: Array<number>) {
    this._secondDigitPossibilities = value;
  }

  get thirdDigitPossibilities(): Array<number> {
    return this._thirdDigitPossibilities;
  }

  set thirdDigitPossibilities(value: Array<number>) {
    this._thirdDigitPossibilities = value;
  }

  get thirdDigit(): number {
    return this._thirdDigit;
  }

  set thirdDigit(value: number) {
    this._thirdDigit = value;
  }

  get thirdDigitSet(): boolean {
    return this._thirdDigitSet;
  }

  set thirdDigitSet(value: boolean) {
    this._thirdDigitSet = value;
  }

  get ruleOutIndexes(): Map<number, Array<number>> {
    return this._ruleOutIndexes;
  }

  set ruleOutIndexes(value: Map<number, Array<number>>) {
    this._ruleOutIndexes = value;
  }
}
