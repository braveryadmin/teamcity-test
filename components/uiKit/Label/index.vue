<template>
  <span class="label">
    <slot />
  </span>
</template>

<script>
export default {
  name: "Label"
}
</script>

<style lang="scss">
@import "../../../styles/media";

.label {
  font-size: 14px;
  line-height: 20px;

  @include xs-md() {
    font-size: 10px;
    line-height: 18px;
  }
}
</style>
