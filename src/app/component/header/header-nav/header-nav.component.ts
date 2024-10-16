import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgClass,
    NgTemplateOutlet,
    FaIconComponent
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

  navbar = [
    {
      name: "Новини",
      list: [],
      href: ""
    }, {
      name: "Федерація",
      list: [
        {
          name: "Президент",
          href: ""
        }, {
          name: "Виконком ВОФВБК",
          href: ""
        },
        {
          name: "Наша гордість",
          href: ""
        }, {
          name: "Документи",
          href: ""
        }, {
          name: "Партнери,спонсори",
          href: ""
        }, {
          name: "Контакти",
          href: ""
        }
      ],
      href: ""
    }, {
      name: "Змагання",
      list: [
        {
          name: "Результати",
          href: ""
        }, {
          name: "Календар змагань",
          href: ""
        },
        {
          name: "Система відбору",
          href: ""
        }, {
          name: "Правила змагань",
          href: ""
        }, {
          name: "Положення",
          href: ""
        }, {
          name: "Інші документи",
          href: ""
        }
      ],
      href: ""
    }, {
      name: "Збірна",
      list: [
        {
          name: "Кращі спортсмени",
          href: ""
        }, {
          name: "Склад збірної",
          href: ""
        },
        {
          name: "Рейтинг спортсменів",
          href: ""
        },
        {
          name: "Тренери",
          href: ""
        }
      ],
      href: ""
    }, {
      name: "Школи",
      list: [],
      href: ""
    }, {
      name: "Галерея",
      list: [],
      href: ""
    }, {
      name: "Антидопінг",
      list: [],
      href: ""
    }
  ]
  faSearch = faSearch;
}
