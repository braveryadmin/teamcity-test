<template>
  <div class="index-footer-exchange">
    <Container>
      <PageSectionHeader :heading="heading" />
      <ExchangerCard
        :footer="true"
      />
    </Container>
  </div>
</template>

<script>
import Container from "../../uiKit/Container";
import ExchangerCard from "../Hero/ExchangerCard";
import PageSectionHeader from "../PageSectionHeader";

export default {
  name: "Hero",
  components: {
    Container,
    ExchangerCard,
    PageSectionHeader
  },
  props: {
    heading: String,
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.index-footer-exchange {
  margin-bottom: 96px;
  max-width: 100vw;

  .heading-container {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;

    .text {
      position: relative;
      z-index: 10;
    }

    .line {
      position: absolute;
      left: 458px;
      top: 72px;
      z-index: 1;
    }

    @media all and (min-width: 769px) and (max-width: 960px) {
      max-width: 720px;

      .line {
        top: 144px;
        left: auto;
        right: 50%;
        transform: translateX(50%);
      }
    }

    @media all and (min-width: 561px) and (max-width: 768px) {
      max-width: 520px;

      .line {
        top: 38px;
        left: auto;
        right: 50%;
        transform: translateX(50%);
      }
    }

    @media all and (max-width: 560px) {
      max-width: 320px;

      .line {
        top: 76px;
        left: auto;
        right: 50%;
        transform: translateX(50%);
      }
    }

    @include xs-md() {
      .line {
        height: 48px;
        width: auto;
      }
    }
  }

  @media all and (max-width: 768px) {
    margin-bottom: 56px;
    padding-top: 64px;
  }
}

</style>
