<template>
  <div class="wrapper__monitoring container">
    <h1 class="monitoring-title">Monitoring</h1>
    <div class="monitoring">
      <div class="stat">
        <div class="inner">
          <h4 class="head">15 min</h4>
          <p class="desc">Avg. transaction speed</p>
        </div>
      </div>
      <div class="stat">
        <div class="inner">
          <h4 class="head">21,952,433</h4>
          <p class="desc">Trading LTC to ETH Volume 3M</p>
        </div>
      </div>
      <div class="stat">
        <div class="inner">
          <h4 class="head">4578</h4>
          <p class="desc">another Beaver Dealer users sold LTC for $4,8M within 24 hours.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PageSectionHeader from "../../indexPage/PageSectionHeader";
export default {
  name: 'Monitoring',
  components: {
    PageSectionHeader
  }
}
</script>

<style lang="scss" scoped>
    .monitoring-title {
      text-align: center;
      margin-bottom: 60px;
      @media screen and (min-width: 768px) {
        margin-bottom: 84px;
      }
    }
    .wrapper__monitoring {
      margin-bottom: 224px;
    }
    .monitoring {
      display: flex;
      flex-direction: column;
      gap: 48px;
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 48px;
      }
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 48px;
      }
    }
    .stat {
      position: relative;
      padding: 12px;
      border-radius: 28px;
      margin-left: -12px;
      margin-right: -12px;
      background: var(--theme__card-gradient__wrapper);
      z-index: 2;
    }
    .inner {
      // padding: 24px;
      background: var(--theme__card-gradient__background);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 104px;
      flex-basis: 100%;
      text-align: center;
      @media screen and (min-width: 768px) {
        padding: 54px;
        height: 201px;
      }
      .desc{
        color: var(--monitoring-row-desc);
        font-weight: normal;
        font-size: 10px;
        line-height: 18px;
        @media screen and (min-width: 768px) {
          font-size: 18px;
          line-height: 28px;
        }
      }
      .head{
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.005em;
        color: var(--nav-menu-item-title);
        width: 65%;
        @media screen and (min-width: 768px) {
          font-size: 46px;
          line-height: 53px;
        }
      }
    }
</style>