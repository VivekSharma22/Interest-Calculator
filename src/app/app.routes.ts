import { Routes } from '@angular/router';
import { HomeComponent } from './componensts/home/home.component';
import { CompoundInterestComponent } from './componensts/compound-interest/compound-interest.component';
import { SimpleInterestComponent } from './componensts/simple-interest/simple-interest.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
          { path: 'simple', component: SimpleInterestComponent },
          { path: 'compound', component: CompoundInterestComponent }
        ]
      }
];
