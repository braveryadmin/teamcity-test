<template>
  <div class="top-section">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TopSection"
}
</script>

<style lang="scss">
@import "../../../styles/media";

.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  padding-top: 64px;

  @include xs-md() {
    padding-top: 32px;
  }
}
</style>
