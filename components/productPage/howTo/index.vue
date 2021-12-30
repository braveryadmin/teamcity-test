<template>
  <div class="howto-wrapper container">
    <h1 class="howto-title">How to exchange LTC to ETH</h1>
    <div class="how-to markdown">
      <p>How to exchange LTC to ETH</p>
      <p>Here is a simple guide on how to exchange LTC for ETH on our platform:</p>
      <li>Select Litecoin and Ethereum in the exchange window, then enter the amount of the cryptocurrency you want to exchange.</li>
      <li>Choose at what rate you want to exchange cryptocurrency - fixed or floating.
      Enter the wallet address.</li>
      <li>You will be shown the wallet address and the exact amount of cryptocurrency that you will need to send to it. Please do it in one transaction.</li>
      <p>That's all! Enjoy your new Ethereum.</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HowTo',
  props: {
    
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
 .howto-title {
    text-align: center;
    margin-bottom: 60px;
    
    @media screen and (min-width: 768px) {
      margin-bottom: 84px;
    }
 }
</style>
