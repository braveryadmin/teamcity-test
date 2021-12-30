<template>
  <button class="button" :class="`${size ? size : 'md'} ${color ? color : 'secondary'}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    size: String,
    color: String
  }
}
</script>

<style lang="scss">
.button {
  border-color: transparent;
  background-color: var(--primary-500);
  color: var(--white);
  cursor: pointer;
  transition-property: all;
  transition-duration: var(--transition__timing__sm);
  transition-timing-function: var(--transition__function);
  white-space: nowrap;

  &.xl {
    height: 64px;
    border-radius: 10px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 18px;
    line-height: 26px;
  }

  &.lg {
    height: 54px;
    border-radius: 10px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 18px;
    line-height: 26px;
  }

  &.md {
    height: 48px;
    border-radius: 10px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 16px;
    line-height: 16px;
  }

  &.secondary {
    background: var(--theme__card__button-secondary__background);
    color: var(--theme__card__button-secondary__color);
  }

  &.primary {
    background: var(--theme__card__button-primary__background);
    color: var(--theme__card__button-primary__color);
  }

  &, &:hover {
    background-color: var(--primary-500);
    color: var(--white);
    border-color: transparent;
  }
}
</style>
