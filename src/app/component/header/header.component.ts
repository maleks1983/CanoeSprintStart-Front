import {Component} from '@angular/core';
import {HeaderAddressComponent} from './header-address/header-address.component';

import {HeaderNavComponent} from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderAddressComponent,
    HeaderNavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


}
