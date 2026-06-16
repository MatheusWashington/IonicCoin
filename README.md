# IonicCoin

## Sobre o Projeto

O IonicCoin é uma aplicação mobile desenvolvida com Ionic e Angular que permite a conversão de moedas em tempo real utilizando dados fornecidos por uma API de câmbio. O aplicativo foi projetado para oferecer uma experiência simples e intuitiva, permitindo que usuários acompanhem cotações, realizem conversões e consultem o histórico de operações realizadas.

## Objetivos

O principal objetivo do IonicCoin é fornecer uma ferramenta prática para conversão de moedas estrangeiras, disponibilizando informações atualizadas sobre taxas de câmbio e recursos que auxiliam o usuário na tomada de decisões financeiras.

## Funcionalidades

### Conversão de Moedas
- Conversão entre diversas moedas internacionais.
- Taxas de câmbio obtidas em tempo real por meio de API externa.
- Exibição imediata do resultado da conversão.

### Inversão de Moedas
- Botão para inverter rapidamente a moeda de origem e destino.
- Atualização automática do resultado da conversão.

### Histórico de Conversões
- Armazenamento local das conversões realizadas.
- Exibição organizada das operações anteriores.
- Consulta rápida de valores, moedas e datas das conversões.

### Gráfico de Variação Cambial
- Visualização gráfica da evolução da taxa de câmbio.
- Exibição das flutuações de valor nos últimos 30 dias.
- Auxílio na análise do comportamento das moedas ao longo do tempo.

### Configurações
- Limpeza do histórico de conversões.
- Definição da frequência de atualização das taxas de câmbio.
- Configuração de notificações para variações significativas nas taxas.
- Restauração das configurações padrão do aplicativo.

## Tecnologias Utilizadas

- Ionic Framework
- Angular
- TypeScript
- HTML5
- SCSS
- Chart.js
- Local Storage
- API de Câmbio

## Estrutura do Projeto

```text
src/
├── app/
│   ├── home/
│   │   ├── home.page.ts
│   │   ├── home.page.html
│   │   └── home.page.scss
│   │
│   ├── historico/
│   │   ├── historico.page.ts
│   │   ├── historico.page.html
│   │   └── historico.page.scss
│   │
│   ├── configuracoes/
│   │   ├── configuracoes.page.ts
│   │   ├── configuracoes.page.html
│   │   └── configuracoes.page.scss
│   │
│   ├── services/
│   │   └── exchange.ts
│   │
│   └── tabs/
│       ├── tabs.page.ts
│       └── tabs.page.html
```
## Imagens das telas

### Tela 1 - Conversão

<img width="488" height="605" alt="image" src="https://github.com/user-attachments/assets/ed50ebd6-a1d3-4896-b1d1-d4805f74b5ff" />

### Tela 2 - Histórico

<img width="486" height="602" alt="image" src="https://github.com/user-attachments/assets/fc0914ce-326d-4cd8-b25a-79498158deaa" />


### Tela 3 - Configurações

<img width="489" height="602" alt="image" src="https://github.com/user-attachments/assets/56c41244-da2e-4b9d-a640-cd876af5477d" />


## Instalação

### Clonar o Repositório

```bash
git clone <https://github.com/MatheusWashington/IonicCoin.git>
```

### Acessar o Projeto

```bash
cd ioniccoin
```

### Instalar Dependências

```bash
npm install
```

### Executar o Projeto

```bash
ionic serve
```

O aplicativo será iniciado normalmente em ambiente de desenvolvimento.

## Requisitos

- Node.js
- NPM
- Ionic CLI

Instalação do Ionic CLI:

```bash
npm install -g @ionic/cli
```

## Autor

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Mobile utilizando Ionic e Angular. Feito por Matheus Washington Clementino de Almeida, matrícula 01808754.

## Licença

MIT.
