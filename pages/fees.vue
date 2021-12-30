<template>
  <body vs-theme="dark">
    <div id="app" class="index fees" style="overflow-x: hidden;">
      <Header/>
      <breadcrumbs :items="breadcrumbs"/> 
      <h1 class="fees-title">Fees</h1>
      <div class="container">
        <div class="tables">
          <data-table 
          :show-header="false"
          :table-data="firstTableData"
          ref="table"
          :columns="firstTableColumns"
        >
        </data-table>
        <data-table 
          :show-header="false"
          :table-data="secondTableData"
          ref="table"
          :columns="secondTableColumns"
        >
        </data-table>
        <data-table 
          :show-header="true"
          :table-data="thirdTableData"
          ref="table"
          :columns="thirdTableColumns"
        >
        </data-table>
        <data-table 
          :show-header="true"
          :table-data="fouthTableData"
          ref="table"
          :columns="fouthTableColumns"
        >
        </data-table>
        </div>
      </div>
      <FooterExchange
        :is-inline="true"
        :head="'Exchange and purchase cryptocurrencies'"
      />
      <Footer />
    </div>
  </body>
</template>

<script>
import Header from "../components/indexPage/Header";
import Footer from "../components/indexPage/Footer";
import Breadcrumbs from '../components/uiKit/Breadcrumbs';
import FooterExchange from "../components/indexPage/FooterExchange";
import DataTable from '../components/uiKit/Table'

export default {
  name: "fees",
  components: {
    Header,
    DataTable,
    FooterExchange,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      width: null,
      breadcrumbs: [
        {
          link: '/',
          name: 'Home'
        },
        {
          name: 'Fees'
        },
      ],
      firstTableColumns: [
        {
          prop: "label",
          label: "Name",
          minWidth: "100",
        },
        {
          prop: "value",
          label: "Email",
          minWidth: "100"
        },
      ],
      firstTableData: [
        {
          label: 'Account opening',
          value: 'Free'
        },
        {
          label: 'Monthly maintenance',
          value: 'Free'
        },
      ],
      secondTableColumns: [
        {
          prop: "label",
          label: "Name",
          minWidth: "100",
        },
        {
          prop: "value",
          label: "Email",
          minWidth: "100"
        },
      ],
      secondTableData: [
        {
          label: 'Transfer to Beaver Dealer user',
          value: '0.5%'
        },
        {
          label: 'Сurrency conversion',
          value: 'internal exchange rate'
        },
      ],
      thirdTableColumns: [
        {
          prop: "load",
          label: "Account load",
          minWidth: "100",
        },
        {
          prop: "currency",
          label: "Currency",
          minWidth: "100"
        },
        {
          prop: "fee",
          label: "Fee",
          minWidth: "100"
        },
      ],
      thirdTableData: [
        {
          load: 'SEPA transfer',
          currency: 'EUR',
          fee: 'from 1.5%'
        },
        {
          load: 'SWIFT transfer',
          currency: 'EUR/USD',
          fee: 'from 1.5%'
        },
        {
          load: 'Credit/Debit Cards',
          currency: 'EUR/USD',
          fee: '5%'
        },
        {
          load: 'Cryptocurrencies and tokens',
          currency: 'BTC, ETH, LTC, BCH, XMR, XRP,TRX, DOGE, USDT, DAI, BUSD, USDC, PAX, TUSD',
          fee: '0.5%'
        },
      ],
      fouthTableColumns: [
        {
          prop: "load",
          label: "Account withdrawal",
          minWidth: "100",
        },
        {
          prop: "currency",
          label: "Currency",
          minWidth: "100"
        },
        {
          prop: "fee",
          label: "Fee",
          minWidth: "100"
        },
      ],
      fouthTableData: [
        {
          load: 'SEPA transfer',
          currency: 'EUR',
          fee: 'from 1.5%'
        },
        {
          load: 'SWIFT transfer',
          currency: 'EUR/USD',
          fee: 'from 1.5%'
        },
        {
          load: {
            value: 'Credit/Debit Cards',
            images: [
              require('~/assets/icons/visa.svg'),
              require('~/assets/icons/master-card.svg'),
            ],
          },
          currency: 'EUR/USD',
          fee: '5%'
        },
        {
          load: 'Cryptocurrencies and tokens',
          currency: 'BTC, ETH, LTC, BCH, XMR, XRP,TRX, DOGE, USDT, DAI, BUSD, USDC, PAX, TUSD',
          fee: '0.5%'
        },
      ]
    }
  },
  methods: {
    updateWidth() {
      if (process.browser){
        this.width = window.innerWidth
        console.log('window', this.width)
      }
    },
  },
  created() {
    if (process.browser){
      window.addEventListener('resize', this.updateWidth)
      this.updateWidth()
    }
  },
  beforeMount: () => {
    // themeSwitcher();
  },
  head: {
    title: "Beaver Dealer. Fees.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "There will be a superfast cryptocurrency exchanger with KYC and transparent commissions."
      }
    ]
  }
}
</script>

<style lang="scss">
  .fees-title {
    text-align: center;
    margin-top: 0;
    margin-bottom: 64px;

    @media screen and (min-width: 768px) {
      margin-bottom: 88px;
    }
  }
  .tables {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0;
    margin-bottom: 96px;
    @media screen and (min-width: 768px) {
      margin-bottom: 224px;
      padding: 0 70px;
    }
  }

  .fees {
    .el-table__cell:first-child .cell {
      padding-left: 0 !important;
    }
    .el-table__cell:last-child .cell {
      padding-right: 0 !important;
    }
  }
</style>