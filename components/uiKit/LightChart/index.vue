<template>
	<div class="mainChartContainer">
		<div class="currencyName">
			LTC/ETH
		</div>
		<div class="currencyInfo">
			<div>
				<div class="currentPrice">$56,194.80</div>
				<div class="priceChange">-$48.3 (-0.09%)</div>
			</div>
			<div class="minMaxPrices">
				<div>
					<div class="avaragePrice">13.85000</div>
					<div class="avaragePriceDesc">
						<span class="minPrice">Min</span> price (24h)
					</div>
				</div>
				<div>
					<div class="avaragePrice">13.85000</div>
					<div class="avaragePriceDesc">
						<span class="maxPrice">Max</span> price (24h)
					</div>
				</div>
			</div>
		</div>
		<div id="tw-chart">

  	</div>
		<!-- <div class="rangeSwitcher">
			<div class="dateButton active">1D</div>
			<div class="dateButton">1W</div>
			<div class="dateButton">1M</div>
			<div class="dateButton">6M</div>
			<div class="dateButton">1Y</div>
		</div> -->
	</div>
</template>

<script>
import config from '../../../config'
import dayjs from 'dayjs'
export default {
  name: "Chart",
  data() {
    return {
			currencyHistory: []
    }
  },
	methods: {
		async getData(startDate, endDate) {
      try {
        const result = await this.$axios.$get(
          config.apiURL + `ticker/btc_usd/historical?start_date=${startDate}&end_date=${endDate}&interval=${86400}`,
        );
        this.currencyHistory = result.data;
				console.log(result)
      } catch (e) {
        console.error('Something went wrong')
      }
    },
		async getSortedData(period) {
			const now = dayjs(new Date()).unix()
			let startDate = dayjs(new Date().setFullYear(new Date().getFullYear()-1)).unix()
			console.log(period, 'here')
			switch (period) {
				case '1D':
					startDate = dayjs().add(-1, 'day').unix()
					break;
			
				case '1W':
					startDate = dayjs().add(-1, 'week').unix()
					break;
				case '1M':
					console.log(dayjs().add(-1, 'month'))
					startDate = dayjs().add(-1, 'month').unix()
					break;
				case '1Y':
					console.log(dayjs().add(-1, 'year'))
					startDate = dayjs().add(-1, 'year').unix()
					break;
				default:
					break;
			}
      
			await this.getData(startDate, now)
			return this.currencyHistory = this.currencyHistory?.ratio?.sort((a,b) => {
				if (a.date < b.date) return -1;
				if (a.date > b.date) return 1;
				return 0;
			}).map(el => (
				{
					time: dayjs(el.date*1000).format('YYYY-MM-DD'), 
					value: +el.rate.toFixed(2)
				}
			));
		}
  },
  async mounted() {
		function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
			var switcherElement = document.createElement('div');
			switcherElement.classList.add('switcher');
			var intervalElements = items.map(function(item) {
				var itemEl = document.createElement('button');
				itemEl.innerText = item;
				itemEl.classList.add('switcher-item');
				itemEl.classList.toggle('switcher-active-item', item === activeItem);
				itemEl.addEventListener('click', function() {
					onItemClicked(item);
				});
				switcherElement.appendChild(itemEl);
				return itemEl;
			});
			function onItemClicked(item) {
				console.log(item)
				if (item === activeItem) {
					return;
				}
				intervalElements.forEach(function(element, index) {
					element.classList.toggle('switcher-active-item', items[index] === item);
				});
				activeItem = item;
				activeItemChangedCallback(item);
			}
			return switcherElement;
		}
		var intervals = ['1D', '1W', '1M', '1Y'];
		
		var switcherElement = createSimpleSwitcher(intervals, intervals[0], syncToInterval);
		
		var chartElement = document.getElementById('tw-chart');

		var chart = LightweightCharts.createChart(chartElement, {
			width: 0,
			height: 300,
			localization: {
				locale: 'es-ES',
				dateFormat: 'dd MMM \'yy',
			},
			layout: {
				backgroundColor: 'transparent',
				textColor: '#7F90B4',
			},
			grid: {
				vertLines: {
					color: '#C9D6F1',
					style: 2
				},
				horzLines: {
					visible: false,
				},
			},
			rightPriceScale: {
				borderVisible: false,
			},
			timeScale: {
				borderVisible: false,
			},
			crosshair: {
				horzLine: {
					visible: false,
				},
			},
		});

		chartElement.appendChild(switcherElement);
		var areaSeries = null;
		var self = this
		async function syncToInterval(interval) {
			if (areaSeries) {
				chart.removeSeries(areaSeries);
				areaSeries = null;
			}
			areaSeries = chart.addAreaSeries({
				topColor: 'rgba(122, 90, 248, 0.2)',
				bottomColor: 'rgba(21, 53, 60, 0.02)',
				lineColor: 'rgba(122, 90, 248, 1)',
				lineWidth: 2,
			});
			areaSeries.setData(await self.getSortedData(interval));
		}
		syncToInterval(intervals[0]);
		}
}
</script>

<style lang="scss">
  .mainChartContainer {
		display: flex;
		flex-direction: column;
		margin-bottom: 230px;
	}
	.currencyName {
		font-size: 18px;
		line-height: 28px;
		color: var(--theme__text-color__headings);
		margin-bottom: 26px;
	}
	.currencyInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.minMaxPrices {
		display: flex;
		flex-direction: row;
		:first-child {
			margin-left: 48px;
		}
	}
	.currentPrice {
		font-weight: bold;
		font-size: 32px;
		line-height: 38px;
		letter-spacing: 119%;
		color: var(--theme__text-color__headings);
		margin-bottom: 4px;
	}
	.priceChange {
		font-size: 14px;
		line-height: 24px;
		color: #F04438;
		margin-bottom: 33px;
	}
	.avaragePrice {
		font-weight: bold;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 156%;
		color: var(--theme__text-color__headings);
		text-align: right;
	}
	.avaragePriceDesc {
		font-size: 14px;
		line-height: 24px;
		color: #7F90B4;
	}
	.minPrice {
		color: #F04438
	}
	.maxPrice {
		color: #12B76A
	}
	.rangeSwitcher {
		margin-top: 32px;
		display: flex;
		& > :not(:last-child) {
			margin-right: 60px;
		}
	}
	.dateButton {
		padding: 3px 6px;
		font-size: 14px;
		line-height: 24px;
		color: #7F90B4;
		cursor: pointer;
		&.active {
			background: #C9D6F1;
			border-radius: 10px;
		}
	}
	.switcher {
		display: flex;
		align-items: center;
		height: 30px;
		margin-top: 8px;
	}

	.switcher-item {
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
		padding: 6px 8px;
		font-size: 14px;
		line-height: 24px;
		color: var(--chart-range-color);
		background-color: transparent;
		margin-right: 8px;
		border: none;
		border-radius: 10px;
		outline: none;
	}

	.switcher-active-item {
		text-decoration: none;
		cursor: default;
	}

	.switcher-active-item,
	.switcher-active-item:hover {
		background: var(--chart-range-bg);
	}

</style>