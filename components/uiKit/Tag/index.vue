<template>
  <span class="tag" :class="`${size ? size : 'md'} ${color ? color : 'primary'}`">
    <slot />
  </span>
</template>

<script>
export default {
  name: "Tag",
  props: {
    size: String,
    color: String
  }
}
</script>

<style lang="scss">
.tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 14px;

  &.lg {
    height: 36px;
    border-radius: 10px;
    padding-left: 8px;
    padding-right: 8px;
  }

  &.md {
    font-size: 14px;
    line-height: 14px;
    height: 24px;
    border-radius: 5px;
    padding-left: 6px;
    padding-right: 6px;
  }

  &.primary {
    background-color: var(--primary-500);
    color: var(--white);
  }

  &.danger {
    background-color: var(--theme__dander);
    color: var(--white);
  }
  &.success {
    background-color: var(--theme__success);
    color: var(--white);
  }
}
</style>
