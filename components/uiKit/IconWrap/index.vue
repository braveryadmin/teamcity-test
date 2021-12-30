<template>
  <div class="icon">
    <slot />
  </div>
</template>

<script>
export default {
  name: "IconWrap"
}
</script>

<style lang="scss">
.icon {
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: var(--theme__icon__primary);
    }
  }
}
</style>
