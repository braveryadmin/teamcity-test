<template>
  <Container>
    <div class="index-monitoring">
      <PageSectionHeader :heading="heading" />
      <div class="monitoring-card">
        <div class="inner">
          <div class="stats">
            <div class="group">
              <span class="number">{{speed}}</span>
              <span class="label">Avg. transaction speed</span>
            </div>
            <div class="group">
              <span class="number">{{errors}}</span>
              <span class="label"># of tech. errors today</span>
            </div>
            <div class="group">
              <span class="number">{{time}}</span>
              <span class="label">Avg. support response time</span>
            </div>
            <div class="group">
              <span class="number">{{reserve}}</span>
              <span class="label">Our current BTC reserve</span>
            </div>
          </div>
          <div class="chart">
            <div class="header">
              <span class="h3">
                How much would you make if you bought 1 BTC a year ago
              </span>
              <Paragraph size="sm">
                Don’t miss an opportunity like this.
              </Paragraph>
              <div class="price-change">
                <span class="usd">+50544,61 $</span>
                <span class="percent">+329.66%</span>
              </div>
            </div>
            <ChartJs />
          </div>
        </div>
      </div>
      <div class="index-monitoring-stars">
        <img id="index-monitoring-1" src="~/assets/icons/star.svg" alt="Star" />
        <img id="index-monitoring-2" src="~/assets/icons/star.svg" alt="Star" />
      </div>
      <img
        src="~/assets/images/monitor-gradient.png"
        alt="monitor"
        class="gradient"
      />
    </div>
  </Container>
</template>

<script>
import Container from "../../uiKit/Container";
import Paragraph from "../../uiKit/Paragraph";
import PageSectionHeader from "../../indexPage/PageSectionHeader";
import ChartJs from "../../uiKit/ChartJs";

export default {
  name: "Monitoring",
  components: {
    Container,
    PageSectionHeader,
    Paragraph,
    ChartJs
  },
  props: {
    heading: String,
    speed: String,
    errors: String,
    time: String,
    reserve: String
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

[vs-theme='light'] .index-monitoring .gradient {
  opacity: 0.35;
}

.index-monitoring {
  margin-bottom: 224px;
  position: relative;
  max-width: 100vw;


  .index-monitoring-stars {
    @media all and (max-width: 1024px) {
      display: none;
    }

    #index-monitoring-1 {
      position: absolute;
      width: 138px;
      height: 138px;
      top: 20%;
      left: -3%;
      z-index: 100;
    }
    #index-monitoring-2 {
      position: absolute;
      width: 230px;
      height: 230px;
      top: 25%;
      right: -15%;
      z-index: 100;
    }

    @media all and (max-width: 768px) {
      #index-star-1 {
        display: none;
      }
      #index-star-2 {
        width: 54px;
        height: 54px;
        top: 10%;
        left: 2%;
      }
      #index-star-3 {
        width: 91px;
        height: 91px;
        top: 25%;
        right: -5%;
      }
    }
  }

  .monitoring-card {
    position: relative;
    padding: 12px;
    border-radius: 28px;
    margin-top: 72px;
    margin-left: -12px;
    margin-right: -12px;
    background: var(--theme__card-gradient__wrapper);
    z-index: 2;

    .inner {
      display: flex;
      border-radius: 20px;
      min-height: 408px;
      background: var(--theme__card-gradient__background);

      .stats {
        width: calc(100% - 486px);
        display: flex;
        flex-wrap: wrap;
        padding-top: 72px;
        padding-bottom: 72px;
        padding-left: 72px;
        padding-right: 0;

        .group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 0 0 50%;

          &:nth-child(1) {
            margin-bottom: 72px;
          }
          &:nth-child(2) {
            margin-bottom: 72px;
          }

          .number {
            font-size: 46px;
            font-weight: 700;
            line-height: 53px;
            color: var(--theme__text-color__headings);
            margin-bottom: 12px;
          }

          .label {
            font-size: 18px;
            line-height: 28px;
            color: var(--theme__monitoring-text-color);
          }
        }
      }

      .chart {
        width: 486px;
        padding-top: 48px;
        background: var(--theme__card-gradient__chart);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        .header {
          padding: 0 70px;
          text-align: center;

          .h3 {
            margin-bottom: 4px;
          }

          p {
            color: var(--theme__monitoring-text-color);
            margin-bottom: 4px;
          }

          .price-change {
            margin-top: 4px;
            font-size: 14px;
            line-height: 24px;
            color: var(--theme__monitoring-text-color);

            .percent {
              color: var(--success-500);
              margin-left: 8px;
            }
          }
        }
      }
    }
  }

  .gradient {
    position: absolute;
    height: 200%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1;
    max-width: 100vw;
  }

  @media all and (max-width: 1024px) {
    .monitoring-card {
      .inner {
        flex-wrap: wrap;

        .stats {
          width: 100%;
        }

        .chart {
          width: 100%;
          border-radius: 0;

          & > :last-child {
            & > div {
              width: 100% !important;
            }
          }
        }
      }
    }
  }

  @media all and (max-width: 768px) {
    margin-bottom: 84px;

    .monitoring-card {
      margin-top: 48px;

      .inner {
        flex-wrap: wrap;

        .stats {
          padding: 20px;
          padding-bottom: 0;

          .group {
            margin-bottom: 40px !important;

            .number {
              font-size: 24px;
              line-height: 26px;
            }

            .label {
              font-size: 10px;
              line-height: 18px;
            }
          }
        }

        .chart {
          padding: 24px 20px 0 20px;

          .header {
            padding: 0;
          }
        }
      }
    }
  }
}

</style>
