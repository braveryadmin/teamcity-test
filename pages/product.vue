<template>
  <body vs-theme="dark">
    <div id="app" class="index container" style="overflow-x: hidden;">
      <Header />
      <breadcrumbs :items="breadcrumbs"/> 
      <chart/>
      <monitoring/>
      <!-- <how-to/> -->
      <faq/>
      <div class="learn-more-c">
        <learn-more-block />
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
import FooterExchange from "../components/indexPage/FooterExchange";
import Monitoring from '../components/productPage/monitoring'
import Faq from '../components/productPage/faq'
import LearnMoreBlock from '../components/uiKit/LearnMoreBlock'
import Breadcrumbs from '../components/uiKit/Breadcrumbs'
import Chart from '../components/productPage/chart'
import HowTo from '../components/productPage/howTo'

export default {
  name: "product",
  components: {
    Header,
    FooterExchange,
    Footer,
    Monitoring,
    Faq,
    LearnMoreBlock,
    Breadcrumbs,
    Chart,
    HowTo
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
          name: 'All cryptocurrencies',
          link: '/'
        },
        {
          name: 'Exchange LTC to ETH with Lowest Fees',
        }
      ],
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
  head: {
    title: "Beaver Dealer. Products.",
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
  .learn-more-c {
    margin-bottom: 224px;
  }
</style>