import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {StateManagerService} from "./services/state-manager.service";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locks.ozero.io';

  constructor(private router: Router,
              public stateManager: StateManagerService) {
    router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event => {
      this.stateManager.step = Number.parseInt((event as NavigationStart).url.replace('/step', ''));
    });
  }
}
