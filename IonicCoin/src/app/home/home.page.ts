import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,

} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ExchangeService } from '../services/exchange';
import { CommonModule } from '@angular/common';
import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonCard,
    IonCardContent
  ],
})
export class HomePage implements OnInit {

  convert() {
    this.exchangeService.getRates(this.fromCurrency)
      .subscribe((response: any) => {

        const rate =
          response.conversion_rates[this.toCurrency];

        this.result = this.amount * rate;

      });
  }

  amount = 1;

  fromCurrency = 'USD';

  toCurrency = 'BRL';

  result = 0;

  currencies = [
    'USD',
    'BRL',
    'EUR',
    'GBP',
    'JPY',
    'CAD',
    'AUD'
  ];

  constructor(
    private exchangeService: ExchangeService
  ) {}

  ngOnInit() {
    this.exchangeService.getRates('USD')
      .subscribe((response: any) => {
        console.log(JSON.stringify(response, null, 2));
      });
  }

}