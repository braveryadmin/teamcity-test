<template>
  <Container>
    <div class="index-reviews">
      <img id="index-reviews-1" src="~/assets/icons/star.svg" alt="Star" />
      <PageSectionHeader
        :heading="heading"
        :paragraph="paragraph"
      />
      <div class="button-wrap">
        <Button>Read more</Button>
      </div>
      <div class="row">
        <div class="item">
          <ReviewCard
            heading="Beaver Dealer: What Moves the Crypto Exchange Industry?"
            paragraph="Beaver Dealer has created a benchmark in cryptocurrency swap service. This makes them one of the most convenient places to buy cryptos."
            readingTime="10 min"
            date="11 hours ago"
          />
        </div>
        <div class="item">
          <ReviewCard
            heading="Beaver Dealer: What Moves the Crypto Exchange Industry?"
            paragraph="Beaver Dealer has created a benchmark in cryptocurrency swap service. This makes them one of the most convenient places to buy cryptos."
            readingTime="10 min"
            date="11 hours ago"
          />
        </div>
        <div class="item">
          <ReviewCard
            heading="Beaver Dealer: What Moves the Crypto Exchange Industry?"
            paragraph="Beaver Dealer has created a benchmark in cryptocurrency swap service. This makes them one of the most convenient places to buy cryptos."
            readingTime="10 min"
            date="11 hours ago"
          />
        </div>
        <div class="item">
          <ReviewCard
            heading="Beaver Dealer: What Moves the Crypto Exchange Industry?"
            paragraph="Beaver Dealer has created a benchmark in cryptocurrency swap service. This makes them one of the most convenient places to buy cryptos."
            readingTime="10 min"
            date="11 hours ago"
          />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Paragraph from "../../uiKit/Paragraph";
import Container from "../../uiKit/Container";
import InlineLink from "../../uiKit/InlineLink";
import PageSectionHeader from "../../indexPage/PageSectionHeader";
import ReviewCard from "./ReviewCard";
import Button from "../../uiKit/Button";

export default {
  name: "Reviews",
  components: {
    Container,
    Paragraph,
    InlineLink,
    PageSectionHeader,
    ReviewCard,
    Button
  },
  props: {
    heading: String,
    paragraph: String
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.index-reviews {
  position: relative;
  margin-bottom: 224px;

  #index-reviews-1 {
    position: absolute;
    width: 138px;
    height: 138px;
    top: -25%;
    left: 35%;
    z-index: 100;

    @media all and (max-width: 1024px) {
      display: none;
    }
  }

  .button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 80px;
    margin-left: -12px;
    margin-right: -12px;

    .item {
      flex: 0 0 50%;
      margin-bottom: 24px;
      padding: 0 12px;
    }
  }

  @media all and (max-width: 768px) {
    margin-bottom: 80px;

    .button-wrap {
      margin-top: 36px;
    }

    .row {
      margin-left: -16px;
      margin-right: -16px;
      margin-top: 48px;
      flex-wrap: nowrap;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .item {
        flex: none;
        margin-bottom: 0;
        padding: 0 8px;
        min-width: 264px;
        width: 90vw;
        margin-bottom: 0;

        &:first-child {
          width: calc(90vw + 8px);
          padding-left: 16px;
        }

        &:last-child {
          width: calc(90vw + 8px);
          padding-right: 16px;
        }
      }
    }
  }
}

</style>
