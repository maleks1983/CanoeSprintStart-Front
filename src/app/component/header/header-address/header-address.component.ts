import {Component} from '@angular/core';
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faClock} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header-address',
  standalone: true,
  imports: [
    FaIconComponent,
    FontAwesomeModule
  ],
  templateUrl: './header-address.component.html',
  styleUrl: './header-address.component.css'
})
export class HeaderAddressComponent {
  telephone = {
    'icon': faPhone,
    'name': '+38(097)8700600',
    'href': 'tel:+380978700600',
  };
  address = {
    'icon': faMapMarkerAlt,
    'name': 'м.Вінниця вул.Князів Коріатовичів 123',
    'href': 'https://maps.app.goo.gl/eUp7DxbQ1tyt6Bjz8'
  }
  timeWork = {
    'icon': faClock,
    'name': 'Час роботи: 09:00 - 18:00'
  };

  faFacebook = {'href':'','icon':faFacebookF};
  faInstagram = {'href':'','icon':faInstagram};
  faYoutube = {'href':'','icon':faYoutube}
}
