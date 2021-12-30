<template>
  <div class="exchanger-card-wrap" :class="{footer: footer}">
    <div class="exchanger-card" id="exchanger-card-wrap">
      <div class="inner">
        <el-tabs class="tabs" v-model="activeTab" @tab-click="handleClick">
          <el-tab-pane label="Exchange" name="first">
            <exchange-tab />
          </el-tab-pane>
          <el-tab-pane label="Buy" name="second">
            <buy-tab />
          </el-tab-pane>
          <el-tab-pane label="Sell" name="third">
            <sell-tab />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <img
      src="~/assets/images/exchanger-gradient.png"
      alt="gradient"
      class="dark-gradient"
    />
    <img
      src="~/assets/images/hero-lightgradient.png"
      alt="gradient"
      class="light-gradient"
    />
  </div>
</template>

<script>
import Button from "../../uiKit/Button";
import Select from "../../uiKit/Select";
import Tag from "../../uiKit/Tag";
import currencies from "~/currencies";
import countries from "~/countries";
import ExchangeTab from './ExchangeTab.vue';
import BuyTab from './BuyTab.vue'
import SellTab from './SellTab.vue'

export default {
  name: "ExchangerCard",
  data() {
    return {
      activeTab: "first",
      currencies: currencies,
      countries: countries,
      currentExchangeCurrency: 1
    };
  },
  methods: {
    handleClick(tab, event) {

    },
    handleOptionChange(i) {
      this.currentExchangeCurrency = i
      this.selected = i
    }
  },
  components: {
    Button,
    Select,
    Tag,
    ExchangeTab,
    BuyTab,
    SellTab
  },
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", () => {
        if (window.innerWidth > 1120) {
          if (document.documentElement.scrollTop >= 80 && document.documentElement.scrollTop <= 400) {
            const step1 = 2 / 320;
            const val1 = 2 - (document.documentElement.scrollTop - 80) * step1;

            document.getElementById("exchanger-card-wrap").style.transform = `rotateX(${val1}deg) translateZ(0px)`;
          }
          if (document.documentElement.scrollTop < 80) {
            document.getElementById("exchanger-card-wrap").style.transform = `rotateX(2deg) translateZ(0px)`;
          }
          if (document.documentElement.scrollTop > 400) {
            document.getElementById("exchanger-card-wrap").style.transform = `rotateX(0deg) translateZ(0px)`;
          }
        }

        if (window.innerWidth <= 1120) {
          if (document.documentElement.scrollTop >= 80 && document.documentElement.scrollTop <= 240) {
            const step1 = 2 / 160;
            const val1 = 2 - (document.documentElement.scrollTop - 80) * step1;

            document.getElementById("exchanger-card-wrap").style.transform = `rotateX(${val1}deg) translateZ(0px)`;
          }
          if (document.documentElement.scrollTop < 80) {
            document.getElementById("exchanger-card-wrap").style.transform = `rotateX(2deg) translateZ(0px)`;
          }
          if (document.documentElement.scrollTop > 240) {
            document.getElementById("exchanger-card-wrap").style.transform = `rotateX(0deg) translateZ(0px)`;
          }
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

[vs-theme='dark'] .swap-icon .dark,
[vs-theme='dark'] .dark-gradient {
  display: block;
}
[vs-theme='dark'] .swap-icon .light,
[vs-theme='dark'] .light-gradient {
  display: none;
}
[vs-theme='light'] .swap-icon .light,
[vs-theme='light'] .light-gradient {
  display: block;
}
[vs-theme='light'] .swap-icon .dark,
[vs-theme='light'] .dark-gradient {
  display: none;
}

.exchanger-card-wrap {
  position: relative;
  max-width: 100vw;
  perspective: 40px;

  &.footer {
    .exchanger-card {
      transform: none !important;

      @media all and (max-width: 1200px) {
        margin-top: 72px;
      }

      @media all and (max-width: 768px) {
        margin-top: 56px;
      }
    }

    .dark-gradient, .light-gradient {
      display: none;
    }
  }

  .exchanger-card {
    position: relative;
    background: var(--theme__card-exchanger__wrapper);
    padding: 12px;
    max-width: 588px;
    margin: 0 auto;
    border-radius: 28px;
    margin-top: 148px;
    z-index: 10;
    display: block;
    transform-origin: 50% 0px;
    transform: rotateX(2deg) translateZ(0px);
    transition: transform 0.2s ease;

    .inner {
      background: var(--theme__card-exchanger__background);
      border-radius: 20px;
      padding: 32px;

      .el-tabs__header {
        margin-bottom: 32px;
      }
      .el-tabs__nav-wrap::after {
        background-color: transparent;
      }
      .el-tabs__item {
        color: var(--theme__card__muted);
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        padding: 0 16px;
        outline: none !important;

        &.is-active,
        &:hover {
          color: var(--theme__text-color__primary);
        }
      }
      .el-tabs__content {
        overflow: visible;
      }
      .el-tabs__active-bar {
        background-color: var(--primary-500);
      }

      .selects {
        position: relative;

        .swap-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: pointer;
        }
      }

      .results {
        margin-top: 32px;

        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 4px;

          .row-label {
            color: var(--theme__card__muted);

            a {
              color: var(--theme__inline-link);
            }
          }

          .value {
            color: var(--theme__text-color__primary);
          }
        }
      }

      .button {
        width: 100%;
        margin-top: 28px;
      }
    }

    @media all and (max-width: 768px) {
      padding: 4px;
      margin-top: 84px;

      .inner {
        padding: 22px 20px;

        .el-tabs__header {
          margin-bottom: 20px;
        }
        .el-tabs__item {
          font-size: 14px;
          line-height: 12px;
        }


        .results {
          margin-top: 20px;

          .row {
            font-size: 10px;
            line-height: 18px;
          }
        }

        .button {
          margin-top: 16px;
        }
      }
    }

    @media all and (max-width: 580px) {
      margin: 0 -4px;
      margin-top: 92px;
    }
  }

  .dark-gradient, .light-gradient  {
    position: absolute;
    height: 200%;
    max-width: 100vw;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1;
  }

  @media screen and (min-width: 1200px) {
    &.footer {
      .exchanger-card {
        margin-top: 72px;
        max-width: 100%;

        .inner {
          .tab-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &.buy-tab {
              .selects {
                .select-wrap {
                  flex: 0 0 calc(50% - 12px);
                }

                .chips {
                  display: none;
                }
              }
            }

            &.sell-tab {
              .selects {
                .select-wrap {
                  flex: 0 0 calc(50% - 12px);
                }
              }
            }

            .selects {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              flex: 0 0 calc(100% - 244px - 24px);
              height: 64px;

              .swap-icon {
                transform-origin: center center;
                transform: rotate(90deg) translate3d(-50%, 50%, 0);
              }

              .select-wrap {
                flex: 0 0 calc(50% - 46px);
                padding: 6px 16px;
                height: 64px;
                margin: 0;
              }
            }

            .results {
              display: none;
            }

            .button {
              flex: 0 0 244px;
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
