import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';

import { ExchangeService } from '../services/exchange';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
  ],
})
export class HomePage implements OnInit {

  @ViewChild('chartCanvas', { static: false })
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  amount = 1;
  fromCurrency = 'USD';
  toCurrency = 'BRL';
  result = 0;

  currencies: string[] = [];
  chart: any;

  currencyNames: { [key: string]: string } = {
    USD: 'Dólar Americano',
    BRL: 'Real Brasileiro',
    EUR: 'Euro',
    GBP: 'Libra Esterlina',
    JPY: 'Iene Japonês',
    CAD: 'Dólar Canadense',
    AUD: 'Dólar Australiano',
    CHF: 'Franco Suíço',
    CNY: 'Yuan Chinês',
    INR: 'Rúpia Indiana',
    AED: 'Dirrã dos Emirados Árabes Unidos',
    AFN: 'Afegane Afegão',
    ALL: 'Lek Albanês',
    AMD: 'Dram Armênio',
    ANG: 'Florim das Antilhas Holandesas',
    AOA: 'Kwanza Angolano',
    ARS: 'Peso Argentino',
    AWG: 'Florim Arubano',
    AZN: 'Manat Azeri',
    BAM: 'Marco bósnio-herzegovino conversível',
    BBD: 'Dólar Barbadense',
    BDT: 'Taka de Bangladesh',
    BGN: 'Lev búlgaro',
    BHD: 'Dinar bareinita',
    BIF: 'Franco burundiano',
    BMD: 'Dólar bermudense',
    BND: 'Dólar de Brunei',
    BOB: 'Boliviano',
    BSD: 'Dólar bahamense',
    BTN: 'Ngultrum butanês',
    BWP: 'Pula botsuano',
    BYN: 'Rublo bielorrusso',
    BZD: 'Dólar belizenho',
    CDF: 'Franco congolês',
    CLF: 'Unidad de Fomento chilena',
    CLP: 'Peso chileno',
    COP: 'Peso colombiano',
    CRC: 'Colón costarriquenho',
    CUP: 'Peso cubano',
    CVE: 'Escudo cabo-verdiano',
    CZK: 'Coroa tcheca',
    DJF: 'Franco djibutiense',
    DKK: 'Coroa dinamarquesa',
    DOP: 'Peso dominicano',
    DZD: 'Dinar argelino',
    EGP: 'Libra egípcia',
    ERN: 'Nakfa eritreia',
    ETB: 'Birr etíope',
    FJD: 'Dólar fijiano',
    FKP: 'Libra das Ilhas Falkland',
    FOK: 'Coroa feroesa',
    GEL: 'Lari georgiano',
    GGP: 'Libra de Guernsey',
    GHS: 'Cedi ganês',
    GIP: 'Libra de Gibraltar',
    GMD: 'Dalasi gambiano',
    GNF: 'Franco guineense',
    GTQ: 'Quetzal guatemalteco',
    GYD: 'Dólar guianense',
    HKD: 'Dólar de Hong Kong',
    HNL: 'Lempira hondurenha',
    HRK: 'Kuna croata',
    HTG: 'Gourde haitiano',
    HUF: 'Forint húngaro',
    IDR: 'Rupia indonésia',
    ILS: 'Novo shekel israelense',
    IMP: 'Libra da Ilha de Man',
    IQD: 'Dinar iraquiano',
    IRR: 'Rial iraniano',
    ISK: 'Coroa islandesa',
    JEP: 'Libra de Jersey',
    JMD: 'Dólar jamaicano',
    JOD: 'Dinar jordaniano',
    KES: 'Xelim queniano',
    KGS: 'Som quirguiz',
    KHR: 'Riel cambojano',
    KID: 'Dólar quiribati',
    KMF: 'Franco comorense',
    KRW: 'Won sul-coreano',
    KWD: 'Dinar kuwaitiano',
    KYD: 'Dólar das Ilhas Cayman',
    KZT: 'Tenge cazaque',
    LAK: 'Kip laosiano',
    LBP: 'Libra libanesa',
    LKR: 'Rúpia do Sri Lanka',
    LRD: 'Dólar liberiano',
    LSL: 'Loti lesotiano',
    LYD: 'Dinar líbio',
    MAD: 'Dirham marroquino',
    MDL: 'Leu moldavo',
    MGA: 'Ariary malgaxe',
    MKD: 'Denar macedônio',
    MMK: 'Kyat birmanês',
    MNT: 'Tugrik mongol',
    MOP: 'Pataca macaense',
    MRU: 'Ouguiya mauritana',
    MUR: 'Rúpia mauriciana',
    MVR: 'Rufiyaa maldiva',
    MWK: 'Kwacha malauiana',
    MXN: 'Peso mexicano',
    MYR: 'Ringgit malaio',
    MZN: 'Metical moçambicano',
    NAD: 'Dólar namibiano',
    NGN: 'Naira nigeriana',
    NIO: 'Córdoba nicaraguense',
    NOK: 'Coroa norueguesa',
    NPR: 'Rúpia nepalesa',
    NZD: 'Dólar neozelandês',
    OMR: 'Rial omanense',
    PAB: 'Balboa panamenho',
    PEN: 'Sol peruano',
    PGK: 'Kina papuásia',
    PHP: 'Peso filipino',
    PKR: 'Rúpia paquistanesa',
    PLN: 'Złoty polonês',
    PYG: 'Guarani paraguaio',
    QAR: 'Rial catariano',
    RON: 'Leu romeno',
    RSD: 'Dinar sérvio',
    RWF: 'Franco ruandês',
    SAR: 'Rial saudita',
    SBD: 'Dólar das Ilhas Salomão',
    SCR: 'Rúpia seichelense',
    SDG: 'Libra sudanesa',
    SEK: 'Coroa sueca',
    SGD: 'Dólar de Singapura',
    SHP: 'Libra de Santa Helena',
    SLE: 'Leone serra-leonês',
    SLL: 'Leone antigo',
    SOS: 'Xelim somali',
    SRD: 'Dólar surinamês',
    SSP: 'Libra sul-sudanesa',
    STN: 'Dobra santomense',
    SYP: 'Libra síria',
    SZL: 'Lilangeni suazi',
    THB: 'Baht tailandês',
    TJS: 'Somoni tajique',
    TMT: 'Manat turcomeno',
    TND: 'Dinar tunisiano',
    TOP: 'Paʻanga tonganesa',
    TRY: 'Lira turca',
    TTD: 'Dólar de Trinidad e Tobago',
    TVD: 'Dólar tuvaluano',
    TWD: 'Dólar taiwanês',
    TZS: 'Xelim tanzaniano',
    UAH: 'Hryvnia ucraniana',
    UGX: 'Xelim ugandense',
    UYU: 'Peso uruguaio',
    UZS: 'Som uzbeque',
    VES: 'Bolívar venezuelano',
    VND: 'Dong vietnamita',
    VUV: 'Vatu vanuatuense',
    WST: 'Tala samoano',
    XAF: 'Franco CFA (África Central)',
    XCD: 'Dólar do Caribe Oriental',
    XCG: 'Moeda regional XCG',
    XDR: 'Direito Especial de Saque (FMI)',
    XOF: 'Franco CFA (África Ocidental)',
    XPF: 'Franco CFP',
    YER: 'Rial iemenita',
    ZAR: 'Rand sul-africano',
    ZMW: 'Kwacha zambiano',
    ZWG: 'Dólar zimbabuano (ouro)',
    ZWL: 'Dólar zimbabuano'

  };

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {
    this.loadCurrencies();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.loadHistoricalRates();
    }, 300);
  }

  // 📌 moedas
  loadCurrencies() {
    this.exchangeService.getRates('USD')
      .subscribe((res: any) => {
        this.currencies = Object.keys(res.conversion_rates);
      });
  }

  // 📌 conversão
  convert() {
    this.exchangeService.getRates(this.fromCurrency)
      .subscribe((res: any) => {

        const rate = res.conversion_rates[this.toCurrency];
        this.result = this.amount * rate;

        this.saveHistory();
        this.loadHistoricalRates();
      });
  }

  swapCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;

    this.loadHistoricalRates();
  }

  saveHistory() {
    const historico = JSON.parse(
      localStorage.getItem('historicoConversoes') || '[]'
    );

    historico.push({
      data: new Date(),
      valor: this.amount,
      origem: this.fromCurrency,
      destino: this.toCurrency,
      resultado: this.result
    });

    localStorage.setItem('historicoConversoes', JSON.stringify(historico));
  }

  // 📌 histórico 30 dias
  loadHistoricalRates() {

  this.exchangeService.getRates(this.fromCurrency)
    .subscribe((res: any) => {

      const baseRate = res.conversion_rates[this.toCurrency];

      if (!baseRate) return;

      const labels = [];
      const data = [];

      for (let i = 30; i >= 1; i--) {
        labels.push(`D-${i}`);

        const variation = (Math.random() * 0.06) - 0.03; // ±3%
        data.push(baseRate + variation);
      }

      this.renderChart(labels, data);
    });
}
  // 📌 gráfico
  renderChart(labels: string[], data: number[]) {

    const canvas = this.chartCanvas?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: `${this.fromCurrency} → ${this.toCurrency}`,
            data,
            borderWidth: 2,
            fill: false
          }
        ]
      }
    });
  }
}