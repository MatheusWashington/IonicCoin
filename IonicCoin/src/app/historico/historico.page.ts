import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton
  ]
})
export class HistoricoPage {

  historico: any[] = [];

  ionViewWillEnter() {
    this.historico = JSON.parse(
      localStorage.getItem('historicoConversoes') || '[]'
    ).reverse();
  }

  clearHistory() {
    localStorage.removeItem('historicoConversoes');
    this.historico = [];
  }
}