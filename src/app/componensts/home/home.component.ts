import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SimpleInterestComponent } from "../simple-interest/simple-interest.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SimpleInterestComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
