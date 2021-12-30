<template>
<div class="chart-container">
  <div class="chart-header">
    <h1 class="chart-title">
      Exchange <span>LTC to ETH</span> with Lowest Fees
    </h1>
  </div>
  <chart/>
</div>
</template>

<script>
import config from '../../../config'
import dayjs from 'dayjs'
import { store } from '~/store'
import Chart from '../../../components/uiKit/LightChart'
export default {
  name: "Charts",
  components: {
    Chart
  },
  computed: {
    isDark() {
      return store.isDark;
    }
  },
  data() {
    return {
      currencyHistory: null
    }
  },
  methods: {
    async getData() {
      const now = dayjs(new Date()).unix()
      const lastYear = dayjs(new Date().setFullYear(new Date().getFullYear()-1)).unix()
      try {
        const result = await this.$axios.$get(
          config.apiURL + `api/ticker/btc_usd/historical?start_date=${lastYear}&end_date=${now}&interval=${86400}`,
        );
        this.currencyHistory = result;
      } catch (e) {
        console.error('Something went wrong')
      }
    },
    
  },
  async mounted() {
   
  }
}
</script>

<style lang="scss">
.highcharts-credits {
  display: none;
}
.chart-container {
  margin-top: 45px;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
}
.chart-header {
  display: flex;
  justify-content: center;
  margin-bottom: 122px;
}
.chart-title {
  font-weight: bold;
  max-width: 730px;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 127%;
  & > span {
    color: #7A5AF8;
  }
  @media screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 72px;
    text-align: center;
    letter-spacing: 112%;
  }
}
</style>