<template>
  <div class="coming-soon-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ComingSoonContainer"
}
</script>

<style lang="scss">
@import "../../../styles/media";

.coming-soon-container {
  position: relative;
  max-width: 640px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 32px;

  @include xs-md {
    padding: 0 16px;
  }
}
</style>
