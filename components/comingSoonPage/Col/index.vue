<template>
  <div class="col">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col"
}
</script>

<style lang="scss">
.col {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
</style>
