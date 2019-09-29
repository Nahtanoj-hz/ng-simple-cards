import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IHero } from '../../interfaces';

@Component({
  selector: 'lib-ng-simple-card',
  templateUrl: './ng-simple-card.component.html',
  styleUrls: ['./ng-simple-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgSimpleCardComponent {

  @Input() hero: IHero;

  constructor() { }
}
