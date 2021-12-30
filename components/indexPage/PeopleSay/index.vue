<template>
  <Container>
    <div class="index-people-say">
      <PageSectionHeader
        :heading="heading"
        :paragraph="paragraph"
      />
      <div class="services-wrap">
        <span class="paragraph">25+ reviews on</span>
        <div class="logos">
          <img
            src="~/assets/icons/reddit.svg"
            alt="Reddit"
            class="service-logo"
          />
          <img
            src="~/assets/icons/reddit-on-dark.svg"
            alt="Reddit"
            class="service-logo-on-dark"
          />
          <span class="amp">&</span>
          <img
            src="~/assets/icons/trustpilot.svg"
            alt="Trustpilot"
            class="service-logo"
          />
          <img
            src="~/assets/icons/trustpilot-on-dark.svg"
            alt="Reddit"
            class="service-logo-on-dark"
          />
        </div>
      </div>
      <div class="button-wrap">
        <Button>
          Read more
        </Button>
        <Button color="primary">
          Write testimonial
        </Button>
      </div>
      <div class="row">
        <div class="people-say-col">
          <div class="item">
            <ReviewCard
              imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              name="Jeffrey Celestin"
              job="CEO Hello World"
              paragraph="Beaver Dealer is by far very good I love them and there very good with support I highly recommend."
              date="11 hours ago"
              source="reddit"
            />
          </div>
          <div class="item">
            <ReviewCard
              imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              name="Jeffrey Celestin"
              job="CEO Hello World"
              paragraph="Grace from the support team was awesome. She helped me with my transaction which didn't go through due to low fees. I will recommend Beaver Dealer to all my friends, they are the best. Thanks Grace!"
              date="11 hours ago"
              source="trustpilot"
            />
          </div>
        </div>
        <div class="people-say-col">
          <div class="item">
            <ReviewCard
              imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              name="Jeffrey Celestin"
              job="CEO Hello World"
              paragraph="Beaver Dealer is by far very good I love them and there very good with support I highly recommend."
              date="11 hours ago"
              source="reddit"
            />
          </div>
          <div class="item">
            <ReviewCard
              imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              name="Jeffrey Celestin"
              job="CEO Hello World"
              paragraph="I trust Beaver Dealer and will continue using there services regardless of what fees they take. My situation with Beaver Dealer was great I transferred my bnb to eth and didn't use the memo when I sent the funds. I contacted the company immediately and received a swift."
              date="11 hours ago"
              source="reddit"
            />
          </div>
        </div>
        <div class="people-say-col">
          <div class="item">
            <ReviewCard
              imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              name="Jeffrey Celestin"
              job="CEO Hello World"
              paragraph="Beaver Dealer is by far very good I love them and there very good with support I highly recommend."
              date="11 hours ago"
              source="reddit"
            />
          </div>
          <div class="item">
            <ReviewCard
              imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              name="Jeffrey Celestin"
              job="CEO Hello World"
              paragraph="Beaver Dealer is by far very good I love them and there very good with support I highly recommend."
              date="11 hours ago"
              source="reddit"
            />
          </div>
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
  name: "PeopleSay",
  components: {
    Container,
    Paragraph,
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

.index-people-say {
  margin-bottom: 224px;

  .services-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    .paragraph {
      font-size: 20px;
      line-height: 34px;
    }

    .logos {
      display: flex;
      align-items: center;
      justify-content: center;

      .amp {
        font-size: 20px;
        line-height: 34px;
      }
    }

    img {
      margin: 0 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;

    & > * {
      margin-left: 12px;
      margin-right: 12px;
    }
  }

  .row {
    display: flex;
    margin-top: 80px;
    margin-left: -12px;
    margin-right: -12px;
    max-height: 880px;

    .people-say-col {
      flex: 0 0 33.33%;

      .item {
        margin-bottom: 24px;
        padding: 0 12px;
      }
    }
  }

  @media all and (max-width: 768px) {
    margin-bottom: 80px;

    .row {
      margin-top: 48px;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .people-say-col {
        flex: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .item {
          width: 90vw;
          margin: 0;
        }
      }
    }

    .services-wrap {
      flex-direction: column;

      .paragraph {
        font-size: 14px;
        line-height: 24px;
        margin-top: 5px;
      }

      .logos {
        margin-top: 5px;
      }
    }

    .button-wrap {
      margin-top: 24px;

      & > * {
        padding: 0 14px;

        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

[vs-theme='dark'] {
  .service-logo {
    display: none;
  }
  .service-logo-on-dark {
    display: inline-block;
  }
}

[vs-theme='light'] {
  .service-logo {
    display: inline-block;
  }
  .service-logo-on-dark {
    display: none;
  }
}
</style>
