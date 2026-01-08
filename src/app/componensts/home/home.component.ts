import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SimpleInterestComponent } from "../simple-interest/simple-interest.component";
import { CompoundInterestComponent } from '../compound-interest/compound-interest.component';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SimpleInterestComponent, CompoundInterestComponent, RouterOutlet, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
