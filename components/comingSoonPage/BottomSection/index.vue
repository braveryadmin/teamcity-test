<template>
  <div class="bottom-section">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BottomSection"
}
</script>

<style lang="scss">
.bottom-section {
  text-align: center;
  padding-bottom: 24px;
}
</style>
