import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  simple = false;
  compound = false;

  constructor(private router: Router) {}

  goToSimple() {
    this.simple = true;
    this.compound = false;
    this.router.navigate(['simple']);
  }

  goToCompound() {
    this.compound = true;
    this.simple = false;
    this.router.navigate(['compound']);
  }
}
