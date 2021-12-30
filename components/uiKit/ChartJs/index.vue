<template>
  <figure className="highcharts-figure">
    <div id="container"></div>
  </figure>
</template>

<script>
import config from '../../../config'
import dayjs from 'dayjs'
import {store, mutations} from '~/store'
import data from "~/data";

export default {
  name: "Chart",
  computed: {
    isDark() {
      return store.theme;
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
      const lastYear = dayjs(new Date().setFullYear(new Date().getFullYear() - 1)).unix()
      // try {
      //   const result = await this.$axios.$get(
      //     config.apiURL + `ticker/btc_usd/historical?start_date=${lastYear}&end_date=${now}&interval=${86400}`,
      //   );
      //   this.currencyHistory = result;
      // } catch (e) {
      //   console.error('Something went wrong')
      // }
      this.currencyHistory = data;
    },
    getPlotGradient() {
      if ((localStorage && localStorage.theme === 'light') || store.theme === 'light') {
        return {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(122, 90, 248, 0.2)'],
            [1, 'rgba(21, 53, 60, 0.02)']
          ]
        }
      } else {
        return {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(122, 90, 248, 0.2)'],
            [1, 'rgba(21, 53, 60, 0.02)']
          ]
        }
      }

    },
    createGraph(custom) {
      Highcharts.chart('container', {
        chart: {
          zoomType: 'x',
          backgroundColor: 'transparent',
          height: '204px',
          marginLeft: 0,
          marginRight: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        legend: {
          enabled: false
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderRadius: 0,
          borderWidth: 0,
          shadow: false,
          formatter: function () {
            return '<div class="chart-panel">' +
              '<div class="panel-time">' +
              '<span class="date">' + dayjs(new Date(this.x * 1000), "YYYY-MM-DD").format("DD/MM/YYYY") + '</span>' +
              '<span class="time">' + dayjs(new Date(this.x * 1000), "HH.MM.SS A").format("H.mm.ss A") + '</span>' +
              '</div>' +
              '<div class="panel-info">' +
              '<span class="label">Price:</span>' +
              '<span class="value">' + this.y.toFixed(2) + '$</span>' +
              '</div>' +
              '</div>';
          }
        },
        plotOptions: {

          series: {
            lineColor: '#7A5AF8',
            marker: {
              fillColor: '#7A5AF8',
            }
          },
          area: {
            fillColor: this.getPlotGradient(),
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
        title: {
          style: {
            color: 'transparent'
          }
        },
        xAxis: [{
          minPadding: 0,
          maxPadding: 0,
          gridLineColor: 'transparent',
          lineColor: 'transparent',
          title: {
            style: {
              color: 'transparent',
              display: 'none'
            }
          },
          labels: {
            style: {
              color: 'transparent',
              display: 'none'
            }
          },
          tickColor: 'transparent'
        }],
        yAxis: [{
          minPadding: 0,
          maxPadding: 0,
          gridLineColor: 'transparent',
          lineColor: 'transparent',
          title: {
            style: {
              color: 'transparent',
              display: 'none'
            }
          },
          labels: {
            style: {
              color: 'transparent',
              display: 'none'
            }
          }
        }],
        series: [{
          type: 'area',
          name: 'BTC to USD',
          data: custom
        }]
      });
    },
  },
  async mounted() {
    await this.getData();

    this.currencyHistory = this.currencyHistory?.data?.ratio?.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    }).map(el => [el.date, el.rate]);

    this.createGraph(this.currencyHistory)
  },
  watch: {
    isDark: function (val) {
      this.createGraph(this.currencyHistory);
    },
  }
}
</script>

<style lang="scss">
.highcharts-credits {
  display: none;
}

.chart-panel {
  padding: 16px;
  font-size: 14px;
  line-height: 24px;
  min-width: 210px;
  border-radius: 10px;
  background: var(--theme-chart-tooltop);

  .panel-time {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .time {
      color: var(--theme__card__muted);
    }
  }

  .panel-info {
    &:before {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      margin-right: 8px;
      border-radius: 4px;
      background: var(--theme__card-primary__button__bg);
    }

    .label {
      color: var(--theme__card__muted);
      margin-right: 4px;
      font-size: 14px;
      line-height: 24px;
    }
  }

  .panel-time, .panel-info {
    display: flex;
    align-items: center;

    span {
      color: var(--theme__text-color__primary);
      margin-bottom: 0;
    }

    p {
      font-size: 14px;
      line-height: 24px;
      color: var(--theme__text-secondary__secondary);
    }
  }
}


</style>
