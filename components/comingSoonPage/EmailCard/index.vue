<template>
  <div class="email-card">
    <div class="inner">
      <Paragraph size="lg">
        Simply enter your email adress, and don't miss: "Cryptocurrency for Humanitarians" tutorial, weekly digests with analytics, fascinating quizzes, and more.
      </Paragraph>
      <EmailForm />
    </div>
  </div>
</template>

<script>
import Paragraph from "../../uiKit/Paragraph";
import EmailForm from "../EmailForm";

export default {
  name: "EmailCard",
  components: {
    Paragraph,
    EmailForm
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.email-card {
  background: var(--theme__card-primary__border);
  color: var(--theme__card-primary__contrast-text);
  border-radius: 28px;
  width: 100%;
  text-align: left;
  padding: 12px;
  margin-top: 64px;
  margin-bottom: 24px;

  .inner {
    background: var(--theme__card-primary__bg);
    border-radius: 20px;
    padding: 32px;

    @include xs-md() {
      padding: 20px;
    }
  }

  @include xs-md() {
    padding: 4px;
    margin-top: 28px;
    margin-bottom: 24px;
  }
}
</style>
