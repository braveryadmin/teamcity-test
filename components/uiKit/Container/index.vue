<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style lang="scss">
@import "../../../styles/media";

.container {
  max-width: 1264px;
  margin: 0 auto;
  padding: 0 32px;

  @include xs-md {
    padding: 0 16px;
  }
}
</style>
