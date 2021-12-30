import BUSD from "./assets/currencies/Binance USD (BUSD).svg";
import BTC from "./assets/currencies/Bitcoin (BTC).svg";
import BCH from "./assets/currencies/Bitcoin Cash (BCH).svg";
import DAI from "./assets/currencies/Dai (DAI).svg";
import DOGE from "./assets/currencies/Dogecoin (DOGE).svg";
import ETH from "./assets/currencies/Ethereum (ETH).svg";
import LTC from "./assets/currencies/Litecoin (LTC).svg";
import XMR from "./assets/currencies/Monero (XMR).svg";
import PAX from "./assets/currencies/Paxos Standard (PAX).svg";
import USDT from "./assets/currencies/Tether (USDT).svg";
import TRX from "./assets/currencies/TRON (TRX).svg";
import TUSD from "./assets/currencies/TrueUSD (TUSD).svg";
import USDC from "./assets/currencies/USD Coin (USDC).svg";
import XRP from "./assets/currencies/XRP (XRP).svg";
import EURO from "./assets/currencies/euro.svg";
import USD from "./assets/currencies/usd.svg";

export default {
  fiat: [
    {
      value: 'USD',
      label: 'US Dollar',
      photo: USD,
      abb: 'USD',
      sign: '$'
    },
    {
      value: 'EUR',
      label: 'EURO',
      photo: EURO,
      abb: 'EUR',
      sign: '€'
    },
  ],
  crypto:  [
    {
      value: 'BUSD',
      label: 'Binance USD',
      photo: BUSD,
      abb: 'BUSD',
    },
    {
      value: 'BTC',
      label: 'Bitcoin',
      photo: BTC,
      abb: 'BTC',
    },
    {
      value: 'BCH',
      label: 'Bitcoin Cash',
      photo: BCH,
      abb: 'BCH',
    },
    {
      value: 'DAI',
      label: 'Dai',
      photo: DAI,
      abb: 'DAI'
    },
    {
      value: 'DOGE',
      label: 'Dogecoin',
      photo: DOGE,
      abb: 'USD',
    },
    {
      value: 'ETH',
      label: 'Ethereum',
      photo: ETH,
      abb: 'ETH',
    },
    {
      value: 'LTC',
      label: 'Litecoin',
      photo: LTC,
      abb: 'LTC',
    },
    {
      value: 'XMR',
      label: 'Monero',
      photo: XMR,
      abb: 'XMR',
    },
    {
      value: 'PAX',
      label: 'Paxos Standard',
      photo: PAX,
      abb: 'PAX',
    },
    {
      value: 'USDT',
      label: 'Tether',
      photo: USDT,
      abb: 'USDT'
    },
    {
      value: 'TRX',
      label: 'TRON',
      photo: TRX,
      abb: 'TRX',
    },
    {
      value: 'TUSD',
      label: 'TrueUSD',
      photo: TUSD,
      abb: 'TUSD',
    },
    {
      value: 'USDC',
      label: 'USD Coin',
      photo: USDC,
      abb: 'USDC',
    },
    {
      value: 'XRP',
      label: 'XRP',
      photo: XRP,
      abb: 'XRP',
    },
  ]
}
