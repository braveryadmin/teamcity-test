<template>
  <div class="heading-container">
    <h2>{{heading}}</h2>
    <Paragraph size="lg">{{paragraph}}</Paragraph>
  </div>
</template>

<script>
import Paragraph from "../../uiKit/Paragraph";

export default {
  name: "PageSectionHeader",
  components: {
    Paragraph
  },
  props: {
    heading: String,
    paragraph: String
  }
}
</script>

<style lang="scss">
.heading-container {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
}
</style>
