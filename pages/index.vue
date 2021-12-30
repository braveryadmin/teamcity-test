<template>
  <body vs-theme="dark">
  <div id="app" class="index" style="overflow-x: hidden;">
    <div id="curtain" />
    <Header />
    <Hero
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
      heading="A trusted and secure cryptocurrency exchange."
      paragraph="Fast and secure way to exchange and purchase 150+ cryptocurrencies. 24/7 live-chat support."
    />
    <Accessible
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
      heading="Accessible to anyone"
      paragraph="Lightning fast transactions. Work with ease and peace of mind. Exchange cryptocurrency today with just a few clicks."
    />
    <Monitoring
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
      heading="Monitoring"
      speed="15 min"
      errors="0"
      time="10 min"
      reserve="221 BTC"
    />
    <PeopleSay
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
      heading="Here’s what people have to say about us."
    />
    <Reviews
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
      heading="Reviews"
    />
    <FooterExchange
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
      heading="Exchange and purchase cryptocurrencies"
    />
    <Footer />

    <v-idle
      :style="{display: 'none'}"
      @idle="onidle"
      :loop="true"
      :duration="60"
    />
    <transition name="fade">
      <reminder class="reminder-sticky" v-if="remind"  @onRemind="handleRemind"/>
    </transition>
  </div>
  </body>
</template>

<script>
import themeSwitcher from "../plugins/themeSwitcher";
import Header from "../components/indexPage/Header";
import Hero from "../components/indexPage/Hero";
import Accessible from "../components/indexPage/Accessible";
import Reviews from "../components/indexPage/Reviews";
import PeopleSay from "../components/indexPage/PeopleSay";
import Monitoring from "../components/indexPage/Monitoring";
import Footer from "../components/indexPage/Footer";
import FooterExchange from "../components/indexPage/FooterExchange";
import Reminder from "../components/uiKit/Reminder";

export default {
  name: "Index",
  components: {
    Header,
    Hero,
    Accessible,
    Reviews,
    PeopleSay,
    Monitoring,
    FooterExchange,
    Footer,
    Reminder
  },
  beforeMount: () => {
    themeSwitcher();
  },
  data() {
    return {
      remind: false
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    document.getElementById("curtain").style.opacity = 0;
  },
  head: {
    title: "Beaver Dealer. Coming soon.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "There will be a superfast cryptocurrency exchanger with KYC and transparent commissions."
      }
    ]
  },
  methods: {
    onidle() {
      this.remind = true;
    },
    handleRemind() {
      this.remind = false;
    }
  },
}
</script>

<style lang="scss">
@import "../styles/media";

#curtain {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000000;
  background: white;
  opacity: 1;
  transition: all 1s ease;
  pointer-events: none;
}
</style>
