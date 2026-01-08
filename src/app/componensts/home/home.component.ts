import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SimpleInterestComponent } from "../simple-interest/simple-interest.component";
import { CompoundInterestComponent } from '../compound-interest/compound-interest.component';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SimpleInterestComponent, CompoundInterestComponent, RouterOutlet, NgIf,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentBackground = 'bg-home';
  isHome = true;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        this.isHome = url === '/';

        if (url === '/simple') {
          this.currentBackground = 'bg-simple';
        } else if (url === '/compound') {
          this.currentBackground = 'bg-compound';
        } else {
          this.currentBackground = 'bg-home';
        }
      }
    });
  }
  showHomeContent(): boolean {
    return this.router.url === '/';
  }
}
