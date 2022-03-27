import { Component, Input, OnInit } from '@angular/core';
import {IWeatherDetails} from '../../ViewModel/IWeatherDetails'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() data: IWeatherDetails[] = [];
  constructor() {}

  ngOnInit() {}
  Accordion(ele: HTMLElement) {
    ele.classList.toggle('active');
    var panel = ele.nextElementSibling;
    if (panel?.classList.contains('d-block')) {
      panel.classList.remove('d-block');
      panel.classList.add('d-none');
    } else {
      panel?.classList.remove('d-none');
      panel?.classList.add('d-block');
    }
  }
}
