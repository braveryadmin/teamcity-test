<template>
  <div class="index-feedback-card">
    <div class="user-info">
      <img
        :src="imageSrc"
        :alt="name"
        class="user-image"
      />
      <div class="text-wrap">
        <h4>{{name}}</h4>
        <span>{{job}}</span>
      </div>
    </div>
    <Paragraph>{{paragraph}}</Paragraph>
    <div class="footer">
      <span class="date">{{date}}</span>
      <img
        v-if="source === 'trustpilot'"
        src="~/assets/icons/trustpilot-small.svg"
        alt="Trustpilot"
      />
      <img
        v-if="source === 'reddit'"
        src="~/assets/icons/reddit-small.svg"
        alt="Reddit"
      />
    </div>
  </div>
</template>

<script>
import Paragraph from "../../uiKit/Paragraph";
import InlineLink from "../../uiKit/InlineLink";
import Tag from "../../uiKit/Tag";
import ClockIcon from "~/assets/icons/Clock";

export default {
  name: "ReviewCard",
  components: {
    Paragraph,
    InlineLink,
    Tag,
    ClockIcon
  },
  props: {
    imageSrc: String,
    name: String,
    job: String,
    date: String,
    paragraph: String,
    source: String
  }
}
</script>

<style lang="scss">
.index-feedback-card {
  background: var(--theme__card__background);
  border: 1px solid var(--theme__card__border__color);
  padding: 32px;
  border-radius: 20px;

  .user-info {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    .user-image {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      margin-right: 16px;
    }

    .text-wrap {
      h4 {
        margin: 0;
      }
      span {
        color: var(--theme-people-say-job-color);
      }
    }
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .date {
      color: var(--theme__card__muted);
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media all and (max-width: 768px) {
    padding: 20px;
  }
}
</style>
