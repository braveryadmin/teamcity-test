<template>
  <div>
    <div class="learn-more">
      <img class="learn-more-img" src='/_nuxt/assets/images/book.png'/>
      <div class="learn-more-text">If you want more - learn out crash course</div>
      <Button class="learn-more-button">Learn more</Button>
    </div>
  </div>
</template>

<script>
import Button from '../Button'
export default {
  components: {
    Button
  },
  name: "LearnMore",
}
</script>

<style lang='scss' scoped>
  .learn-more {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: var(--theme__card-exchanger__background);
    border-radius: 10px;
    gap: 28px;
    text-align: center;
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      padding: 42px 64px;
      gap: 0;
    }
  }
  .learn-more-img {
    width: 200px;
    height: 200px;
    margin-right: 0px;
    @media screen and (min-width: 1024px) {
      margin-right: 32px;
    }
  }
  .learn-more-text {
    color: var(--theme__text-color__headings);
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 156%;
    @media screen and (min-width: 768px) {
      font-size: 46px;
      line-height: 53px;
      letter-spacing: 115%;
      text-align: left;
    }
  }
  .learn-more-button {
    background: var(--learn-block-button);
    color: var(--learn-block-button-text);
    padding: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    @media screen and (min-width: 1024px) {
      width: 30%;
    }
  }
</style>