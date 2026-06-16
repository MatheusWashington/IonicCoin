import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonToggle
  ]
})
export class ConfiguracoesPage implements OnInit {

  settings = {
    refreshRate: 3600000, // padrão: 1h
    notifyBigChanges: true
  };

  private intervalId: any;

  ngOnInit() {
    this.loadSettings();
  }

  // 🧹 limpar histórico (agora só aqui)
  clearHistory() {
    localStorage.removeItem('historicoConversoes');
    alert('Histórico apagado com sucesso!');
  }

  // 🔄 reset configs
  resetDefaults() {
    this.settings = {
      refreshRate: 3600000,
      notifyBigChanges: true
    };

    this.saveSettings();
    alert('Configurações resetadas!');
  }

  // 💾 salvar
  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  // 📥 carregar
  loadSettings() {
    const data = localStorage.getItem('settings');
    if (data) {
      this.settings = JSON.parse(data);
    }
  }

  // ⏱️ mudar frequência
  onChangeRefresh() {
    this.saveSettings();
  }

  // 🔔 toggle notificações
  onToggleNotify() {
    this.saveSettings();
  }
}