<template>
  <div class="index-review-card">
    <div class="header">
      <Tag>Article</Tag>
      <div class="reading-time">
        <ClockIcon />
        <span>{{readingTime}}</span>
      </div>
    </div>
    <h4>{{heading}}}</h4>
    <Paragraph>{{paragraph}}</Paragraph>
    <div class="footer">
      <span class="date">{{date}}</span>
      <InlineLink :href="href">Read article</InlineLink>
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
    heading: String,
    paragraph: String,
    date: String,
    readingTime: String,
    href: String
  }
}
</script>

<style lang="scss">
.index-review-card {
  background: var(--theme__card__background);
  border: 1px solid var(--theme__card__border__color);
  padding: 32px;
  border-radius: 20px;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .reading-time {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 24px;
      color: var(--theme__card__muted);

      svg {
        margin-right: 4px;
      }
    }
  }

  h4 {
    max-width: 300px;
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

    a {
      font-size: 14px;
      line-height: 12px;
      text-decoration: underline;
    }
  }

  @media all and (max-width: 768px) {
    padding: 20px;
  }
}
</style>
