<template>
  <p class="paragraph" :class="`${size ? size : 'md'} ${color ? color : 'secondary'}`">
    <slot />
  </p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    size: String,
    color: String,
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.paragraph {
  &.xl {
    font-size: 24px;
    line-height: 40px;
  }
  &.lg {
    font-size: 20px;
    line-height: 34px;
  }
  &.md {
    font-size: 16px;
    line-height: 28px;
  }
  &.sm {
    font-size: 14px;
    line-height: 24px;
  }
  &.xs {
    font-size: 12px;
    line-height: 20px;
  }

  @include xs-md() {
    &.xl {
      font-size: 16px;
      line-height: 28px;
    }
    &.lg {
      font-size: 14px;
      line-height: 24px;
    }
    &.md {
      font-size: 16px;
      line-height: 28px;
    }
    &.sm {
      font-size: 14px;
      line-height: 26px;
    }
    &.xs {
      font-size: 12px;
      line-height: 20px;
    }
  }

  &.primary {
    color: var(--theme__text-color__primary);
  }
  &.muted {
    color: var(--theme__text-color__secondary);
  }
  &.muted {
    color: var(--theme__text-color__muted);
  }
}
</style>
