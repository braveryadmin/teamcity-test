<template>
  <div class="tab-container">
    <div class="selects">
      <Select
        :options="options1"
        :isReceive="false"
        :currentOptionValue="cryptoCurrentOption1Value"
        @onOptionChange="handleOptionChange1"
      />
      <Select
        :options="options2"
        :isReceive="true"
        :currentOptionValue="cryptoCurrentOption2Value"
        @onOptionChange="handleOptionChange2"
      />
      <div class="swap-icon" @click="handleSwapClick">
        <img
          src="~/assets/icons/swap.svg"
          alt="swap"
          class="dark"
        />
        <img
          src="~/assets/icons/swap-light.svg"
          alt="swap"
          class="light"
        />
      </div>
    </div>
    <div class="results">
      <div class="row">
        <span class="row-label">1 {{getOptionByValue(currencies.crypto, cryptoCurrentOption1Value).abb}} cost</span>
        <span class="value">4,547.8841918 {{getOptionByValue(currencies.crypto, cryptoCurrentOption2Value).abb}}</span>
      </div>
      <div class="row">
        <span class="row-label">1 {{getOptionByValue(currencies.crypto, cryptoCurrentOption2Value).abb}} cost</span>
        <span class="value">0.0002199 {{getOptionByValue(currencies.crypto, cryptoCurrentOption1Value).abb}}</span>
      </div>
      <div class="row">
        <span class="row-label">See all load options <a href="#">here</a>.</span>
      </div>
    </div>
    <Button color="primary" size="xl">
      Exchange now
    </Button>
  </div>
</template>

<script>
import Button from "../../uiKit/Button";
import Select from "../../uiKit/Select";
import Tag from "../../uiKit/Tag";
import currencies from "~/currencies";
import countries from "~/countries";
import config from '../../../config'

export default {
  name: "ExchangerCard",
  data() {
    return {
      activeTab: "first",
      currencies: currencies,
      countries: countries,
      cryptoCurrentOptions1: 0,
      cryptoCurrentOptions2: 1,
      cryptoCurrentOption1Value: "BTC",
      cryptoCurrentOption2Value: "XRP"
    };
  },
  methods: {
    async getCourse(cur1, cur2) {
      const result = await this.$axios.$get(
        config.apiURL + `ticker/${cur1}_${cur2}`,
      );
      this.course = result.data.rate
    },
    handleSwapClick() {
      const a = this.cryptoCurrentOption1Value;
      const b = this.cryptoCurrentOption2Value;
      this.cryptoCurrentOption1Value = b;
      this.cryptoCurrentOption2Value = a;
    },
    handleOptionChange1(value, i) {
      this.cryptoCurrentOptions1 = i;
      this.cryptoCurrentOption1Value = value;
    },
    handleOptionChange2(value, i) {
      this.cryptoCurrentOptions2 = i;
      this.cryptoCurrentOption2Value = value;
    },
    getOptionByValue(arr, value) {
      for (let i = 0; i < arr.length; i++) {
        if (value === arr[i].value) {
          return arr[i];
        }
      }

      return arr[0];
    },
  },
  components: {
    Button,
    Select,
    Tag
  },
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options1: function () {
      return currencies.crypto.filter((option) => option.value !== this.cryptoCurrentOption2Value);
    },
    options2: function () {
      return currencies.crypto.filter((option) => option.value !== this.cryptoCurrentOption1Value);
    },
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

        .chips {
          overflow-x: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          margin-bottom: 16px;
          display: flex;
          justify-content: flex-start;

          .tag {
            background: var(--theme__card-exchanger__chip);
            color: var(--theme__card-exchanger__chip-color);
            cursor: pointer;
            margin-right: 8px;

            &:last-child {
              margin-right: 0;
            }
          }

          &::-webkit-scrollbar {
            display: none;
          }
        }

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

            &#pane-second {
              .selects {
                .select-wrap {
                  flex: 0 0 calc(50% - 12px);
                }

                & > :last-child {
                  display: none;
                }

                .chips {
                  display: none;
                }
              }
            }

            &#pane-third {
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
