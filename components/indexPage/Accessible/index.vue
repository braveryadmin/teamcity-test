<template>
  <Container>
    <div class="index-accessible">
      <PageSectionHeader
        :heading="heading"
        :paragraph="paragraph"
      />
      <div class="row">
        <div class="item">
          <img class="img" src="~/assets/icons/accessible-icon-support.svg" alt="Beaver Dealer consultant will help you" />
          <h3>Beaver Dealer consultant will help you</h3>
          <Paragraph size="md">Let us help you!</Paragraph>
          <InlineLink href="#">Read more</InlineLink>
        </div>
        <div class="item">
          <img class="img" src="~/assets/icons/accessible-icon-quick.svg" alt="Quick transactions" />
          <h3>Quick transactions</h3>
          <Paragraph size="md">We are loved for a quick transactions in less than 10 min.</Paragraph>
        </div>
        <div class="item">
          <img class="img" src="~/assets/icons/accessible-icon-gift.svg" alt="Free coverage" />
          <h3>Free coverage</h3>
          <Paragraph size="md">Free coverage to all customers irrespective of their rate.</Paragraph>
        </div>
        <div class="item">
          <img class="img" src="~/assets/icons/accessible-icon-education.svg" alt="Educational content" />
          <h3>Educational content</h3>
          <Paragraph size="md">Our Blockchain & Crypto crash course.</Paragraph>
          <InlineLink href="#">Read more</InlineLink>
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

export default {
  name: "Accessible",
  components: {
    Container,
    PageSectionHeader,
    Paragraph,
    InlineLink
  },
  props: {
    heading: String,
    paragraph: String
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.index-accessible {
  margin-bottom: 224px;

  .heading-container {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 80px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 25%;
      text-align: center;
      padding: 0 16px;
      margin-bottom: 40px;

      .img {
        margin-bottom: 20px;
      }

      p {
        margin-bottom: 4px;
      }

      a {
        font-size: 14px;
      }
    }
  }

  @media all and (max-width: 768px) {
    margin-bottom: 80px;

    .row {
      margin-top: 48px;

      .item:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media all and (min-width: 561px) and (max-width: 768px) {
    .row {
      .item {
        flex: 0 0 50%;
      }
    }
  }

  @media all and (max-width: 560px) {
    .row {
      .item {
        flex: 0 0 100%;
        padding: 0;
      }
    }
  }
}

</style>
