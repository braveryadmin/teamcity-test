<template>
  <div class="index-hero">
    <Container>
      <div class="heading-container">
        <div class="text">
          <h1>{{heading}}</h1>
          <Paragraph size="xl">{{paragraph}}</Paragraph>
        </div>
        <img
          src="~/assets/images/hero-line.svg"
          alt="hero"
          class="line"
        />
      </div>
      <ExchangerCard />
      <div class="index-hero-stars">
        <img id="index-star-1" src="~/assets/icons/star.svg" alt="Star" />
        <img id="index-star-2" src="~/assets/icons/star.svg" alt="Star" />
        <img id="index-star-3" src="~/assets/icons/star.svg" alt="Star" />
      </div>
    </Container>
  </div>
</template>

<script>
import Paragraph from "../../uiKit/Paragraph";
import Container from "../../uiKit/Container";
import ExchangerCard from "./ExchangerCard";

export default {
  name: "Hero",
  components: {
    Container,
    Paragraph,
    ExchangerCard
  },
  props: {
    heading: String,
    paragraph: String
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.index-hero {
  margin-bottom: 212px;
  max-width: 100vw;
  padding-top: 192px - 24px;

  .container {
    position: relative;
  }

  .index-hero-stars {
    #index-star-1 {
      position: absolute;
      width: 138px;
      height: 138px;
      top: -18%;
      left: 60%;
      opacity: 0.1;
    }
    #index-star-2 {
      position: absolute;
      width: 138px;
      height: 138px;
      top: 10%;
      left: -5%;
    }
    #index-star-3 {
      position: absolute;
      width: 230px;
      height: 230px;
      top: 25%;
      right: -5%;
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

  .heading-container {
    position: relative;
    max-width: 800px;
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
    margin-bottom: 92px;
    padding-top: 64px;
  }

  @media all and (min-height: 980px) {
    padding-top: 256px;

    .exchanger-card {
      margin-top: 240px;
    }
  }
  @media all and (min-height: 1200px) {
    padding-top: 320px;

    .exchanger-card {
      margin-top: 360px;
    }
  }
  @media all and (min-height: 1440px) {
    padding-top: 400px;

    .exchanger-card {
      margin-top: 560px;
    }
  }
}

</style>
